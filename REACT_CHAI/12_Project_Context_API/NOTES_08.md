## 🌐 React Context API — Step-by-Step Notes (with proper reasons)

This guide explains **why** we use Context API and **how** to implement it correctly.

---

# 📌 When to Learn Context API

1. First → **Props**
2. Then → **Context API**
3. Then → **Redux / Redux Toolkit**

Why this order?

Because Context API solves a problem that appears **after props become messy**.

---

# 🤔 Problem: Prop Drilling

Suppose in `App.jsx` we have:

```js
const username = "chai";
```

We store it using `useState` and want to show it in deeply nested components:

```
App → Dashboard → RightSide → Card → Profile
```

Using props, we must pass it step-by-step:

```jsx
<App>
  <Dashboard username="chai" />
</App>

<Dashboard username="chai">
  <RightSide username="chai" />
</Dashboard>

<RightSide username="chai">
  <Card username="chai" />
</RightSide>
```

This is called:

> ❌ **Prop Drilling**
> Passing props through many components that don’t even need it.

---

# ✅ Solution: Context API

Context lets us create a **global state**.

Instead of passing data manually:

```jsx
<Dashboard title="chai" />
<RightSide title="chai" />
<Card title="chai" />
```

We provide data once at the top:

```js
{
  title: "chai"
}
```

Then any component can access it directly.

---

# 🧠 Real-World Idea

Context API = **Global Storage for React Components**

Like:

```
Global user data
↓
Any component can read/write it
```

---

# 📁 Folder Structure

```
src/
 ├─ components/
 │   ├─ Login.jsx
 │   └─ Profile.jsx
 ├─ context/
 │   ├─ UserContext.js
 │   └─ UserContextProvider.jsx
 ├─ App.jsx
```

---

# 🪜 STEP 1 — Create Context

### 📄 `context/UserContext.js`

```js
import React from "react";

const UserContext = React.createContext();

export default UserContext;
```

### Why?

This creates a **container** that will hold global data.

But it doesn't store data yet.

---

# 🪜 STEP 2 — Create Provider

### 📄 `context/UserContextProvider.jsx`

```jsx
import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
```

### Why this file?

This is where **global state lives**.

We store:

```js
const [user, setUser] = useState(null);
```

We send it to all components via:

```jsx
<UserContext.Provider value={{ user, setUser }}>
```

Now any component inside can access `user`.

---

# 🪜 STEP 3 — Wrap App with Provider

### 📄 `App.jsx`

```jsx
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  return (
    <UserContextProvider>
      <h1>CONTEXT API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
```

### Why wrap App?

Because all components inside Provider can access global data.

```
UserContextProvider
   ├─ Login
   └─ Profile
```

Both can access `user`.

---

# 🪜 STEP 4 — Send Data (Login Component)

### 📄 `Login.jsx`

```jsx
import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault(); // stop page refresh

    setUser({
      username,
      password
    });
  };

  return (
    <>
      <h2>Login</h2>

      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />

      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default Login;
```

### Why use `useContext` here?

To update global state:

```js
setUser({ username, password })
```

Now `user` becomes available globally.

---

# 🪜 STEP 5 — Receive Data (Profile Component)

### 📄 `Profile.jsx`

```jsx
import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please Login</div>;

  return <div>Welcome {user.username}</div>;
}

export default Profile;
```

### Why?

We read global user data:

```js
const { user } = useContext(UserContext)
```

If no user → show login message
If user exists → show welcome message

---

# 🔄 Flow of Data

```
Login.jsx
   ↓
setUser()
   ↓
UserContext updated
   ↓
Profile.jsx re-renders
   ↓
Welcome chai
```

---

# ⚠️ Common Mistakes

### ❌ Forgetting event parameter

```js
const handleSubmit = () => {
  e.preventDefault()
}
```

### ✅ Correct

```js
const handleSubmit = (e) => {
  e.preventDefault()
}
```

---

### ❌ Taking only setUser

```js
const { setUser } = useContext(UserContext)
```

but using `user` also → error

### ✅ Correct

```js
const { user, setUser } = useContext(UserContext)
```

---

# ❌ Don't do this

```js
// global.js
let user = "chai";
```

Why bad?

* No re-render
* Not reactive
* Hard to manage

Always use Context.

---

# 🧰 Context vs Redux

| Feature     | Context | Redux    |
| ----------- | ------- | -------- |
| Small apps  | ✅       | ❌        |
| Medium apps | ✅       | ✅        |
| Large apps  | ⚠️      | ✅        |
| DevTools    | Basic   | Powerful |

---

# 🧠 Learning Order

```
Props → Context API → Redux Toolkit
```

---

# 🏁 Final Summary

* Context API avoids prop drilling
* Provider wraps app
* `useContext` reads data
* `setUser` updates global state
* Components auto re-render

---

# 🔗 Official Docs

[https://react.dev/reference/react/useContext](https://react.dev/reference/react/useContext)
