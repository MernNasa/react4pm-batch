import React from 'react'

const Child = ({demo}) => {
    console.log("child component")
    console.log(demo)
  return (
    <div>Child</div>
  )
}

export default React.memo(Child)