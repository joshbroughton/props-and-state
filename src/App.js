import './App.css';
import Counter from './Counter';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState([0, 0, 0]);

  return (
    <div className="App">
      <h1>Total: {count.reduce((acc, n) => acc += n)}</h1>
      <div className="Counters">
        {count.map((value, index) => {
          return(
            <Counter
            label={`counter ${index}`}
            value={value}

            increment={() => {
              const newCount = [...count];
              newCount[index] += 1;
              setCount(newCount);
            }}
            decrement={() => {
              const newCount = [...count];
              newCount[index] -= 1;
              setCount(newCount);
            }} />
          )
        })}
      </div>
    </div>
  );
}


export default App;
