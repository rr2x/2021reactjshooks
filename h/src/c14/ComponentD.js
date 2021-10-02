import React, { useContext } from 'react'
import { CountContext } from '../App'

const ComponentD = () => {
  const countContext = useContext(CountContext)
  return (
    <>
      Component D : {countContext.countState}&nbsp;&nbsp;&nbsp;
      <button onClick={()=>countContext.countDispatch('increment')}>Increment</button>
      <button onClick={()=>countContext.countDispatch('decrement')}>Decrement</button>
      <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>
    </>
  )
}

export default ComponentD
