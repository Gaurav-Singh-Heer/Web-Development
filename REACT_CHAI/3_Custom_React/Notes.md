# Custom React Rendering (Understanding How React Renders)

Previously, we discussed that **React creates a root** and then renders the `App` inside that root.  
Here, we are manually creating a **very basic custom renderer** to understand how React actually works behind the scenes.

Instead of using React, we are writing our own simple function that:
- Takes a React-like object
- Creates a DOM element
- Injects it into the root container

---

## 📄 HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom React App</title>
</head>
<body>
    <div id="root"></div>
    <script src="./customReact.js"></script>
</body>
</html>
````

We created a `<div id="root"></div>`
This is similar to how React apps have a root where everything gets rendered.

---

## ⚙️ Custom Render Function

```js
function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type)

    domElement.innerHTML = reactElement.children

    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
}
```

### What this function does:

1. Creates a DOM element (`<a>` in our case)
2. Adds text content (children)
3. Sets attributes like `href` and `target`
4. Appends it to the root container

This is basically what **ReactDOM.render()** does internally (in a much more advanced way).

---

## 🧱 React Element Object

```js
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}
```

This object is similar to what JSX becomes after compilation.

Example JSX:

```jsx
<a href="https://google.com" target="_blank">
  Click me to visit google
</a>
```

JSX → converts into an object like `reactElement`.

---

## 🚀 Rendering to Root

```js
const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer);
```

### Meaning:

* **What to inject** → `reactElement`
* **Where to inject** → `#root`

---

## 🧠 How React Actually Works

In real React:

```js
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

### Steps internally:

1. JSX → converted into objects
2. React creates virtual DOM
3. React compares changes (diffing)
4. React updates real DOM efficiently
5. Everything gets rendered inside `#root`

---

## 🔑 Key Learning

This custom renderer helps us understand:

* JSX is just an object
* React converts JSX into objects
* React creates DOM elements from those objects
* React injects them into a root container

We manually recreated a **mini version of ReactDOM.render()**.

---

## 📌 Summary

* `reactElement` → representation of UI
* `customRender()` → converts object → real DOM
* `container` → root element
* React does the same thing but with:

  * Virtual DOM
  * Diffing
  * Re-render optimization
  * Components
  * State management

This is the foundation of how React rendering works.

---

````md
# Custom React Renderer – Version 2 (Dynamic Props Handling)

Now we improved our custom renderer to make it **more modular and scalable**.

Earlier, we were manually setting attributes like `href` and `target`.  
But real React elements can have **many props**, so writing each manually is not practical.

So we created **Version 2** using a loop to dynamically set all props.

---

## 🧠 Updated `customRender()` Function

```js
function customRender(reactElement, container){

    const domElement = document.createElement(reactElement.type)

    // Add children text/content
    domElement.innerHTML = reactElement.children

    // Loop through props dynamically
    for(const prop in reactElement.props){

        // Skip children if it exists inside props
        if(prop === 'children') continue;

        // Correct way to access dynamic key
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    // Append to container
    container.appendChild(domElement)
}
````

---

## ❌ Common Mistake

```js
domElement.setAttribute(prop, reactElement.props.prop);
```

This is **wrong** because:

* `props.prop` looks for a property literally named `"prop"`
* But we want the value of the variable `prop`

Correct way:

```js
reactElement.props[prop]
```

This accesses the value dynamically using the key stored in `prop`.

---

## 🧱 Example React Element Object

```js
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}
```

Now this works even if we add more props:

```js
props: {
    href: 'https://google.com',
    target: '_blank',
    id: 'googleLink',
    class: 'link-class'
}
```

All attributes will automatically be applied.

---

## 🔍 Why Skip `children`?

Sometimes in real React, `children` can also be inside `props`.

But here we already handled children using:

```js
domElement.innerHTML = reactElement.children
```

So we skip it inside the loop:

```js
if(prop === 'children') continue;
```

---

## ⚛️ Real React Internals

Real React does something similar but more advanced:

* Converts JSX → object
* Reads `type`
* Reads `props`
* Handles children separately
* Creates DOM nodes
* Applies attributes dynamically

We just built a **mini React renderer**.

---

## 🔑 Key Learning

Version 1:

* Hardcoded attributes
* Not scalable

Version 2:

* Uses loop
* Dynamic props handling
* More React-like behavior

This is closer to how React internally applies props to DOM elements.

---

## 📌 Summary

* `reactElement.type` → which HTML tag to create
* `reactElement.props` → attributes of element
* `reactElement.children` → inner content
* Loop through props → apply attributes dynamically
* Append element → render to root

We now have a **clean and modular custom renderer** similar to how React works internally.

---
```md

#                   NEW NOTES FROM HERE

```
# Vite + React Rendering Notes

## 🔧 Vite and Bundler Concept

When using **Vite**, we don’t need to always create separate components in `App.jsx`.  
We can also define a component directly inside `main.jsx` and render it.

Every React project uses a **bundler**:
- Create React App → uses Webpack  
- Vite → uses ESBuild + Rollup  

### What bundler does
React **does NOT understand HTML/JSX directly**.

Bundler:
1. Parses JSX syntax  
2. Converts JSX → JavaScript objects  
3. Builds a tree (Virtual DOM structure)  
4. Sends it to React  

So when we write:

```jsx
<a href="https://google.com">Visit</a>
````

Bundler converts it into something like:

```js
{
  type: 'a',
  props: { href: 'https://google.com' },
  children: 'Visit'
}
```

This is similar to the `reactElement` object we created manually earlier.

---

## 📄 Example in `main.jsx`

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Chai from './Chai.jsx'

function MyApp(){
  return(
    <div>
      <h1>YE WAALA TOH SUKHNA HAI KAAM 19-20 HAI BNDA 20 HAI Boss</h1>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    MyApp()   // ❌ wrong
    <MyApp /> // ✅ correct
    <App />
    <Chai />
  </StrictMode>,
)
```

---

## ❌ Why `MyApp()` is Wrong?

```jsx
MyApp()
```

* This **calls** the function immediately
* Returns JSX object
* React expects a **component element**, not a direct function call inside JSX tree

React rendering system expects:

```jsx
<MyApp />
```

Because:

* `<MyApp />` → JSX element
* JSX → converted by bundler → React element object
* React can track, diff, and render it properly

Calling `MyApp()` bypasses React’s component system.

---

## ⚠️ Rendering a Raw Object

```jsx
const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'Click me'
}
```

Trying to render:

```jsx
<StrictMode>
  {reactElement}
</StrictMode>
```

❌ This will NOT work correctly.

Why?
Because React does **not accept random objects**.
It only accepts:

* JSX elements
* Components
* Strings
* Numbers
* Arrays of JSX

React internally expects objects created using:

```js
React.createElement()
```

Our manual object is similar but not the exact structure React expects.

---

## ✅ This WILL Work

```jsx
const anotherElement = (
  <a href="https://google.com" target="_blank">
    VISIT GOOGLE
  </a>
)
```

Render:

```jsx
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {anotherElement}
    <hr />
    <MyApp />
    <App />
    <Chai />
  </StrictMode>,
)
```

### Why it works

Because JSX:

```jsx
<a>...</a>
```

is transformed by bundler into:

```js
React.createElement('a', {...}, 'VISIT GOOGLE')
```
> ### CODE:-  
>>#### FOR `React.createElement`
>> ---
>>```js
>>import { StrictMode } from 'react'
>>import { createRoot } from 'react-dom/client'
>>import App from './App.jsx'
>>import Chai from './Chai.jsx'
>>import React from "react"; // 🔥 REQUIRED for React.createElement
>>
>>function MyApp(){
>>  return(
>>    <div>
>>      <h1>YE WAALA TOH SUKHNA HAI KAAM 19-20 HAI BNDA 20 HAI Boss</h1>
>>    </div>
>>  )
>>}
>>
>>const anotherElement = (
>>  <a href="https://google.com" target="_blank">VISIT GOOGLE</a>
>>)
>>
>>const reactElement = React.createElement(
>>  'a',
>>  { href: 'https://google.com', target: '_blank' },
>>  'CLICK HERE TO VISIT ANOTHER ZONE OF LNED'
>>)
>>
>>const reactElementh1 = React.createElement(
>>  'h1',
>>  {},
>>  'CLICK HERE TO VISIT ANOTHER ZONE OF LNED'
>>)
>>
>>createRoot(document.getElementById('root')).render(
>>  <StrictMode>
>>    {anotherElement}
>>    <hr/>
>>    {reactElement}
>>    {reactElementh1}
>>    <hr/>
>>    MyApp()   // ❌ wrong
>>    <MyApp /> // ✅ correct
>>    <App />
>>    <Chai/>
>>  </StrictMode>,
>>)
>>```
This creates a **valid React element object**.

---

## 🧠 Key Difference

### ❌ Manual object

```js
const reactElement = {
  type: 'a',
  props: {...},
  children: 'Click'
}
```

* Not created by React
* Missing internal fields
* React can’t track it

### ✅ JSX element

```jsx
const anotherElement = (<a>Click</a>)
```

* Converted by bundler
* Uses `React.createElement`
* Valid React element

---

## 🔑 Important Rules

### 1️⃣ Always use component in JSX form

```jsx
<MyApp />
```

Not:

```js
MyApp()
```

### 2️⃣ React cannot render plain objects

Only valid React elements created via JSX or `React.createElement`.

### 3️⃣ Bundler role

* Parses JSX
* Converts to JS objects
* Builds virtual DOM tree

---

## 📌 Flow of React Rendering

JSX →
Bundler parses →
Creates React elements →
Virtual DOM tree →
React renders to real DOM

---

## 🧾 Summary

* Vite uses bundler to convert JSX → objects
* We can create components directly in `main.jsx`
* Use `<Component />` not `Component()`
* React cannot render raw JS objects
* JSX elements work because bundler converts them properly

Our custom renderer helped us understand how React internally works,
and now with Vite we see how bundler automates that process.

---

## FOR VARIABLE DECLARION IN CODE
> WE use {} in return like below we used `{username}`
```js
import Chai from './Chai.jsx'


function App() {
  const username="~GSH"
  return (
    <>
      <h1>LNED new day Same Shit {username} </h1>
      <Chai />
    </>
  )
}

export default App
```

> ### CODE:- Using `React.createElement` + for loop (square till 100)

```js
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Chai from './Chai.jsx'
import React from "react"; // required for React.createElement

function MyApp(){
  return(
    <div>
      <h1>YE WAALA TOH SUKHNA HAI KAAM 19-20 HAI BNDA 20 HAI Boss</h1>
    </div>
  )
}

const anotherElement = (
  <a href="https://google.com" target="_blank">VISIT GOOGLE</a>
)

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'CLICK HERE TO VISIT ANOTHER ZONE OF LNED'
)

const anotherUser = ' Son of K.Kumar '

const reactElementh1 = React.createElement(
  'h1',
  {},
  'CLICK HERE TO VISIT ANOTHER ZONE OF LNED ',
  anotherUser
)


// 🔁 FOR LOOP: Squares from 1 to 100
const squares = []
for(let i = 1; i <= 100; i++){
  squares.push(
    React.createElement(
      'li',
      { key: i },
      `Square of ${i} is ${i*i}`
    )
  )
}

const squareList = React.createElement('ul', {}, squares)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {anotherElement}
    <hr/>
    {reactElement}
    {reactElementh1}
    <hr/>
    {squareList}
    <hr/>
    MyApp()   // ❌ wrong
    <MyApp /> // ✅ correct
    <App />
    <Chai/>
  </StrictMode>,
)

```