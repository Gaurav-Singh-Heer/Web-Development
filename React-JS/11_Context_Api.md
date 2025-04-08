# 🧠 Why Do We Need **Context API** in React?

Imagine you're building a React application with a component hierarchy like this:

```
Component A
│
└── Component B
     │
     └── Component C
          │
          └── Component D
```

Now suppose we have a **state** defined in `Component A`:

```js
const [count, setCount] = useState(0);  // Value 1 and setCount()
```

## ❌ Way 1: **Prop Drilling**
To use `count` in `Component D`, we would have to pass it down through every intermediate component using **props**.

- `Component A` ➝ `Component B` ➝ `Component C` ➝ `Component D`

This technique is called **Prop Drilling**.

### 🚫 Why is Prop Drilling Bad?
- If you need to move `Component D` somewhere else in the component tree, you'll have to rewire everything.
- It creates unnecessary dependencies and tightly couples your component hierarchy.
- Maintenance becomes harder.

> 🖼️ **Screenshot Example:**  
> ![Way 1](./11_Context_API/Screenshot/1.jpg)

---

## ✅ Way 2: **Using Context API**

To solve this problem, we use **Context API**.

With Context, we can store the state in a centralized place (Context), and **any component** in the tree can access or update it **without prop drilling**.

### 🔁 Benefits of Context API:
- `Component A` and `Component D` can **both** access the state **directly** from Context.
- If the state in `Component A` changes, `Component D` will **automatically re-render**.
- We can move `Component D` anywhere in the tree without worrying about props.

> 🖼️ **Screenshot Example:**  
> ![Way-2 By Context API](./11_Context_API/Screenshot/2.jpg)

---

## 🛡️ How Context API Works

To provide access to components, we need to **wrap them** inside a **Context Provider**.

```jsx
<ContextProvider>
  <ComponentA />
  <ComponentB />
  <ComponentC />
  <ComponentD />
</ContextProvider>
```

> 🖼️ **Screenshot Example:**  
> ![Way-2 By Context API](./11_Context_API/Screenshot/3.jpg)

### 🔑 Note:
If we **don't wrap** components inside the Context Provider, they **won’t have access** to the shared context.

---

## 🧪 Implementation Steps

### 📁 Updated `App.jsx` in `src` folder:

```jsx
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Context API</h1>
    </div>
  );
}

export default App;
```

---

### 📁 Created `components/Counter.jsx`:

```jsx
import React from "react";

const Counter = () => {
  return (
    <div>
      <button>Increment</button>
      <button>Decrement</button>
    </div>
  );
};

export default Counter;
```

---

### 📁 Updated `App.jsx` to use the Counter:

```jsx
import './App.css';
import Counter from '../components/Counter';

function App() {
  return (
    <div className="App">
      <h1>Context API</h1>
      <h1>Count is 0</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
```


---

## ⚛️ Now Implementing Context API in React

## 📁 Step 1: Created `context/Counter.jsx`

```jsx
import { createContext } from 'react';

// Create a context
export const CounterContext = createContext(null);
```

### 🧠 Now, we have to create a **Provider** for this context so that every component can access the shared state.

> 📸 **Screenshot Example:**  
> ![Like This](./11_Context_API/Screenshot/3.jpg)

---

## 🛠️ Step 2: Updated `context/Counter.jsx` to add a Provider

```jsx
import { createContext } from 'react';

export const CounterContext = createContext(null);

// This is the CounterProvider
export const CounterProvider = (props) => {
    return (
        <CounterContext.Provider>
            <h1>Okay</h1>
        </CounterContext.Provider>
    );
};
```

---

## ✨ Step 3: Updated `context/Counter.jsx` to wrap around children

```jsx
import { createContext } from 'react';

export const CounterContext = createContext(null);

// Provider that wraps children
export const CounterProvider = (props) => {
    return (
        <CounterContext.Provider>
            {props.children}
        </CounterContext.Provider>
    );
};
```

---

## 🧱 Step 4: Default `main.jsx`

```jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

---

## 🔁 Step 5: Updated `main.jsx` to wrap `App` with `CounterProvider`

```jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import { CounterProvider } from '../context/Counter.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
  </StrictMode>,
);
```

---

## ⚙️ Step 6: Updated `context/Counter.jsx` to add `useState`

```jsx
import { createContext, useState } from 'react';

export const CounterContext = createContext(null);

export const CounterProvider = (props) => {
    const [count, setCount] = useState(0);

    return (
        <CounterContext.Provider value={{ count }}>
            {props.children}
        </CounterContext.Provider>
    );
};
```

---

## 💡 Step 7: Updated `App.jsx` to consume Context

```jsx
import { useContext } from 'react';
import './App.css';
import Counter from '../components/Counter';
import { CounterContext } from '../context/Counter';

function App() {

  const counterState = useContext(CounterContext);

  console.log("Context", counterState); // Debugging context

  return (
    <div className="App">
      <h1>Context API</h1>
      <h1>Count is 0</h1>

      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
```

### 🖥️ Output in Console:
> ![Before](./11_Context_API/Screenshot/9.jpg)

---

## ⚛️ Now Context API in React – Full Flow with State and Methods


## ✅ Step-by-Step Implementation


### 🧠 1. **Context Setup (`context/Counter.jsx`)**

```jsx
import { createContext, useState } from 'react';

// Create Context
export const CounterContext = createContext(null);

// Create Provider
export const CounterProvider = (props) => {
    const [count, setCount] = useState(5); // Initial value set to 5
    const name = "Piyush";

    return (
        <CounterContext.Provider value={{ count, setCount, name }}>
            {props.children}
        </CounterContext.Provider>
    );
};
```

---

### ⚙️ 2. **Wrap Provider in `main.jsx`**

```jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { CounterProvider } from '../context/Counter.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
  </StrictMode>,
);
```

---

### 🏠 3. **App Component (`App.jsx`)**

```jsx
import { useContext } from 'react';
import './App.css';
import Counter from '../components/Counter';
import { CounterContext } from '../context/Counter';

function App() {
  const counterState = useContext(CounterContext);

  console.log("Context", counterState);

  return (
    <div className="App">
      <h1>Context API</h1>
      <h1>Count is {counterState.count}</h1>                      {/* Dynamically displays count */}
      
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
```

📸 **Dynamic Outputs Based on `useState` Value**:

- `useState(0)` →  
  ![Count 0](./11_Context_API/Screenshot/4.jpg)

- `useState(5)` →  
  ![Count 5](./11_Context_API/Screenshot/5.jpg)

---

### 🎯 4. **Update `Counter.jsx` to Modify Context State**

**Before:**
```jsx
import React from "react";

const Counter = () => {
  return (
    <div>
      <button>Increment</button>
      <button>Decrement</button>
    </div>
  );
};

export default Counter;
```

**After:**
```jsx
import React, { useContext } from "react";
import { CounterContext } from "../context/Counter";

const Counter = () => {
  const counterContext = useContext(CounterContext);

  return (
    <div>
      <button onClick={() => counterContext.setCount(counterContext.count + 1)}>
        Increment
      </button>
      <button onClick={() => counterContext.setCount(counterContext.count - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
```

📸 **Result after Increment & Decrement:**

> Incremented Count: `5 ➝ 8`  
  ![Increment](./11_Context_API/Screenshot/6.jpg)

> Decremented Count: `8 ➝ 3`  
  ![Decrement](./11_Context_API/Screenshot/7.jpg)

> Refresh resets to default (5):  
  ![Refresh](./11_Context_API/Screenshot/8.jpg)

> **Before Operation**: *Console Before Applying Operations of Increment and Decrement*  
  ![Before](./11_Context_API/Screenshot/9.jpg)

> **After Operation**: *Console After Applying Operations of Increment and Decrement*
  ![After](./11_Context_API/Screenshot/10.jpg)

---

## 🧾 Summary

### ✅ What we did:

1. **Created Context** using `createContext`.
2. **Made a Provider** (`CounterProvider`) to wrap all children.
3. **Provided values**: `count`, `setCount`, and `name: "Piyush"`.
4. **Wrapped `App`** with `CounterProvider` in `main.jsx`.
5. **Used `useContext`** inside `App.jsx` and `Counter.jsx` to:
   - Display current count
   - Modify count without prop-drilling.

> 🎯 No props passed at all!  
> ✔️ Centralized state using Context  
> 💬 No prop-drilling — direct access from anywhere!


---

### 🔁 **Summary – Context API Integration**

1. **Created a Context** using `createContext()` in React to share state across components.

2. **Defined a Provider (`CounterProvider`)** inside `context/Counter.jsx` that:
   - Uses `useState` to manage `count`.
   - Provides `count`, `setCount`, and a test `name: "Piyush"` as context values.
   - Wraps its children inside `<CounterContext.Provider>` so that any component inside can access the context.

3. **Wrapped the App component** with `CounterProvider` in `main.jsx`, enabling access to the context inside the entire application:
   ```jsx
   <CounterProvider>
     <App />
   </CounterProvider>
   ```

4. Inside **`App.jsx`**:
   - Used `useContext(CounterContext)` to access context values.
   - Displayed the `count` directly from the context.
   - Confirmed values like `count` and `name` using `console.log`.

5. In **`components/Counter.jsx`**:
   - Removed all prop passing.
   - Accessed `count` and `setCount` using `useContext(CounterContext)`.
   - Used `setCount` to update the `count` via buttons for **Increment** and **Decrement**.

6. As a result:
   - We avoided **prop-drilling** (passing props through multiple components).
   - Enabled **centralized state management** via context.
   - Easily shared data and logic between components without redundancy.

---

✅ **Conclusion:**  
We established a clean and scalable architecture using Context API where any component can directly read and modify shared state. No need to pass props manually — just plug in and go!

---
Here’s your updated content in a **well-formatted Markdown (`.md`) file** structure. I've improved the sectioning, indentation, and added proper code blocks and headings for clarity and readability:

---


Sure! Here's your provided content formatted properly in **Markdown (.md)** format with enhanced UI structuring using Markdown syntax:

---

## 🛒 Understanding More on Context API using E-Commerce Cart Example

---

### 📁 Updated `App.jsx`

```jsx
import './App.css';

function App() {
  return (
    <div className="App">
    </div>
  )
}

export default App;
```

---

### 📁 Updated `Main.jsx`

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
  </StrictMode>,
)
```

---

### 🧩 Creating `components/Item.jsx`

```jsx
import React, { useContext } from "react";

const Item = () => {
    return (
        <div className="item-card">
            <h4>Item Name</h4>
            <p>Price: $10</p>
            <button>Add To Cart</button>
        </div>
    )
}

export default Item;
```

---

### 🔗 Now Import this `Item.jsx` in `App.jsx`  

```jsx
import Item from "../components/Item";
import './App.css';

function App() {
  return (
    <div className="App">
      <Item /> 
    </div>
  )
}

export default App;
```

📷 **Output:**  
![Output](./11_Context_API_Cart/Screenshot/1.jpg)

---

### 🎯 Updating for Dynamic Props in `Item.jsx`

```jsx
import React, { useContext } from "react";

const Item = (props) => {
    return (
        <div className="item-card">
            <h4>{props.name}</h4>
            <p>Price: ${props.price}</p>
            <button>Add To Cart</button>
        </div>
    )
}

export default Item;
```

---

### ✨ Updated `App.jsx` to Pass Props

```jsx
import Item from "../components/Item";
import './App.css';

function App() {
  return (
    <div className="App">
      <Item name="MacBook Pro" price={100000}/> 
      <Item name="PenDrive" price={1000}/> 
      <Item name="Pen" price={100}/> 
    </div>
  )
}

export default App;
```

📷 **Output - Dynamic Cart:**  
![Cart Dynamic](./11_Context_API_Cart/Screenshot/2.jpg)

---

### ➕ Create `components/Cart.jsx`

```jsx
import React from "react";

const Cart = () =>{
    return (
        <div className='cart'>
            <li>MacbookPro - $10000</li>
            <h4>Total Bill: $</h4>
        </div>
    )
}

export default Cart;
```

---

### 🔧 Updating `App.jsx` to Add Cart Component

```jsx
import Item from "../components/Item";
import Cart from "../components/Cart";
import './App.css';

function App() {
  return (
    <div className="App">
      <Item name="MacBook Pro" price={100000}/> 
      <Item name="PenDrive" price={1000}/> 
      <Item name="Pen" price={100}/> 
      <Cart />
    </div>
  )
}

export default App;
```

📷 **Output - Cart:**  
![Cart](./11_Context_API_Cart/Screenshot/3.jpg)

---

### 🧠 Creating `context/Cart.jsx`

```jsx
import {createContext, useState} from 'react'

export const CartContext = createContext(null);

export const CartProvider = (props) => {
    const [items, setItems] = useState([]);

    return (
        <CartContext.Provider value={{items, setItems}}>
            {props.children}
        </CartContext.Provider> 
    )
}
```

---

### 🔁 Wrapping `App` with `CartProvider` in `Main.jsx`

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {CartProvider} from '../context/Cart.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>
)
```

---

### 🛍️ Update `Item.jsx` to Use Context and Add Items

```jsx
import React, { useContext } from "react";
import { CartContext } from "../context/Cart";

const Item = (props) => {
    const cart = useContext(CartContext);
    console.log('Cart', cart);

    return (
        <div className="item-card">
            <h4>{props.name}</h4>
            <p>Price: ${props.price}</p>
            <button onClick={() => 
                cart.setItems([...cart.items, {name: props.name, price: props.price}])
            }>
                Add To Cart
            </button>
        </div>
    )
}

export default Item;
```

📷 **Output - Console Log:**  
![Console_Output](./11_Context_API_Cart/Screenshot/4.jpg)  
![Console_Output](./11_Context_API_Cart/Screenshot/5.jpg)  
![Console_Output](./11_Context_API_Cart/Screenshot/6.jpg)  
![Console_Output](./11_Context_API_Cart/Screenshot/7.jpg)

---

### 🧾 Update `Cart.jsx` to Dynamically Display Cart Items

#### 🔁 Before: (Hard-Coded Cart)

```jsx
import React from "react";

const Cart = () =>{
    return (
        <div className='cart'>
            <li>MacbookPro - $10000</li>
            <h4>Total Bill: $</h4>
        </div>
    )
}

export default Cart;
```

#### ✅ After: (Using Context API)

```jsx
import React, {useContext} from "react";
import { CartContext } from "../context/Cart";

const Cart = () =>{
    const cart = useContext(CartContext);
    
    return (
        <div className='cart'>
            <h1>CART</h1>
            {
                cart && cart.items.map((item) => 
                    <li>{item.name}-${item.price}</li>
                )
            }
            <h4>Total Bill: $</h4>
        </div>
    )
}

export default Cart;
```

📷 **Output - Listed Cart Items:**  
![Listed Cart Items](./11_Context_API_Cart/Screenshot/8.jpg)

---

### 💰 Add Total Price Calculation in Cart

```jsx
import React, {useContext} from "react";
import { CartContext } from "../context/Cart";

const Cart = () =>{
    const cart = useContext(CartContext);
    const total = cart.items.reduce((a,b) => a + b.price, 0);

    return (
        <div className='cart'>
            <h1>CART</h1>
            {
                cart && cart.items.map((item) => 
                    <li>{item.name}-${item.price}</li>
                )
            }
            <h4>Total Bill: ${total}</h4>
        </div>
    )
}

export default Cart;
```

📷 **Output - Total Price Listed:**  
![Listed Cart Items](./11_Context_API_Cart/Screenshot/9.jpg)

---

## ✅ Summary

✅ We created a shopping cart layout using:

- Functional components
- `useState` and `useContext`
- **Context API** for global state
- Dynamic rendering and updates

---

💡 Now you can continue to:
- Add **remove** functionality
- Show **cart count**
- Improve **styling**
- Add **local storage** support

---
Here’s a cleaner and more structured version of your explanation with better formatting and readability:

---

## ✅ Best Practices – Simplifying Cart Context Usage in React

### 🔧 Problem:
Every time we want to access the cart in a component, we have to **import both** `useContext` and `CartContext`, like this:

```js
import { useContext } from 'react';
import { CartContext } from '../context/Cart';
const cart = useContext(CartContext);
```

⚠️ This becomes repetitive and cumbersome as the project grows.

---

### ✅ Solution: Create a Custom Hook `useCart()`

We'll define a custom hook `useCart` inside `context/Cart.js`, which will internally handle `useContext(CartContext)`. This makes the usage cleaner and more consistent.

---

### 📁 File: `context/Cart.js`

#### 🔴 Before:
```js
import { createContext, useState } from 'react';

export const CartContext = createContext(null);

export const CartProvider = (props) => {
    const [items, setItems] = useState([]);
    return (
        <CartContext.Provider value={{ items, setItems }}>
            {props.children}
        </CartContext.Provider>
    );
};
```

#### 🟢 After (with `useCart` hook):
```js
import { createContext, useState, useContext } from 'react';

export const CartContext = createContext(null);

// ✅ Custom Hook
export const useCart = () => {
    const cart = useContext(CartContext);
    return cart;
};

export const CartProvider = (props) => {
    const [items, setItems] = useState([]);
    return (
        <CartContext.Provider value={{ items, setItems }}>
            {props.children}
        </CartContext.Provider>
    );
};
```

---

## 🛒 Updated Components Using `useCart`

---

### 📁 File: `components/Cart.js`

```js
// ❌ Old Approach
// import React, { useContext } from 'react';
// import { CartContext } from '../context/Cart';

import React from 'react';
import { useCart } from '../context/Cart';

const Cart = () => {
    // const cart = useContext(CartContext);
    const cart = useCart();
    const total = cart.items.reduce((a, b) => a + b.price, 0);

    return (
        <div className='cart'>
            <h1>CART</h1>
            {
                cart.items.map((item, index) => (
                    <li key={index}>{item.name} - ${item.price}</li>
                ))
            }
            <h4>Total Bill: ${total}</h4>
        </div>
    );
};

export default Cart;
```

---

### 📁 File: `components/Item.js`

```js
// ❌ Old Approach
// import React, { useContext } from 'react';
// import { CartContext } from '../context/Cart';

import React from 'react';
import { useCart } from '../context/Cart';

const Item = (props) => {

    // const cart = useContext(CartContext);
    const cart = useCart();
    console.log('Cart:', cart);

    return (
        <div className="item-card">
            <h4>{props.name}</h4>
            <p>Price: ${props.price}</p>
            <button onClick={() =>
                cart.setItems([...cart.items, { name: props.name, price: props.price }])
            }>
                Add To Cart
            </button>
        </div>
    );
};

export default Item;
```

---

### 🎯 Summary

| Before | After |
|--------|-------|
| Import `useContext` + `CartContext` in every component | Just import `useCart()` |
| Redundant boilerplate code | Clean and reusable hook |
| Hard to scale | Easy to scale and maintain |

---