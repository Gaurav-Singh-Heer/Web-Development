import React, {useState} from "react";

const CounterComponent = () =>{
    const [count, setCount] = useState(0);

    console.log("Hello",count)

    return (
        <div>
            <p> Count Component = {count}</p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
        </div>
    )
}

export default CounterComponent;