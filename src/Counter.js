import './Counter.css';

export default function Counter({ label, value, increment, decrement }) {
  return (
    <div className="CounterCard">
      <div className="Counter">
        <small>{label}</small>
        <h1>{value}</h1>
        <div>
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
        </div>
      </div>
    </div>
  )
}
