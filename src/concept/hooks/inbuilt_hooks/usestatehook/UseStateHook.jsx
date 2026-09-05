import React, { useState } from 'react'
import Child from './Child'

const UseStateHook = () => {

  let [count,setCount]=useState(0)
    console.log("hii")
  const increment=()=>{
    setCount(count+2)
  }
  console.log("hello")

  return (
    <div>
        
        <h2>{count}</h2>
        <button onClick={increment}>Update</button>
        <Child/>
    </div>
  )
}

export default UseStateHook