import React, { useState, useEffect } from 'react'
import { getPosts } from '../components/api'
import PostCard from '../components/postcard';
import './App.css'

function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    getPosts().then(posts => setData(posts));
  }, []);

  return (
    <div className='App'>
      {
        data ? data.map(e => <PostCard title={e.title} body={e.body}/>) : <p>Loading data....</p>
      }
    </div>
  );
}

export default App;
