import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
    const [count,setCount]=useState(0)
    const [val,setVal]=useState(10)
   useEffect(()=>{
    console.log("hello")
   },[val])

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Update</button>
        <h1>{val}</h1>
        <button onClick={()=>setVal(val+10)}>Update val</button>
    </div>
  )
}

export default UseEffectHook