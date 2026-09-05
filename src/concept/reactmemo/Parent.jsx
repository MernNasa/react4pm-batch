import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [count,setCount]=useState(0)
    console.log("parent")
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Update</button>
        <Child data={count}/>
    </div>
  )
}

export default Parent