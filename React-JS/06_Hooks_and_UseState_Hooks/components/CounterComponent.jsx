import React, {useState} from "react";

const CounterComponent = () =>{
    const [count, setCount] = useState(15);

    return (
        <div>
            <p> Count Component = {count}</p>
            <button onClick={()=>setCount(45)}>Increment</button>
            <button onClick={()=>setCount(15)}>Decrement</button>
        </div>
    )
}

export default CounterComponent;