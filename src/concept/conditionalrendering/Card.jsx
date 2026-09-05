import React from 'react'

const Card = ({data}) => {
    const {username,percentage,id}=data
  return (
    <tr style={percentage>80 ? {backgroundColor:"lightgreen"}:percentage>60 && percentage<80 ? {backgroundColor:"yellow"}:{backgroundColor:"orange"} }>
        <td>{id}</td>
        <td>{username}</td>
        <td>{percentage}</td>
    </tr>
  )
}

export default Card