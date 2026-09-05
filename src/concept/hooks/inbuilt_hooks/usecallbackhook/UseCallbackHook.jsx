import React, { useCallback, useState } from 'react'
import Child from './Child'

const UseCallbackHook = () => {
  const [count,setCount]=useState(0)

  const demo=useCallback(()=>{
    console.log("demo")
  },[])

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Update</button>
      <Child demo={demo}/>
    </div>
  )
}

export default UseCallbackHook