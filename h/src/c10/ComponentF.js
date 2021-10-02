import React from 'react'
import { UserContext, ChannelContext } from '../App'

function ComponentF() {
  return (
    <>
      {/* context consumption without hooks */}
      <UserContext.Consumer>
        {user => <div>user context value: {user} </div>}
      </UserContext.Consumer>
      <ChannelContext.Consumer>
        {channel => <div>channel context value: {channel} </div>}
      </ChannelContext.Consumer>
    </>
  )
}

export default ComponentF
