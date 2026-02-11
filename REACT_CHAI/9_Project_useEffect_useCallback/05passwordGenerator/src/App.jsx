import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [string_length, change_string_length] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)

  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef=useRef(null)

  // const password_Generator = () => {};
  // const password_Generator = useCallback(fn, [string_length, numberAllowed, charAllowed, setPassword]); //dependencies [length, numberAllowed, charAllowed, setPassword] setPassword also a dependecy as we are also changing things based on it
  const password_Generator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+"

    for (let i = 1; i <= string_length; i++) {
      let char = Math.floor(Math.random() * str.length + 1) // Method to generate random number // 0  ≤  Math.random()  <  1
      pass += str.charAt(char);
    }

    setPassword(pass)

  }, [string_length, numberAllowed, charAllowed, setPassword]);// setPassword is used for memoization
//  }, [string_length, numberAllowed, charAllowed]); //dependencies [length, numberAllowed, charAllowed, setPassword] setPassword also a dependecy as we are also changing things based on it

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()   // This line is of no use it only highlights the portion copied by button Just for better Interaction
    passwordRef.current?.setSelectionRange(0,9) // This is of no use it's just used f we only want to copy in particular range
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{
    password_Generator()
  },[string_length, numberAllowed, charAllowed, password_Generator])

  return (
    <>
      <h1 className='text-4xl text-center w-100vh' style={{ backgroundColor: 'Green' }}>Password Generator</h1>

      <div className='w-full max-w-lg mx-auto shadow-nd rounded-2lg py-7 px-5 my-7 text-orange-500 bg-gray-700'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-gray-200'>
          <input type='text'
            value={password}
            className='outline-none w-full py-6 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />

          <button
            type="button"
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white
            px-3 py-0.5 shrink-0"
          > Copy </button>

        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={string_length}
            className='cursor-pointer'

            onChange={(e) => {change_string_length(e.target.value)}}
            />
            <label>Length: {string_length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={()=>{
                setnumberAllowed((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
              type="checkbox"
              defaultChecked={charAllowed}
              id='numberInput'
              onChange={()=>{
                setcharAllowed((prev) => !prev);
              }}
            />
            <label>Special Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
