import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div style={{textAlign: 'center', marginTop: '10%'}}>
      <h1>Hello, World! {counter}</h1>
      <button style={{marginRight: '3%'}} onClick={() => {
        setCounter(counter + 1)
      }}>Increment</button>
      <button onClick={() => {
        if (counter > 0) {
          setCounter(counter - 1)
        }
      }}>Decrement</button>
    </div>
  );
}

export default App;
