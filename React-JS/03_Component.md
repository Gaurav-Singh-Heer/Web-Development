Here's the content in **Markdown (`.md`) format**:  

```md
# React Components  

In React, **everything is a component**—Button, Icon, Section, etc.  

## How to Create a Component  

A **component** in React is simply a **JavaScript function** that returns **JSX**.  

### Example: "Hello World" Component  

```jsx
import React from "react";

function HelloWorld() {
    return <h3>Hello World</h3>;
}
```

## Rules for Creating Components  

### 1) Should Return JSX  

✅ **Correct:**  

```jsx
function HelloWorldComponent() {
    return <h3>Hello World</h3>;
}
```

❌ **Incorrect:**  

```jsx
function HelloWorldComponent() {
    return "Hello World";
}
```

### 2) Component Name Must Start with an Uppercase Letter  

✅ **Correct:**  

```jsx
function HelloWorldComponent() {
    return <h3>Hello World</h3>;
}
```

❌ **Incorrect:**  

```jsx
function helloWorldComponent() {
    return <h3>Hello World</h3>;
}
```

---

## Created Components  

### 1) `HelloWorld` in `App.jsx`  

```jsx
import Biography from "./Biography";

function HelloWorld() {
    return <h3>Hello World</h3>;
}

function App() {
    return (
        <>
            <HelloWorld />
            <Biography />
        </>
    );
}

export default App;
```

### 2) `Biography` in `Biography.jsx`  

```jsx
function Biography() {
    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2>Gaurav Singh Heer</h2>
            <p>
                I am a passionate web developer and programmer, constantly exploring new
                technologies and improving my skills. With experience in React, JavaScript, and SQL, I build
                interactive and responsive web applications.
            </p>
            <p>
                I have worked on projects like a Starbucks-themed website, a book review platform,
                and a car selling & renting site named Roadster. My interest also extends to
                solving complex coding problems, and I have achieved 5-star rankings on platforms like SQL HackerRank.
            </p>
            <p>
                Apart from coding, I enjoy working on innovative ideas, participating in hackathons, and 
                collaborating with like-minded individuals to bring projects to life.
            </p>
        </div>
    );
}

export default Biography;
```

---

## Folder Structure  

```
03_Component/
│── src/
│   ├── App.jsx
│   ├── Biography.jsx
│   ├── assets/
│   ├── App.css
│   ├── main.jsx
```

---

Now, you have successfully created and used two components:  
1. **HelloWorld** (in `App.jsx`)  
2. **Biography** (in `Biography.jsx`)  
