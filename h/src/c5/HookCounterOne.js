import React, { useState, useEffect } from 'react'

function HookCounterOne() {

  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  useEffect(() => {
    console.log(`useEffect -- updating document title`)
    document.title = `You clicked ${count} times`
  }, [count]) // if value of objects inside changed, execute useEffect

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={
          e => setName(prevName => (prevName = e.target.value))
        }
      />
      <button
        onClick={
          () => setCount(prevCount => prevCount + 1)
        }>
        Clicked {count} times
      </button>
    </div>
  )
}

export default HookCounterOne
