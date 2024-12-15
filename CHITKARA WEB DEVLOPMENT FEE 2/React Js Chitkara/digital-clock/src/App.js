import React, { useState } from 'react';
import './App.css';

const App=()=>{
    const currTime=new Date().toLocaleTimeString();
    const [time,  setTime]=useState(currTime);

    const update=()=>{
        const currTime=new Date().toLocaleTimeString();
        setTime(currTime);
    }

    setInterval(()=>{
        update()
    },1000)

    return (
        <div className='container'>
            <h1 className='text'>Digital Clock</h1>
            <h1>{time}</h1>
        </div>
    )
};

export default App;