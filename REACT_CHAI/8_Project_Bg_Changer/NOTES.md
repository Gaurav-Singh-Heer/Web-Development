# 🎨 Background Color Changer (React + Vite + Tailwind)

## 🚀 Step 1 — Create Vite Project

```bash
npm create vite@latest
```

**Options selected:**

* Project name → `04BgChanger`
* Framework → `React`
* Variant → `JavaScript`
* Install dependencies → `Yes`

Project created at:

```
04BgChanger/
```

Run dev server:

```bash
cd 04BgChanger
npm run dev
```

---

## 🎨 Step 2 — Install Tailwind CSS (Vite method)

Install Tailwind with Vite plugin:

```bash
npm install tailwindcss @tailwindcss/vite
```

Official docs:
👉 [https://tailwindcss.com/docs/installation/using-vite](https://tailwindcss.com/docs/installation/using-vite)

---

## 🧠 Core Idea of Project

We are building a **Background Color Changer**.

Goal:

* Store color in a variable
* Update UI when color changes
* Use React state (`useState`)

Because in React:

> UI updates only when **state changes**

So we will store the background color in **state**.

---

## ⚛️ Step 3 — Using `useState` for Color

We need a variable that:

* Stores current background color
* Updates UI instantly

That’s why we use:

```js
useState()
```

---

## 🧩 Basic Logic

1. Create state variable `color`
2. Set default color
3. Change color on button click
4. Apply color to background

---

## 🧠 Key Concepts

### 1. `useState`

```js
const [color, setColor] = useState("olive")
```

* `color` → current value
* `setColor()` → updates value
* When state updates → UI re-renders

---

### 2. Dynamic Style

```jsx
style={{ backgroundColor: color }}
```

Background changes based on state.

---

### 3. Event Handling

```jsx
onClick={() => setColor("red")}
```

Click → state update → UI update

---

## 🏁 Final Output

When user clicks buttons:

* Background color changes instantly
* React re-renders UI
* Smooth transition via Tailwind

---

## 🧾 Summary

We learned:

* Vite setup
* Tailwind setup
* React `useState`
* Dynamic UI update
* Event handling

---