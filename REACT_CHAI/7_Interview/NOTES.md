# 🧪 React Interview Question — Counter & State Batching

## 📌 Question

What will be the value of the counter if we click **Add Value** once?

```jsx
import { useState } from 'react'
import './App.css'

function App() {

  const [count, GSHsetCount] = useState(15)

  const addValue = () => {
    GSHsetCount(count + 1)
    GSHsetCount(count + 1)
    GSHsetCount(count + 1)
    GSHsetCount(count + 1)
    GSHsetCount(count + 1)
    console.log("Clicked", count)
  }

  const removeValue = () => {
    GSHsetCount(count - 1)
    console.log("Clicked", count)
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

# ✅ Final Answer

> The value will increase by **only 1**
> Final value after clicking **Add Value** once = **16**

NOT 20.

---

# 🧠 Explanation

Initial state:

```
count = 15
```

Inside `addValue()` we call:

```js
GSHsetCount(count + 1)
```

five times.

But React **batches state updates** inside event handlers.

All 5 updates use the same old value:

```
count = 15
```

So React processes:

```
setCount(16)
setCount(16)
setCount(16)
setCount(16)
setCount(16)
```

After batching → only the last value is applied.

```
Final count = 16
```

---

# ⚠️ Why this happens

React state updates are:

* Asynchronous
* Batched for performance

Each call does **not** immediately update `count`.

Every call reads the same old value → **stale state problem**.

---

# 🔥 Correct Way (Functional Updater)

To actually increase 5 times:

```jsx
const addValue = () => {
  GSHsetCount(prev => prev + 1)
  GSHsetCount(prev => prev + 1)
  GSHsetCount(prev => prev + 1)
  GSHsetCount(prev => prev + 1)
  GSHsetCount(prev => prev + 1)
}
```

Now updates happen like:

```
15 → 16 → 17 → 18 → 19 → 20
```

Final value = **20**

---

# 🎯 Interview One-Line Answer

> React batches state updates.
> Multiple `setCount(count + 1)` use the same stale value,
> so the counter increases only once.
> Use `setCount(prev => prev + 1)` to update correctly.

---

# 🧪 Why console shows old value?

```js
console.log(count)
```

Still prints old value because:

* State updates are async
* React schedules re-render later

---

# 📚 Key Concepts Tested in Interviews

* React state batching
* Async state updates
* Stale closures
* Functional updater
* React 18 automatic batching

---

# 🏁 Summary

| Code Type                    | Result  |
| ---------------------------- | ------- |
| `setCount(count+1)` × 5      | +1 only |
| `setCount(prev=>prev+1)` × 5 | +5      |

---

# 💬 Common Interview Follow-Ups

### 1. Why batching happens?

To improve performance and avoid multiple re-renders.

### 2. When batching happens?

* Event handlers
* Async operations (React 18)
* Promises
* setTimeout

### 3. Best practice?

Always use functional updater when new state depends on old state.

```js
setCount(prev => prev + 1)
```

---

# 🚀 End

Classic React counter question testing batching + stale state.
