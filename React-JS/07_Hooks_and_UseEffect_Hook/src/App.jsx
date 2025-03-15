import React, { useEffect, useState } from 'react'
import './App.css'

import MyComponent from '../components/My_Component_3'

function App() {

  const [isVisible, setVisible] = useState(true);

  useEffect(() =>{
    console.log ("App Component is Mounting.... ")
  }, [])

  return <div className='App'>
    
    {isVisible ? <MyComponent />: <></>}         
    <br></br>
    <button onClick={()=> setVisible(!isVisible)}>TOGGLE</button>
  </div>
}

export default App
