import React, {useState} from "react";

const CounterComponent = () =>{
    const [count, setCount] = useState(0);
    const [value, setValue] = useState('Piyush is Teacher of Gaurav');

    return (
        <div>
            <p> Count Component = {count}</p>
            <h3>Value is {value} </h3>
            <button onClick={()=>setValue("Gaurav is Student of Piyush")}>Change VALUE</button>
            <br />
            <br />
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
        </div>
    )
}

export default CounterComponent;