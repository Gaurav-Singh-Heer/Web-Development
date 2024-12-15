import React, { useRef } from 'react';
import './ClickerCounter.css'; 

const ClickerCounter = () => {
    const countRef = useRef(0); 
    const displayRef = useRef(null); 

    const handleIncrement = () => {
        countRef.current += 1; 
        displayRef.current.innerText = countRef.current; 
    };

    const handleDecrement = () => {
        countRef.current -= 1; 
        displayRef.current.innerText = countRef.current; 
    };

    return (
        <div className="counter-container">
            <h1 ref={displayRef}>0</h1>
            <div className="button-container">
                <button className="btn" onClick={handleIncrement}>Increase</button>
                <button className="btn" onClick={handleDecrement}>Decrease</button>
            </div>
        </div>
    );
};

export default ClickerCounter;
