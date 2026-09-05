import React from 'react'

const List_Keys = () => {
    const arr=['apple','banana','cherry berry','dragon fruit','elephant apple']
  return (
    <div>
        <ol>
            {
                arr.map((ele,index)=>{
                    return <li key={index}>{ele}</li>
                })
            }
        </ol>
    </div>
  )
}

export default List_Keys