# 🌗 Theme Toggle using React Context API (Deep Dive)

This guide explains **how and why** we build a **Theme Toggle (Light / Dark Mode)** using  
**React Context API + Tailwind CSS**, step by step.

---

## 🎯 Goal of This Section

- Go **deeper into Context API**
- Understand **global state with methods**
- Implement **Theme Toggle** similar to Tailwind’s dark mode
- Learn **why Context is better than props here**

---

## 📌 Why Theme Toggle is a Perfect Context Example

Theme is:
- **Global** (used by many components)
- **Independent** of component hierarchy
- **Frequently accessed**

❌ Passing theme via props → prop drilling  
✅ Using Context → clean, scalable solution

---

## 🧱 Initial App Layout (`App.jsx`)

```jsx
import './App.css'

function App() {
  return (
    <>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/** Theme BUTTON */}
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/** Card */}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
````

### ✅ Why this layout?

* Centralized container
* Clear separation between **Theme Button** and **Card**
* Tailwind utility-first styling

---

## 📁 STEP 1 — Create Context Folder

```
src/
 └─ contexts/
```

### Why?

To keep **global state logic** separate from UI components.

---

## 🪜 STEP 2 — Create `theme.js` (Context + Provider + Hook)

📄 `src/contexts/theme.js`

```js
import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",     // global variable
  darkTheme: () => {},    // method
  lightTheme: () => {},   // method
});
```

### ✅ Why define default values?

* Helps with **autocomplete**
* Makes Context self-documented
* Avoids undefined errors

---

### Export Provider Directly

```js
export const ThemeProvider = ThemeContext.Provider;
```

### Why?

* No need to create a separate Provider file
* Cleaner for small / medium features

---

### Create Custom Hook

```js
export default function useTheme() {
  return useContext(ThemeContext);
}
```

### ✅ Why custom hook?

* Avoid repeated `useContext(ThemeContext)`
* Cleaner imports
* Industry best practice

---

## 🪜 STEP 3 — Wrap App with ThemeProvider

```jsx
import { ThemeProvider } from './contexts/theme'

return (
  <ThemeProvider>
    <div className="flex flex-wrap min-h-screen items-center">
      ...
    </div>
  </ThemeProvider>
)
```

### Why wrap App?

So **every component** can access theme state.

---

## 🪜 STEP 4 — Add Theme Logic in `App.jsx`

```jsx
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => setThemeMode("light");
  const darkTheme = () => setThemeMode("dark");
```

### Why state in App?

* App is the **root**
* Theme affects entire UI
* Context distributes it

---

### Apply Theme to HTML Element

```js
useEffect(() => {
  document.querySelector('html').classList.remove("light", "dark");
  document.querySelector('html').classList.add(themeMode);
}, [themeMode]);
```

### ✅ Why this?

* Tailwind dark mode works via **class**
* We mimic Tailwind’s behavior
* Any `dark:` utility now reacts automatically

---

### Pass Values to Provider

```jsx
return (
  <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
    ...
  </ThemeProvider>
)
```

### Why `value`?

This is how data + methods enter Context.

---

## 🪜 STEP 5 — Create Components Folder

```
src/
 └─ components/
     ├─ ThemeBtn.jsx
     └─ Card.jsx
```

---

## 🪜 STEP 6 — Theme Toggle Button

📄 `components/ThemeBtn.jsx`

```jsx
import React from "react";
import useTheme from "../contexts/theme";
```

### Why `useTheme()`?

To access:

* `themeMode`
* `lightTheme`
* `darkTheme`

---

### Toggle Logic

```js
const { themeMode, lightTheme, darkTheme } = useTheme();

const onChangeBtn = (e) => {
  const darkModeStatus = e.currentTarget.checked;
  darkModeStatus ? darkTheme() : lightTheme();
};
```

### Why this logic?

* Checkbox = true → dark
* Checkbox = false → light
* Clean boolean-based toggle

---

### Full Toggle Component

```jsx
<input
  type="checkbox"
  className="sr-only peer"
  onChange={onChangeBtn}
  checked={themeMode === "dark"}
/>
```

### Why `checked`?

Keeps UI **in sync with global state**

---

## 🔍 Result

Inspect element shows:

```html
<html class="dark">
```

or

```html
<html class="light">
```

Theme switches globally 🎉

---

## 🤔 Problem: Card Doesn’t Know Theme Changed

### Who informs Card?

➡️ **Context + App re-render**

Because:

* Theme state changes
* App re-renders
* Context updates
* All consumers update automatically

---

## 🌬 Tailwind Dark Mode Setup

We want:

```js
darkMode: "class"
```

But you **don’t have `tailwind.config.js`**.

---

## ❓ Why No `tailwind.config.js`?

You installed Tailwind using:

```js
import tailwindcss from '@tailwindcss/vite'
```

Tailwind v4:

* Works without config
* But **advanced features need config**

---

## 🪜 STEP 7 — Create Tailwind Config

### Option 1 (CLI)

```bash
npx tailwindcss init
```

---

### Option 2 (Manual)

📄 `tailwind.config.js`

```js
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

---

## 🪜 STEP 8 — IMPORTANT (Tailwind v4 ONLY)

Tailwind v4 **ignores config unless linked**.

Open:

📄 `src/index.css`

Add at top:

```css
@config "../tailwind.config.js";
@import "tailwindcss";
```

Do the same in `App.css` if used.

---

### ❌ Without this

* `darkMode: "class"` won’t work

### ✅ With this

* Dark mode works perfectly

---

## 🧪 Test Example

```jsx
<div className="bg-white dark:bg-black text-black dark:text-white">
  Hello Theme
</div>
```

Toggle button → theme switches instantly.

---

## 🏁 Final Understanding

* Context stores **theme + methods**
* App controls actual DOM changes
* Components only **consume**
* Tailwind reacts via class system
* Clean, scalable, professional setup

---

## 🧠 What You Learned

* Context with variables + methods
* Custom hooks for context
* Global UI state
* Tailwind dark mode integration
* Real-world React pattern

---

## 🚀 Next Natural Steps

* Persist theme in `localStorage`
* Sync theme with system preference
* Add animation to toggle
* Compare with Redux implementation

You’re now using Context like a **pro** 💪
