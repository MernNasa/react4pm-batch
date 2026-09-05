import React from 'react'

const TitleCard = (props) => {
    console.log(props)
  return (
    <div>
        <h1>{props.title}</h1>
    </div>
  )
}

export default TitleCard