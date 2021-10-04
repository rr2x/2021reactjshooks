import React, { useState, useCallback } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

const ParentComponent = () => {
  const [age, setAge] = useState(25)
  const [salary, setSalary] = useState(50000)

  // useCallback(function, dependency: if dependency changes then rerender)
  const incrementAge = useCallback(() => setAge(age + 1), [age])

  const incrementSalary = useCallback(() => setSalary(salary + 1), [salary])

  // even if you use React.memo on the components,
  // <Button /> still renderes twice (increment age, increment salary)
  // because each new render will create a new instance of the attached function
  // this problem is solved by useCallback hook
  return (
    <>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </>
  )
}

export default ParentComponent
