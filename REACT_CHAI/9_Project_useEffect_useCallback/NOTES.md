# 🔐 React Password Generator — Complete Notes

## 📚 Hooks Used in This Project

* `useState`
* `useCallback`
* `useEffect`
* `useRef`

Each hook has a specific job in this project.

---

# 🧠 1. `useState` — State Management

### 📌 Work

Stores and updates data inside a component.
Whenever state changes → component re-renders.

```js
const [state, setState] = useState(initialValue)
```

### 🧩 Used in Project

```js
const [string_length, change_string_length] = useState(8);
const [numberAllowed, setnumberAllowed] = useState(false);
const [charAllowed, setcharAllowed] = useState(false);
const [password, setPassword] = useState("");
```

### 🔎 Purpose Here

| State           | Work                   |
| --------------- | ---------------------- |
| `string_length` | Stores password length |
| `numberAllowed` | Toggle numbers         |
| `charAllowed`   | Toggle special chars   |
| `password`      | Generated password     |

Whenever any of these change → UI updates.

---

# ⚡ 2. `useCallback` — Cache Function

### 📌 Work

`useCallback` **stores (memoizes)** a function so React does not recreate it on every render.

```js
const cachedFn = useCallback(fn, dependencies)
```

Function updates only when dependencies change.

---

## 🔑 Password Generator Function

```js
const password_Generator = useCallback(() => {
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  if (numberAllowed) str += "0123456789";
  if (charAllowed) str += "!@#$%^&*()_+";

  for (let i = 1; i <= string_length; i++) {
    let char = Math.floor(Math.random() * str.length);
    pass += str.charAt(char);
  }

  setPassword(pass);
}, [string_length, numberAllowed, charAllowed]);
```

### 🔎 Work

* Generates password
* Uses selected options
* Updates state
* Memoized for performance

---

## 📋 Copy Function

```js
const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select();
  window.navigator.clipboard.writeText(password);
}, [password]);
```

### Work

* Select input text
* Copy to clipboard
* Runs only when password changes

---

# 🎯 3. `useRef` — Access DOM Element

### 📌 Work

* Access DOM element directly
* Store mutable value
* Does NOT re-render component

```js
const ref = useRef(initialValue)
```

---

## 🧩 Used in Project

```js
const passwordRef = useRef(null);
```

```jsx
<input ref={passwordRef} />
```

### 🔎 Work Here

* Target input field
* Select password text
* Help copy functionality

---

# 🔄 4. `useEffect` — Side Effects

### 📌 Work

Runs code when component:

* mounts
* updates
* dependencies change

```js
useEffect(setupFunction, dependencies)
```

### 📖 Official Docs

More on **useEffect** →
[https://react.dev/reference/react/useEffect](https://react.dev/reference/react/useEffect)

---

## 🧩 Used in Project

```js
useEffect(() => {
  password_Generator();
}, [string_length, numberAllowed, charAllowed, password_Generator]);
```

### 🔎 Work Here

Whenever:

* length changes
* number checkbox changes
* character checkbox changes

→ Automatically generate new password.

---

# 🧩 How All Hooks Work Together

### Step-by-Step Flow

1️⃣ Component loads
2️⃣ `useEffect` runs
3️⃣ `password_Generator()` runs
4️⃣ Password stored in state
5️⃣ UI updates

User actions:

* Change length → new password
* Toggle numbers → new password
* Toggle characters → new password
* Click copy → clipboard copy

---

# 🔐 Password Logic

```js
let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

if (numberAllowed) str += "0123456789";
if (charAllowed) str += "!@#$%^&*()_+";
```

Then loop:

```js
for (let i = 1; i <= string_length; i++) {
  let char = Math.floor(Math.random() * str.length);
  pass += str.charAt(char);
}
```

---

# 🧠 Dependencies Concept

Dependencies array controls when hooks run.

Example:

```js
useCallback(fn, [a, b])
```

Function updates only if `a` or `b` changes.

---

# 📋 Clipboard API

```js
navigator.clipboard.writeText(password)
```

Copies password to system clipboard.

---

# 🪝 Hook Responsibilities in This Project

| Hook          | Work                   |
| ------------- | ---------------------- |
| `useState`    | Store values           |
| `useCallback` | Cache functions        |
| `useEffect`   | Auto-generate password |
| `useRef`      | Target input element   |

---

# 🎯 Why `useCallback` Used Here?

Without it:

* Function recreated every render
* useEffect may run unnecessarily

With it:

* Function cached
* Performance better

---

# 💡 Key Concepts Learned

✔ React hooks basics
✔ Memoization
✔ DOM targeting
✔ Clipboard API
✔ Dependency arrays
✔ Controlled UI

---

# 🏁 Final Summary

This project teaches:

* Real-world hook usage
* Password generation logic
* Copy to clipboard
* Function memoization
* Side effects handling

A **perfect React hooks practice project** 🚀
