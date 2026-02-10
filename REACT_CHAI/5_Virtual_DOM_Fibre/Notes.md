# React Virtual DOM & `createRoot` (Vite + React)

## Is Virtual DOM an old concept?
No. **Virtual DOM is still a core concept in React.**  
You don’t directly interact with it much anymore, but React still uses it internally to update the UI efficiently.

Modern React (with Fiber architecture) has improved how updates are scheduled and applied, but the idea of comparing UI trees and updating only what changed is still fundamental.

---

## What happens in Vite React (`main.jsx`)?

In a Vite + React project, you’ll see something like:

```js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### `createRoot()` does this:

* Creates a **React root**
* Initializes React’s internal tree structure
* Prepares React to manage UI updates efficiently
* Connects React to the real browser DOM

It does **not** create a real DOM.
It creates a **virtual representation** of your UI.

---

## How React updates UI

### 1. Virtual DOM Tree

React creates a **tree-like structure** in memory representing your UI.

Example:

```
App
 ├── Navbar
 ├── Hero
 └── Footer
```

This is called the **Virtual DOM**.

---

### 2. When state changes

If something changes (like `setState`, `useState`, props update):

React will:

1. Create a **new Virtual DOM**
2. Compare it with the **previous Virtual DOM**
3. Find only the differences
4. Update only the changed parts in the real DOM

This process is called **Reconciliation**.

---

## Browser vs React Updates

### Normal browser page reload

When a page reload happens:

* Entire DOM is destroyed
* Entire page is repainted
* Everything loads again

This is expensive.

---

### React approach (Virtual DOM)

React:

* Tracks UI in a tree structure
* Compares old vs new tree
* Updates only changed nodes
* Avoids full page reload
* Makes UI fast

Example:

If only a button text changes:

❌ Browser reload → full page repaint
✅ React → updates only that button text

---

## Key Concepts

### Virtual DOM

A lightweight JS representation of the real DOM.

### Reconciliation

Process of comparing old and new Virtual DOM.

### Diffing

Finding what changed between trees.

### `createRoot`

Initializes React’s rendering system and connects it to the browser DOM.

---

## Important Note

React **does NOT delete the whole DOM** on updates.
It only updates what actually changed.

But on a **full page reload**, the browser rebuilds everything.

---

## Simple Analogy

Browser reload = rebuild entire house 🏠
React update = repaint one wall 🎨

---

## Summary

* Virtual DOM is still used in modern React
* `createRoot()` sets up React rendering
* React keeps a tree structure of UI
* On change → compare → update only changed parts
* Faster than full browser reload

---
```
```
---

# React Fiber (Modern React Engine)

## What is React Fiber?

**React Fiber** is the modern rendering engine of React (introduced in React 16).  
It is an improved version of the old reconciliation algorithm.

Virtual DOM still exists, but **Fiber controls how updates happen**.

Think of it like this:

```

Virtual DOM = WHAT changed
Fiber       = HOW and WHEN to update it

```

---

## Why React Fiber was introduced

Old React (before Fiber):

- Updates were synchronous
- Once rendering started → it could not pause
- Large UI updates could block the browser
- Animations & interactions could lag

So React team built **Fiber architecture** to make rendering:

- Interruptible
- Prioritized
- Smoother
- Faster for large apps

---

## Core Idea of Fiber

React breaks rendering work into **small units (fibers)**.

Instead of updating the whole UI in one go, React:

1. Splits work into chunks  
2. Schedules them  
3. Prioritizes important updates  
4. Can pause and resume work  

This makes UI feel smoother.

---

## How Fiber works (simple)

When state changes:

1. React creates a new Virtual DOM
2. Fiber compares old vs new
3. Work is split into small tasks
4. Important updates first
5. Low priority updates later
6. Final changes applied to real DOM

---

## Example

Typing in input field while heavy UI exists.

Without Fiber:
- Whole UI updates
- Input may lag

With Fiber:
- Typing is **high priority**
- Animation/background updates = low priority
- UI stays smooth

---

## Fiber Tree

React builds a **Fiber Tree**.

Each component becomes a "fiber node".

```

App Fiber
├── Navbar Fiber
├── Sidebar Fiber
└── Content Fiber

````

Each node stores:

- Component type
- Props
- State
- DOM reference
- Priority

---

## Two Phases in Fiber

### 1. Render Phase (can pause)
- Build new fiber tree
- Compare changes
- Can stop and resume
- Does NOT touch real DOM

### 2. Commit Phase (fast)
- Apply changes to real DOM
- Cannot pause
- Very fast

---

## Priority System

Fiber assigns priority:

| Update Type | Priority |
|-------------|---------|
Typing input | High |
Button click | High |
Animation | Medium |
Data fetch UI | Low |

This is why React feels smooth.

---

## Where `createRoot` fits

In Vite/React:

```js
ReactDOM.createRoot(root).render(<App />)
````

`createRoot()` enables **Concurrent features** powered by Fiber.

It allows React to:

* Schedule updates
* Pause work
* Prioritize rendering
* Use modern Fiber engine fully

Old React used:

```js
ReactDOM.render()
```

New React uses:

```js
createRoot()
```

because Fiber supports concurrent rendering.

---

## Virtual DOM vs Fiber

| Feature             | Virtual DOM    | Fiber                 |
| ------------------- | -------------- | --------------------- |
| Purpose             | Represent UI   | Manage rendering work |
| Type                | Data structure | Algorithm + engine    |
| Introduced          | Early React    | React 16              |
| Handles scheduling? | ❌              | ✅                     |
| Interruptible?      | ❌              | ✅                     |

---

## Important Note

People say:

> "Virtual DOM is outdated"

This is wrong.

Reality:

* Virtual DOM still exists
* Fiber sits on top of it
* Fiber makes updates smarter

---

## Simple Analogy

Virtual DOM = blueprint of house 🏠
Fiber = construction manager 👷

It decides:

* what to build first
* what can wait
* what to update

---

## Interview One-Liner

**React Fiber is the modern reconciliation engine that enables asynchronous, prioritized, and interruptible rendering in React.**

---

## Summary

* Fiber = new React engine
* Controls rendering & scheduling
* Breaks work into small tasks
* Enables smooth UI
* Works with Virtual DOM
* `createRoot()` uses Fiber fully

```
```
