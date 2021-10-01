import React, { useState, useEffect } from 'react'

function IntervalHookCounter() {

  const [count, setCount] = useState(0)

  const tick = () => setCount(prevCount => prevCount + 1)

  useEffect(()=>{

    const doSomething = () => console.log('hey');

    doSomething()

    const interval = setInterval(tick, 1000)

    return () => clearInterval(interval)

  }, [])

  // note: you can use useEffect() multiple times to separate code according to context
  useEffect(()=> { /* another code */ })

  return (
    <div>
      { count }
    </div>
  )
}

export default IntervalHookCounter
