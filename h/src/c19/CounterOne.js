import React from 'react'
import useCounter from './hooks/useCounter'

const CounterOne = () => {

  const [count, increment, decrement, reset] = useCounter(5,1)

  return (
    <div>
      <h2>Count = {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default CounterOne
