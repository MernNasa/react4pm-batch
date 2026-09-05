import React, { useMemo, useState } from 'react'

const UseMemoHook = () => {
    const [count,setcount]=useState(0)

    const res= useMemo(()=>{
        let sum=0
        console.log("hiii")
        for(let i=1;i<=100000000;i++){
            sum+=i
        }
        return sum
    },[])
    console.log(res)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setcount(count+1)}>Update</button>
    </div>
  )
}

export default UseMemoHook