import React, { useContext } from 'react'
import ComponentF from './ComponentF'
import { UserContext, ChannelContext } from '../App'

/* context consumption with hooks */
function ComponentE() {

  const user = useContext(UserContext)
  const channel = useContext(ChannelContext)

  return (
    <>
      <ComponentF/>
      context hook: {user} - {channel}
    </>
  )
}

export default ComponentE
