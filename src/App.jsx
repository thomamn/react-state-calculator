import { useState } from "react"
import "./App.css"
import calculate from "./calculate"

function App() {

  const [first, setFirst]=useState(0)
  const [second, setSecond]=useState(0)
  const [result, setResult]=useState(0)
  const [operator, setOperator]=useState('+')

  return (
    <div className="calculator">
      <div className="panel">
        <p>{first}</p>
        <div className="numbers">
          <button onClick={() => setFirst(1)}>1</button>
          <button onClick={() => setFirst(2)}>2</button>
          <button onClick={() => setFirst(3)}>3</button>
          <button onClick={() => setFirst(4)}>4</button>
          <button onClick={() => setFirst(5)}>5</button>
          <button onClick={() => setFirst(6)}>6</button>
          <button onClick={() => setFirst(7)}>7</button>
          <button onClick={() => setFirst(8)}>8</button>
          <button onClick={() => setFirst(9)}>9</button>
          <button onClick={() => setFirst(0)}>0</button>
          <button onClick={() => setFirst(0)}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={() => setOperator('+')}>+</button>
          <button onClick={() => setOperator('-')}>-</button>
          <button onClick={() => setOperator('*')}>*</button>
          <button onClick={() => setOperator('÷')}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{second}</p>
        <div className="numbers">
        <button onClick={() => setFirst(1)}>1</button>
          <button onClick={() => setSecond(2)}>2</button>
          <button onClick={() => setSecond(3)}>3</button>
          <button onClick={() => setSecond(4)}>4</button>
          <button onClick={() => setSecond(5)}>5</button>
          <button onClick={() => setSecond(6)}>6</button>
          <button onClick={() => setSecond(7)}>7</button>
          <button onClick={() => setSecond(8)}>8</button>
          <button onClick={() => setSecond(9)}>9</button>
          <button onClick={() => setSecond(0)}>0</button>
          <button onClick={() => setSecond(0)}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={() => setResult(calculate(first, second, operator))}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
