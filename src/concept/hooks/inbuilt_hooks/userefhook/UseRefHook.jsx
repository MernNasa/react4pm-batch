import React, { useRef } from 'react'

const UseRefHook = () => {

  const headingRef=useRef()
  console.log("hiiiiiiii")
  const updateName=()=>{
    headingRef.current.innerText="Hello Mala"
  }
  return (
    <div>
      
      <h1 ref={headingRef}>Hello sundari</h1>
      <button onClick={updateName}>Update name</button>
    </div>
  )
}

export default UseRefHook