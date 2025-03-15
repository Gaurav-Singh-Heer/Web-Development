import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [time, setTime] = useState(0);

    useEffect(() =>{
        console.log('Adding new Interval')
        const timer = setInterval(()=>setTime(time + 1), 1000);  // After 1 sec increment value by 1
        
        return function(){
            console.log('Clearing old Interval')
            clearInterval(timer);
        }
    
    }, [time])

    return (
        <div>
            <h1>STOPWATCH</h1>
            <p>Current Time is {time}</p>
        </div>
    )
}

export default Timer;