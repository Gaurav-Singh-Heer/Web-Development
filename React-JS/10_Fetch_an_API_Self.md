# Fetch an API with React

In this guide, we will learn how to fetch data from an API and render it dynamically on the screen using **React**.

---

## What is an API?

**API** stands for **Application Programming Interface**.

### Why do we use APIs?

APIs are used for **fetching data from a network** or server. They act as a bridge between your application (client) and the database/server.

### Flow of API Communication:

```
Client App ------------- Request --------> API -------- Query Database --------> Database
Client App <------ Response with Data ---- API <----------- Data --------------- Database
```

---

Since we don't have a custom backend server here, we will be using a free API provided by **[JSONPlaceholder](https://jsonplaceholder.typicode.com/)**.

1. Visit the JSONPlaceholder website.
2. Go to the **Resources** section.

![Resources](./10_Fetch_an_API/ScreenShot/1.jpg)

3. Choose any available API endpoint (e.g., `/posts`, `/users`, `/comments`, etc.)

For this example, we will fetch data from:

👉 **https://jsonplaceholder.typicode.com/posts**

---

## React App Structure

We will create two components:
- `App` (main component)
- `PostList` (child component that fetches and displays the data)

---

## Code Implementation

### `App.jsx`

```javascript
// App.js
import React from 'react';
import './App.css';
import PostList from '../Components/PostList';

function App() {
  return (
    <div className="App">
      <h1>Fetch API Example</h1>
      <PostList />
    </div>
  );
}

export default App;
```

---

### `Components/PostList.jsx`

```javascript
import React, { useEffect, useState } from 'react';

function PostList() {
  const [posts, setPosts] = useState([]);

  // Fetch data from API when component mounts
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div
            key={post.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '15px',
              marginBottom: '15px',
              backgroundColor: '#f9f9f9',
            }}
          >
            <h3 style={{ marginBottom: '5px', color: '#333' }}>
              User ID: <strong>{post.userId}</strong> | Post ID: <strong>{post.id}</strong>
            </h3>
            <h4 style={{ marginBottom: '8px', color: '#555' }}>
              Title: <em>{post.title}</em>
            </h4>
            <p style={{ color: '#666' }}>{post.body}</p>
          </div>
        ))
      ) : (
        <p style={{ fontStyle: 'italic', color: '#888' }}>Loading posts...</p>
      )}
    </div>
  );
}

export default PostList;
```

---

## Output:

- Displays a list of posts dynamically on your React app.
- Shows a loading message until the data is fetched.

![OUTPUT](./10_Fetch_an_API/ScreenShot/2.jpg)
---