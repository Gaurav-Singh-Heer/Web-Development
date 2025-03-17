import React, { useEffect, useState } from 'react'

function PostList() {
    const [posts, setPosts] = useState([])

    // Fetching data from API on component mount
    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching posts:', error))
    }, [])

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
    )
}

export default PostList
