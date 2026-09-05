import React from 'react'

const Child = ({data}) => {
    console.log("child")
  return (
    <div>
        <h1>{data}</h1>
    </div>
  )
}

export default React.memo(Child)