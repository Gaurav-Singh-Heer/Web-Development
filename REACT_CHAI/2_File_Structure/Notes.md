# React Setup Notes – `01basicreact`

## 🧹 Cleaning Unnecessary Files

Inside the **public** folder, we can remove unused default assets to keep the project clean:

* `favicon.ico`
* `logo192.png`
* `logo512.png`
* Any unused images or icons

We also remove unnecessary meta tags and comments from `index.html` if they are not required.

---

## 📄 About `manifest.json`

`manifest.json` is used when we want our web app to behave like a **mobile installable app** (PWA).

It provides metadata such as:

* App name
* Icons
* Theme color
* Display mode

This file becomes important when the app is:

* installed on a mobile device
* installed on desktop as a PWA

Reference:
[https://developers.google.com/web/fundamentals/web-app-manifest/](https://developers.google.com/web/fundamentals/web-app-manifest/)

If we are not building a PWA, it can be removed.

---

## 🧱 `index.html` and Root Element

Inside `public/index.html` we have:

```html
<div id="root"></div>
```

This `root` div is where React renders the entire application.

In `index.js`:

```js
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

So:

* `index.html` → contains root container
* `index.js` → renders React App into that container

---

## ⚛️ React.StrictMode

```js
<React.StrictMode>
  <App />
</React.StrictMode>
```

* Used only in **development**
* Helps detect:

  * unsafe lifecycle methods
  * potential bugs
  * deprecated APIs
* Does **not** affect production build

It may render components twice in dev mode to check side effects.

---

## 📦 `App.js`

In `App.js` we return JSX:

```js
function App() {
  return <h1>Hello</h1>;
}
```

* This `h1` can be replaced with any component or layout.
* `App` is just a component name — you can rename it.

---

## ❓ Common Questions

### 1️⃣ Why is `index.js` created automatically?

When we run:

```bash
npx create-react-app myapp
```

It uses **react-scripts**, which automatically creates:

* `index.js`
* `App.js`
* folder structure
* webpack config (hidden)

So `index.js` is the **entry point** of React.

---

### 2️⃣ Flow of React App

```
index.html
   ↓
index.js
   ↓
<App />
   ↓
Components
```

---

### 3️⃣ Why remove default files?

To:

* keep project minimal
* improve clarity
* avoid unused assets
* learn React structure manually

---

## 🧠 Summary

* Remove unused files from `public`
* `manifest.json` → used for PWA/mobile install
* `root` div → main React mounting point
* `index.js` → entry file created by react-scripts
* `StrictMode` → development-only checks
* `App.js` → main component

---
  # React with Vite – `01vitereact` Notes

## ⚡ Difference from Create React App (CRA)

In **Vite React**, the setup is much more lightweight compared to CRA.

### Key Differences

* No **react-scripts** in `package.json`
* Faster dev server
* Less boilerplate
* Simpler structure

---

## 📄 `index.html` in Vite

In Vite, `index.html` is at the **root** of the project
(not inside a public folder like CRA).

It directly contains the script that loads React:

```html
<script type="module" src="/src/main.jsx"></script>
```

So Vite uses this file as the entry point.

---

## 🧱 Rendering in Vite

In `main.jsx` we directly render React:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

Here:

* We directly call `.render()`
* No react-scripts involved
* Vite handles bundling

---

## 🪶 Lightweight Setup

Vite is lightweight because:

* Faster startup
* Hot reload is faster
* Less configuration
* Uses ES modules

---

## 📦 Can we render from `App.jsx` directly?

Yes.
Instead of `main.jsx`, you *can* render directly inside `App.jsx`,
but standard practice is to keep `main.jsx` as the entry file.

---

## 📁 Creating Custom Components

Inside `src`, we can create our own components.

Example:

```
src/
 ├── App.jsx
 ├── main.jsx
 ├── Chai.jsx
```

---

## ⚠️ File naming in Vite + React

If a file contains JSX, it should be named:

```
ComponentName.jsx
```

Example:

```
Chai.jsx
```

Not:

```
chai.js   ❌
```

Why?

* Vite expects `.jsx` for JSX syntax
* Component names should start with a capital letter

```jsx
function Chai() {
  return <h2>Tea ready</h2>;
}

export default Chai;
```

---

## 🔤 Component Naming Rule

React components must start with **capital letter**:

```
Chai.jsx  ✅
chai.jsx  ❌
```

Because React treats lowercase as HTML tags.

---

## 🧠 Summary

* Vite does NOT use react-scripts
* `index.html` directly loads main script
* `.render()` is called in `main.jsx`
* Vite is lightweight and fast
* JSX files should use `.jsx` extension
* Component names must start with capital letters
* We can create custom components inside `src`

---
