import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Chai from './Chai.jsx'
import React from "react"; // required for React.createElement

function MyApp(){
  return(
    <div>
      <h1>YE WAALA TOH SUKHNA HAI KAAM 19-20 HAI BNDA 20 HAI Boss</h1>
    </div>
  )
}

const anotherElement = (
  <a href="https://google.com" target="_blank">VISIT GOOGLE</a>
)

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'CLICK HERE TO VISIT ANOTHER ZONE OF LNED'
)

const anotherUser = ' Son of K.Kumar '

const reactElementh1 = React.createElement(
  'h1',
  {},
  'CLICK HERE TO VISIT ANOTHER ZONE OF LNED ',
  anotherUser
)


// 🔁 FOR LOOP: Squares from 1 to 100
const squares = []
for(let i = 1; i <= 100; i++){
  squares.push(
    React.createElement(
      'li',
      { key: i },
      `Square of ${i} is ${i*i}`
    )
  )
}

const squareList = React.createElement('ul', {}, squares)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {anotherElement}
    <hr/>
    {reactElement}
    {reactElementh1}
    <hr/>
    {squareList}
    <hr/>
    MyApp()   // ❌ wrong
    <MyApp /> // ✅ correct
    <App />
    <Chai/>
  </StrictMode>,
)