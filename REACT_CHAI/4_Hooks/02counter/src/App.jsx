import { useState } from 'react'
import './App.css'

function App() {

  // const [count, setCount] = useState(5) // count is just a variable name and setcount is just a method name here
  const [count, GSHsetCount] = useState(5) // count is just a variable name and GSHsetcount is just a method name or convention here

  const addValue = () => {
    // count=count+1
    // setCount(count + 1)
    GSHsetCount(count + 1)
    console.log("Clicked", count)
  }

  const removeValue = () => {
    GSHsetCount(count - 1)
    console.log("Clicked", count)
  }

  return (
    <>
      <h1>CHAI AUR REACT</h1>
      <h2>COUNTER VALUE: {count}</h2>

      <button onClick={addValue}>Add Value</button>
      &nbsp;
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App