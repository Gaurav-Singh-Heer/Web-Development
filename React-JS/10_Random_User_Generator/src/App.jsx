import React, { useState, useEffect } from 'react'
import { getPosts, getRandomUser } from '../components/api'
import PostCard from '../components/postcard';
import UserCard from '../components/UserCard';
import './App.css'

function App() {

  const [data, setData] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getPosts().then(posts => setData(posts));
  }, []);

  useEffect(()=>{
    getRandomUser().then((user)=> setUserData(user.results[0]));
  }, [])

  const refersh = () =>{
    getRandomUser().then((user)=> setUserData(user.results[0]));
  }

  return (
    <div className='App'> 
      <UserCard data = {userData}/>
      <button onClick={refersh}>Refresh User</button>
      {
        data ? data.map(e => <PostCard title={e.title} body={e.body}/>) : <p>Loading data....</p>
      }
    </div>
  );
}

export default App;
