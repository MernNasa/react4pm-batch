import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate=useNavigate()
  const loginFunction=()=>{
    let token="yvfvbvfbfbydhbfbhvbvj"
      localStorage.setItem("jwtToken",JSON.stringify(token))
      navigate("/dashboard")
  }
  return (
    <div>
        <h1>Login</h1>
        <button className='border-2' onClick={loginFunction}>Login</button>
        <Link to="/">Go to Home</Link>
    </div>
  )
}

export default Login