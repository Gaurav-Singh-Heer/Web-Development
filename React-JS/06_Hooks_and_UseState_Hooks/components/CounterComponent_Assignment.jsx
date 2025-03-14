import React, { useState } from "react";

const CounterComponent = () => {
    const [count, setCount] = useState(0);
    // const [value, setValue] = useState("Even");

    return (
        <div>
            <p> Count Component = {count}</p>
            <h3>Value is {count % 2 === 0 ? "Even" : "Odd"} </h3>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
};

export default CounterComponent;

// OR

/*
import React, { useState } from "react";

const CounterComponent = () => {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState("Even");

    const handleIncrement = () => {
        const newCount = count + 1;
        setCount(newCount);
        setValue(newCount % 2 === 0 ? "Even" : "Odd");
    };

    const handleDecrement = () => {
        const newCount = count - 1;
        setCount(newCount);
        setValue(newCount % 2 === 0 ? "Even" : "Odd");
    };

    return (
        <div>
            <p> Count Component = {count}</p>
            <h3>Value is {value} </h3>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
};

export default CounterComponent;
*/