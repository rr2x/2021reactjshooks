import React, { useState, useEffect } from 'react'

function HookMouse() {

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePosition = e => {
    console.log(`Mouse Event`);
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(()=>{
    console.log('useEffect called');
    window.addEventListener('mousemove', logMousePosition)

    return () => {
      // clean up code
      console.log('component unmounting code')
      window.removeEventListener('mousemove', logMousePosition)
    }
  },[]) // empty array tells to execute useEffect once, does not depend on any props or state

  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  )
}

export default HookMouse
