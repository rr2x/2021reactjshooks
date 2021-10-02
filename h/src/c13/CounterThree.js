import React, { useReducer } from 'react'

const initialState = 0

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}

const CounterThree = () => {
  // multiple useReducer to prevent duplicating code within reducer
  const [count, dispatch] = useReducer(reducer, initialState)
  const [countTwo, dispatch2] = useReducer(reducer, initialState)

  return (
    <>
      <div>1st Count - {count}</div>
      <button onClick={()=>dispatch('increment')}>Increment</button>
      <button onClick={()=>dispatch('decrement')}>Decrement</button>
      <button onClick={()=>dispatch('reset')}>Reset</button>

      <div>2nd Count - {countTwo}</div>
      <button onClick={()=>dispatch2('increment')}>Increment</button>
      <button onClick={()=>dispatch2('decrement')}>Decrement</button>
      <button onClick={()=>dispatch2('reset')}>Reset</button>
    </>
  )
}

export default CounterThree
