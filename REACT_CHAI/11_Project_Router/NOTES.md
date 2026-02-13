## 📦 React Router DOM Setup & Notes (Step-by-Step)

### 1️⃣ Install React Router DOM

```bash
npm i react-router-dom
```

Package: [https://www.npmjs.com/package/react-router-dom](https://www.npmjs.com/package/react-router-dom)

**Why?**
React Router lets us create **SPA navigation** (Single Page Application) without refreshing the browser.

---

## 2️⃣ `<a>` tag vs `<Link>` in React

### ❌ `<a>` tag

* Causes **full page refresh**
* React app reloads completely
* Loses state
* Not SPA behavior

### ✅ `<Link>`

```jsx
import { Link } from "react-router-dom";

<Link to="/about">About</Link>
```

**Why use Link?**

* No refresh
* Only component changes
* Faster navigation
* Preserves React state

### Interview Question

**Should we use `<a>` tag in React?**
👉 No. It refreshes the page.
👉 Use `<Link>` instead.

---

## 3️⃣ `<NavLink>` vs `<Link>`

`NavLink` = Link + extra features

Main feature: **active class detection**

```jsx
import { NavLink } from "react-router-dom";
```

### Basic NavLink

```jsx
<NavLink
  className={() =>
    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100`
  }
>
  Home
</NavLink>
```

### With `isActive`

```jsx
<NavLink
  to="/"
  className={({ isActive }) =>
    `block py-2 pr-4 pl-3 duration-200 
    ${isActive ? "text-orange-700" : "text-gray-700"}`
  }
>
  Home
</NavLink>
```

**Why?**

* `isActive` tells if route is active
* Helps highlight current page in navbar

---

## 4️⃣ Remove direct App rendering → Use RouterProvider

When using React Router v6.4+, we use:

```jsx
RouterProvider
createBrowserRouter
```

---

## 5️⃣ Update `main.jsx`

### 🔹 Before

```jsx
<App />
```

### 🔹 After

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
```

**Why?**

* `RouterProvider` manages routing
* `createBrowserRouter` defines routes

---

## 6️⃣ Create Layout Component (Header + Footer Fix)

We want:

* Header always same
* Footer always same
* Middle content changes

So we create `Layout.jsx`

### `src/Layout.jsx`

```jsx
import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
```

**Why Outlet?**
`<Outlet />` renders child routes dynamically
Example:

* `/` → Home component inside Layout
* `/about` → About component inside Layout

---

## 7️⃣ Router Structure Explained

```js
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      }
    ]
  }
])
```

### Flow

```
Layout
 ├── Header
 ├── Outlet → Home / About
 └── Footer
```

---

## 8️⃣ Update Header Navigation

### `Header.jsx`

```jsx
<li>
  <NavLink
    to="/"
    className={({ isActive }) =>
      `block py-2 pr-4 pl-3 duration-200 ${
        isActive ? "text-orange-700" : "text-gray-700"
      }`
    }
  >
    Home
  </NavLink>
</li>

<li>
  <NavLink
    to="/about"
    className={({ isActive }) =>
      `block py-2 pr-4 pl-3 duration-200 ${
        isActive ? "text-orange-700" : "text-gray-700"
      }`
    }
  >
    About
  </NavLink>
</li>
```

**Why?**

* Highlights active page
* Smooth SPA navigation

---

## 9️⃣ Final Folder Structure

```
src
 ├── components
 │    ├── Header
 │    ├── Footer
 │    ├── Home
 │    └── About
 ├── Layout.jsx
 ├── main.jsx
 └── App.jsx (optional now)
```

---

## 🔟 Key Concepts Summary

| Concept             | Why                    |
| ------------------- | ---------------------- |
| Link                | Prevent page refresh   |
| NavLink             | Active class styling   |
| RouterProvider      | Enables routing        |
| createBrowserRouter | Define routes          |
| Layout              | Shared UI              |
| Outlet              | Dynamic page rendering |

---

## 🧠 Interview Ready Answer

**Q: Difference between Link and NavLink?**

* Link → navigation only
* NavLink → navigation + active state

**Q: Why not `<a>` tag?**

* Refreshes page
* Breaks SPA
* React state lost

---

## 🚀 Result

* SPA navigation working
* Header/Footer fixed
* Dynamic page rendering
* Active navbar highlight

---
```
```
# 📘 React Router DOM – Advanced Routing Notes (Contact, Params, Loader)

These notes document all changes **step-by-step** and explain **why** each change was made.

---

# 1️⃣ Adding Contact Page Route

We created a **Contact** component and added it to routing.

### Import in `main.jsx`

```js
import Contact from './components/Contact/Contact.jsx';
```

---

## 🧭 Two Ways to Create Routes

React Router provides **2 methods**:

---

## ✅ Method 1 – Array Based (commented in your code)

```js
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> }
    ]
  }
])
```

---

## ✅ Method 2 – JSX Based (Recommended & Used)

```js
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
    </Route>
  )
)
```

### Why use `createRoutesFromElements`?

* Cleaner
* JSX readable
* Easier nested routing
* Similar to HTML structure

---

# 2️⃣ Dynamic Routes (URL Params)

We created route like:

```
/user/123
```

It should display:

```
User: 123
```

---

## Step 1 – Create Component

📁 `src/components/User/User.jsx`

```js
import React from "react";

function User(){
    return(
        <div>
            User:
        </div>
    )
}

export default User;
```

---

## Step 2 – Add Route in `main.jsx`

```js
import User from './components/User/User.jsx';

<Route path='user/:userid' element={<User/>} />
```

### Why `:userid`?

* `:` makes it dynamic
* Accepts any value
* Example:

  * `/user/101`
  * `/user/gaurav`

---

## Step 3 – Access Param using `useParams`

📁 `User.jsx`

```js
import React from "react";
import { useParams } from "react-router-dom";

function User(){
    const { userid } = useParams();

    return(
        <div>
            User: {userid}
        </div>
    )
}

export default User;
```

### Why `useParams`?

* Reads dynamic values from URL
* Must match name in route

```
:userId → useParams().userId
```

---

# 3️⃣ Github Component (API Fetch Example)

We created component to fetch GitHub data.

📁 `src/components/Github/GitHub.jsx`

```js
import React, { useEffect, useState } from "react";

function Github(){
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch(`https://api.github.com/users/Gaurav-Singh-Heer`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setData(data);
        })
    }, []);

    return(
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            Github Followers: {data.followers}
            <img src={data.avatar_url} width={300} />
        </div>
    )
}

export default Github;
```

### Why useEffect here?

* Fetch API on mount
* Store data in state

---

# 4️⃣ Loader Concept (🔥 Important for Interviews)

React Router provides **loader** to fetch data before rendering UI.

### Benefits

* Faster UI
* Data preloaded
* Cached on hover
* Similar to Next.js

---

## Add Loader in Route

```js
<Route 
  path='github'
  element={<Github/>}
  loader={async () => {
    const res = await fetch("https://api.github.com/users/Gaurav-Singh-Heer");

    if (!res.ok) {
      throw new Error("Failed to fetch github data");
    }

    return res.json();
  }}
/>
```

### Why use loader?

* Fetch before render
* Prevent loading flicker
* Better UX
* Data caching

---

# 5️⃣ Access Loader Data in Component

>Now in main.jsx instead of path and element we also have loader it's an iteresing concept if we have to fetch data from API which makes UI more faster as it keeps data in cache if we even hover over the nav_tab and not clicking over it

Instead of `useEffect`, use:

```js
import { useLoaderData } from "react-router-dom";

function Github(){
    const data = useLoaderData();

    return(
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            Github Followers: {data.followers}
            <img src={data.avatar_url} width={300}/>
        </div>
    )
}
```

---

# 6️⃣ Final `main.jsx`

```js
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/GitHub.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='user/:userid' element={<User/>} />

      <Route
        path='github'
        element={<Github/>}
        loader={async () => {
          const res = await fetch("https://api.github.com/users/Gaurav-Singh-Heer");
          if (!res.ok) throw new Error("Failed to fetch github data");
          return res.json();
        }}
      />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
```

---

# 7️⃣ Concept Summary

| Feature                  | Purpose             |
| ------------------------ | ------------------- |
| Contact Route            | Add contact page    |
| Dynamic Route            | user/:id            |
| useParams                | Read URL values     |
| Loader                   | Fetch before render |
| useLoaderData            | Access loader data  |
| createRoutesFromElements | Clean routing       |

---

# 8️⃣ Interview Questions

### Q1: Difference between useEffect fetch vs loader?

| useEffect            | loader        |
| -------------------- | ------------- |
| After render         | Before render |
| Slower UI            | Faster UI     |
| Manual loading state | Preloaded     |
| No caching           | Cached        |

---

### Q2: What is dynamic routing?

```
/user/:id
```

Allows variable URLs.

---

### Q3: Why loader better?

* Prefetch data
* Cached
* Faster navigation

---

# 9️⃣ Final Folder Structure

```
src
 ├── components
 │    ├── Home
 │    ├── About
 │    ├── Contact
 │    ├── User
 │    └── Github
 ├── Layout.jsx
 ├── main.jsx
```

---


## 🧾 React Router DOM – Final Proper Summary

This project demonstrates how to build a **modern React Router setup** using layout routing, nested routes, dynamic params, and loaders.

---

# 🔹 1. Layout System (Shared UI)

We created a **Layout component** to keep common UI fixed across pages.

### Purpose

* Header stays same
* Footer stays same
* Only middle content changes

### Key Concept

```jsx
<Outlet />
```

`Outlet` renders the child route inside the layout.

### Flow

```
Layout
 ├── Header
 ├── Outlet → Home / About / Contact / etc
 └── Footer
```

---

# 🔹 2. Router Setup (createRoot + RouterProvider)

Instead of rendering `<App />` directly, we used:

```jsx
createBrowserRouter
RouterProvider
```

### Why?

* Enables routing system
* Central route configuration
* Required in React Router v6.4+

```jsx
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
```

---

# 🔹 3. Nested Routing

We created nested routes inside Layout.

```jsx
<Route path="/" element={<Layout/>}>
  <Route path="" element={<Home/>} />
  <Route path="about" element={<About/>} />
  <Route path="contact" element={<Contact/>} />
</Route>
```

### Why nested routes?

* Shared layout
* Clean structure
* Scalable routing

---

# 🔹 4. Dynamic Route (user/:userid)

We created dynamic route:

```
/user/123
```

### Route

```jsx
<Route path="user/:userid" element={<User/>} />
```

### Access value

```jsx
const { userid } = useParams();
```

### Output

```
User: 123
```

### Why use dynamic routes?

* Profile pages
* Product pages
* Dashboard IDs
* Any variable URL

---

# 🔹 5. Github Followers Component

We created a component to fetch GitHub data.

Initially used:

```jsx
useEffect + fetch
```

But then optimized using **loader**.

---

# 🔹 6. Loader (Optimized Fetching)

Loader fetches data **before page renders**.

```jsx
<Route
  path="github"
  element={<Github/>}
  loader={async () => {
    const res = await fetch("https://api.github.com/users/Gaurav-Singh-Heer");
    return res.json();
  }}
/>
```

### Why loader is powerful?

* Faster UI
* No loading flicker
* Prefetch on hover
* Cached data
* Similar to Next.js

---

# 🔹 7. useLoaderData

Inside component:

```jsx
const data = useLoaderData();
```

This replaces:

```
useEffect + useState
```

Cleaner and faster.

---

# 🔹 8. Navigation Components

### `<Link>`

* No refresh
* SPA navigation

### `<NavLink>`

* Detects active route
* Useful for navbar highlight

```jsx
className={({isActive}) =>
  isActive ? "active" : ""
}
```

---

# 🔹 9. Overall Concepts Covered

| Concept             | Description          |
| ------------------- | -------------------- |
| Layout              | Shared header/footer |
| RouterProvider      | Enables routing      |
| createBrowserRouter | Route config         |
| Nested Routes       | Layout + children    |
| Dynamic Routes      | `/user/:id`          |
| useParams           | Read URL values      |
| Loader              | Fetch before render  |
| useLoaderData       | Access loader data   |
| NavLink             | Active styling       |

---

# 🔹 10. Final App Flow

```
App Start
  ↓
RouterProvider
  ↓
Layout
  ↓
Header
  ↓
Outlet renders:
   - Home
   - About
   - Contact
   - User/:id
   - Github
  ↓
Footer
```

---

# 🔹 11. What We Built

- Layout system
- Nested routing
- Contact page
- Dynamic user route
- GitHub API fetch
- Loader optimization
- Active navbar
- Modern React Router setup

---

# 🔹 12. Interview Ready One-Line Summary

> Built a React app using React Router v6 with layout routing, nested routes, dynamic URL params, and loader-based data fetching for optimized performance and SPA navigation.

---

# 🔹 13. Ultra Short Summary (Your 6 Points Properly Written)

**1. Layout**
Created Layout component to keep header/footer fixed and render pages using Outlet.

**2. createRoot + Router**
Used createBrowserRouter and RouterProvider instead of rendering App directly.

**3. Nested Routes**
Defined routes inside Layout for Home, About, Contact.

**4. Dynamic User Route**
Created `/user/:userid` and displayed userid using useParams.

**5. Github Followers Page**
Fetched GitHub data and displayed followers and avatar.

**6. Loader Optimization**
Replaced useEffect fetching with loader to preload and cache data for faster UI.

---