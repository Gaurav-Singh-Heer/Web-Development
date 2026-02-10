import './App.css'
import Card from './components/Card'

function App() {

  let myObject={
    username:"GSH",
    age: 20
  }

  let newArr=[1,2,3]

  return (
    <>
    <h1 className="text-3xl font-bold underline text-blue-500 mb-2">
      Hello Gaurav 🔥
    </h1>
    <h1 className="bg-green-400 text-black p-4 rounded-4xl mb-2">
      Hello Gaurav 🔥
    </h1>

    <Card username="GSH LNED" price="500" someObject={newArr}/>
    <Card username="Kota Factory" price="200" someObject={myObject}/>
    <Card username="Aspirants" price="400" someObject={myObject}/>
    </>
  )
}

export default App