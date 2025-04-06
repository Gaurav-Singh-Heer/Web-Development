import { useContext } from 'react';
import './App.css';
import Counter from '../components/Counter';
import { CounterContext } from '../context/Counter';

function App() {

  const couterState = useContext(CounterContext);

  console.log("Context", couterState);

  return (
    <div className="App">
      <h1>Context API</h1>
      <h1>Count is {couterState.count}</h1>

      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  )
}

export default App;