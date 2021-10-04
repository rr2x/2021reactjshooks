import React, { useState, useMemo } from 'react'

const Counter = () => {
  const [counterOne, setCounterOne] = useState(0)
  const [counterTwo, setCounterTwo] = useState(0)

  const incrementOne = () => setCounterOne(counterOne + 1)
  const incrementTwo = () => setCounterTwo(counterTwo + 1)

  // cache the value
  // only execute if dependency changes
  const isEven = useMemo(() => {
    let i = 0
    while (i < 200000000) i ++
    return counterOne % 2 === 0
  }, [counterOne])

  return (
    <>
      <div>
        <button onClick={incrementOne}>Count One - {counterOne}</button>
        <span>{isEven ? ' Even' : ' Odd'}</span>
      </div>


      <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
    </>
  )
}

export default Counter
