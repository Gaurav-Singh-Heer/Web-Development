import React, {useEffect, useState} from "react";

const MyComponent = () => {

    const [count, setCount] = useState(0);    
    const [count_2, setCount_2] = useState(40);    

    useEffect (()=>{
        console.log('My Component is Mounting')
    }, [])

    useEffect (()=>{
        console.log("Count got updated", count)
        console.log("Count_2 got updated", count_2)
    }, [count,count_2]);                         // Now when count update this function will run  // Dependency Array means when to run this Component

    return (
        <div>
            <p>Count is {count}</p>
            <button onClick={()=> setCount(count+1)}>Increment</button>
            <button onClick={()=> setCount(count-1)}>Decrement</button>
            
            <p>Count_2 value is {count_2}</p>
            <button onClick={()=> setCount_2(count_2+1)}>Increment count_2</button>
            <button onClick={()=> setCount_2(count_2-1)}>Decrement count_2</button>
        </div>
    )
}

export default MyComponent