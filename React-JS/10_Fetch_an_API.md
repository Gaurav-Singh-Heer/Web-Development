# Fetch an API with React

## 🎯 Goal
We will fetch data from an API and dynamically render it on the screen using React.

---

## 📌 What is an API?

**API** stands for **Application Programming Interface**.

### ✨ Use of API:
- APIs are used to fetch data from a network or a remote server.
  
### Basic Flow:
```plaintext
Client APP --------Request---------> API ---- Query -----> Database
Client APP <---- Response --------- API <---- Data ------- Database
```

Since we don't have our own server, we will use a free service:  
👉 [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

> Go to **Resources** and select any API you want.
![Resources](./10_Fetch_an_API_Self/ScreenShot/1.jpg)


 For this demo, we will use:
```
https://jsonplaceholder.typicode.com/posts
```

---

## 🏗️ Setting up the API in React

### 1️⃣ Create `components/api.jsx`

```javascript
export const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
    });
    return await response.json(); // Parse the data as JSON
}
```

---

### 2️⃣ Update `App.jsx`

```javascript
import React, { useState, useEffect } from 'react';
import { getPosts } from '../components/api';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPosts().then(posts => setData(posts));
  }, []);

  return (
    <div className='App'>
      {
        data ? data.map(e => <li key={e.id}>{e.title}</li>) : <p>Loading data....</p>
      }
    </div>
  );
}

export default App;
```

### ✅ Output:  
> This will list all the titles from the `/posts` API.

![Output](./10_Fetch_an_API/Screenshot/1.jpg)

---

## 📝 Improving with a PostCard Component

### 3️⃣ Create `components/postcard.jsx`

```javascript
import React from "react";

const PostCard = ({ title, body }) => {
    return (
        <div className="post-card">
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
}

export default PostCard;
```

---

### 4️⃣ Update `App.jsx` to use `PostCard`

```javascript
import React, { useState, useEffect } from 'react';
import { getPosts } from '../components/api';
import PostCard from '../components/postcard';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPosts().then(posts => setData(posts));
  }, []);

  return (
    <div className='App'>
      {
        data 
        ? data.map(e => <PostCard key={e.id} title={e.title} body={e.body} />) 
        : <p>Loading data....</p>
      }
    </div>
  );
}

export default App;
```

### ✅ Output:
> Now it will render a `PostCard` for each post with **title** and **body**.

![Output](./10_Fetch_an_API/Screenshot/2.jpg)

---

## 🚀 Summary

- Fetched data using `fetch()`.
- Parsed JSON data and updated React state.
- Rendered data dynamically using a custom `PostCard` component.

---

> 🔗 **Tip**: Always remember to add a unique `key` prop when rendering lists in React!

---

## ✅ Updating PostCard with Props

### `components/postcard.jsx`

```jsx
import React from "react";

const PostCard = (props) => {
    return (
        <div className="post-card">
            <h3>{props.title}</h3>
            <p>{props.body}</p>
        </div>
    );
}

export default PostCard;
```

---

## ✅ Updating `App.jsx` to Pass Props Dynamically

### Updated `App.jsx`

```javascript
import React, { useState, useEffect } from 'react';
import { getPosts } from '../components/api';
import PostCard from '../components/postcard';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPosts().then(posts => setData(posts));
  }, []);

  return (
    <div className='App'>
      {
        data 
        ? data.map(e => <PostCard key={e.id} title={e.title} body={e.body} />) 
        : <p>Loading data....</p>
      }
    </div>
  );
}

export default App;
```

---

### ✅ Output:

> Fetching **Title** and **Body** from API and listing them on screen:

![OUTPUT](./10_Fetch_an_API/Screenshot/3.jpg)

---

## 🎨 After Styling (Padding + Box-Shadow)

- Added padding and box-shadow to the `.post-card` class.
  
### 🔔 Output after styling:

> Now each card has spacing and shadow for better UI:

![OUTPUT](./10_Fetch_an_API/Screenshot/4.jpg)

---

---

# 🚀 Example 2: Random User Generator API

## 🎯 New Task:

We will now use the **Random User Generator API**:  
🌐 `https://randomuser.me/`

## 🔨 Steps:

1. **Create a new Vite + React app**  
   Directory: `10_Random_User_Generator`

> Next, you will fetch random user data from this API and display it dynamically on the screen.

---

### 💡 Note:

- The approach will be similar:
  - Create an API utility file.
  - Create a UserCard component.
  - Fetch and map data into the component.
  - Style it nicely.

---