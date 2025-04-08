import Item from "../components/Item";
import Cart from "../components/Cart";
import './App.css';

function App() {
  return (
    <div className="App">
      <Item name="MacBook Pro" price={100000}/> 
      <Item name="PenDrive" price={1000}/> 
      <Item name="Pen" price={100}/> 

      <Cart />
    </div>
  )
}

export default App;