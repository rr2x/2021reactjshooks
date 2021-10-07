import React from 'react'
import useInput from './hooks/useInput'

const UserForm = () => {

  const [firstName, bindFirstName, resetFirstName] = useInput('')
  const [lastName, bindLastName, resetLastName] = useInput('')

  const submitHandler = e => {
    e.preventDefault()
    alert(`hello ${firstName} ${lastName}`)
    resetFirstName()
    resetLastName()
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name</label>
          {/* spread operator that mirrors the attribute values, */}
          {/* we are using JSX here and not html */}
          <input {...bindFirstName} type="text" />
        </div>
        <div>
          <label>Last Name</label>
          <input {...bindLastName} type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default UserForm
