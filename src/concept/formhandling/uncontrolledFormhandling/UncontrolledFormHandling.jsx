import React, { useRef } from 'react'

const UncontrolledFormHandling = () => {
    const usernameRef=useRef()
    const handleForm=(e)=>{
        e.preventDefault()
        console.log(usernameRef.current.value)
    }
  return (
    <div>
        <form onSubmit={handleForm}>
            Name : <input type="text"  ref={usernameRef}/>
            <br />
            <br />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default UncontrolledFormHandling