# ❗ React Counter Issue — Why UI Not Updating?

You wrote this code:

```js
import { useState } from 'react'
import './App.css'

function App() {

  // state for counter
  let count = 5

  const addValue = () => {
    console.log("Clicked", count);
    count++;
  }

  const removeValue = () => {
    console.log("Clicked", count);
    count--;
  }

  return (
    <>
      <h1>CHAI AUR REACT</h1>
      <h2>COUNTER VALUE: {count}</h2>

      <button onClick={addValue}>Add Value</button>
      &nbsp;
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
````

<p style="color:red">
Here value of count is not displayed as it is but in logs it is updating after applying add and remove.  
So problem here comes in UI updation.
</p>


> For this we use methods known as `Hooks` <br>
> UI Updation is controlled by React

---

## ❗ Why count updates in console but not in UI?

```js
let count = 5
```

You are using a **normal variable**, not React state.

When you click:

```js
count++;
console.log(count);
```

✔ Console updates
❌ UI does NOT update

---

## 🧠 Reason

React **does not re-render** when normal variables change.

React re-renders only when:

* state changes
* props change

Every time React renders the component, this line runs again:

```js
let count = 5
```

So the value resets to **5** on every render.

That’s why UI always shows `5`.

---

## 🔄 What’s happening internally

### First render

```
count = 5  
UI shows → 5
```

### Click button

```
count++ → 6  
console prints → 6
```

But React does NOT know it changed → no re-render.

### Next render (if triggered)

```
count = 5 again
```

So UI never updates.

---

## 🪝 Solution → React Hooks

To update UI, we must use **state**.

React provides a hook:

```js
useState()
```

> useState hook is responsible to change the state of UI (inside our dom) 
> `useState` is a React hook used to store and update state.  
> When the state changes, React re-renders the component and updates the UI (DOM).

Hooks tell React:

> “When this value changes, re-render the component”

---

## ✅ Correct Code using Hook

```jsx
import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(5)

  const addValue = () => {
    console.log("Clicked", count)
    setCount(count + 1)
  }

  const removeValue = () => {
    console.log("Clicked", count)
    setCount(count - 1)
  }

  return (
    <>
      <h1>CHAI AUR REACT</h1>
      <h2>COUNTER VALUE: {count}</h2>

      <button onClick={addValue}>Add Value</button>
      &nbsp;
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
```

---

## 🔑 Why Hooks fix this

```js
const [count, setCount] = useState(5)
```

* `count` → stored in React memory
* `setCount()` → tells React value changed
* React re-renders component
* UI updates automatically

---

## 🧾 Key Rule

> If a value affects UI → it must be stored in state (hook)

* Normal variable → React ignores
* State variable → React tracks

---

## 🧠 Interview One-liner

**Why didn’t UI update?**

Because React only re-renders on state/prop change.
Normal variables are not tracked by React.

---

## 🏁 Final Understanding

Console updates because JavaScript runs.
UI doesn’t update because React doesn’t re-render.

Hooks solve this by making React aware of changes.