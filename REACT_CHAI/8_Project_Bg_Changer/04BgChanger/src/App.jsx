import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [ color, changeColor] = useState("Olive")

  return (
    <> 
      <div className="w-full h-screen duration-200"
      style={{backgroundColor:[color]}}>
        <div className="fixed flex flex-wrap 
        justify-center bottom-12 inset-x-0 px-2">
          <div className='flex flex-wrap justify-center 
          gap-3 shadow-lg bg-white px-2 rounded-3xl'>
            <button onClick={()=>changeColor("Violet")} type="button"className="min-h-[3rem] px-4  active:scale-105 scale-110 active:transition-all duration-50 font-semibold rounded-full bg-gray-100 text-gray-800" style={{backgroundColor:"Violet"}}>Violet</button>
            <button onClick={()=>changeColor("Indigo")} type="button"className="min-h-[3rem] px-4  active:scale-105 scale-110 active:transition-all duration-50 font-semibold rounded-full bg-gray-100 text-gray-800" style={{backgroundColor:"Indigo"}}>Indigo</button>
            <button onClick={()=>changeColor("Blue")} type="button"className="min-h-[3rem] px-4  active:scale-105 scale-110 active:transition-all duration-50 font-semibold rounded-full bg-gray-100 text-gray-800" style={{backgroundColor:"Blue"}}>Blue</button>
            <button onClick={()=>changeColor("Green")} type="button"className="min-h-[3rem] px-4  active:scale-105 scale-110 active:transition-all duration-50 font-semibold rounded-full bg-gray-100 text-gray-800" style={{backgroundColor:"Green"}}>Green</button>
            <button onClick={()=>changeColor("Yellow")} type="button"className="min-h-[3rem] px-4  active:scale-105 scale-110 active:transition-all duration-50 font-semibold rounded-full bg-gray-100 text-gray-800" style={{backgroundColor:"Yellow"}}>Yellow</button>
            <button onClick={()=>changeColor("Orange")} type="button"className="min-h-[3rem] px-4  active:scale-105 scale-110 active:transition-all duration-50 font-semibold rounded-full bg-gray-100 text-gray-800" style={{backgroundColor:"Orange"}}>Orange</button>
            <button onClick={()=>changeColor("Red")} type="button"className="min-h-[3rem] px-4  active:scale-105 scale-110 active:transition-all duration-50 font-semibold rounded-full bg-gray-100 text-gray-800" style={{backgroundColor:"RED"}}>Red</button>
           
            <button onClick={()=>changeColor("Red")} type="button"className="min-h-[3rem] px-4  active:scale-105 scale-110 active:transition-all duration-50 font-semibold rounded-full bg-gray-100 text-gray-800" style={{backgroundColor:"Red"}}>Red</button>
            <button onClick={()=>changeColor("Green")} type="button"className="min-h-[3rem] px-4  active:scale-105 scale-110 active:transition-all duration-50 font-semibold rounded-full bg-gray-100 text-gray-800" style={{backgroundColor:"Green"}}>Green</button>
            <button onClick={()=>changeColor("Blue")} type="button"className="min-h-[3rem] px-4  active:scale-105 scale-110 active:transition-all duration-50 font-semibold rounded-full bg-gray-100 text-gray-800" style={{backgroundColor:"Blue"}}>Blue</button>
            <button onClick={()=>changeColor("Olive")} type="button"className="min-h-[3rem] px-4  active:scale-105 scale-110 active:transition-all duration-50 font-semibold rounded-full bg-gray-100 text-gray-800" style={{backgroundColor:"Olive"}}>Olive</button>
            <button onClick={()=>changeColor("Gray")} type="button"className="min-h-[3rem] px-4  active:scale-105 scale-110 active:transition-all duration-50 font-semibold rounded-full bg-gray-100 text-gray-800" style={{backgroundColor:"Gray"}}>Gray</button>
            <button onClick={()=>changeColor("Yellow")} type="button"className="min-h-[3rem] px-4  active:scale-105 scale-110 active:transition-all duration-50 font-semibold rounded-full bg-gray-100 text-gray-800" style={{backgroundColor:"Yellow"}}>Yellow</button>
            <button onClick={()=>changeColor("Pink")} type="button"className="min-h-[3rem] px-4  active:scale-105 scale-110 active:transition-all duration-50 font-semibold rounded-full bg-gray-100 text-gray-800" style={{backgroundColor:"Pink"}}>Pink</button>
            <button onClick={()=>changeColor("Purple")} type="button"className="min-h-[3rem] px-4  active:scale-105 scale-110 active:transition-all duration-50 font-semibold rounded-full bg-gray-100 text-gray-800" style={{backgroundColor:"Purple"}}>Purple</button>
            <button onClick={()=>changeColor("Lavender")} type="button"className="min-h-[3rem] px-4  active:scale-105 scale-110 active:transition-all duration-50 font-semibold rounded-full bg-gray-100 text-gray-800" style={{backgroundColor:"Lavender"}}>Lavender</button>
            <button onClick={()=>changeColor("White")} type="button"className="min-h-[3rem] px-4  active:scale-105 scale-110 active:transition-all duration-50 font-semibold rounded-full bg-gray-100 text-gray-800" style={{backgroundColor:"White"}}>White</button>
            <button onClick={()=>changeColor("Black")} type="button"className="min-h-[3rem] px-4  active:scale-105 scale-110 active:transition-all duration-50 font-semibold rounded-full bg-gray-100 text-gray-800" style={{backgroundColor:"Black"}}>Black</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
