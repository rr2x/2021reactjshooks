import React from 'react'

const Count = ({text, count}) => {
  console.log(`Rendering ${text}`);
  return (
    <>
      {text} - {count}
    </>
  )
}

export default React.memo(Count)
