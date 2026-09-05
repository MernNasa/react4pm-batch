import React from 'react'

const NonPrimitiveProps = (props) => {
    console.log(props) // object 
  return (
    <div>
        <h2>{props.data}</h2>
    </div>
  )
}

export default NonPrimitiveProps