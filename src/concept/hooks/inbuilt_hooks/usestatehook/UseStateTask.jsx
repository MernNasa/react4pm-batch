import React, { useState } from 'react'

const UseStateTask = () => {

  const [user,setUser]=useState({
    name:"sundari",
    age:24,
    email:"sundari@gmail.com"
  })

  const changeName=()=>{
    const username=prompt("Enter your Name: ")
        setUser({...user,name:username})
  }
  const changeAge=()=>{
    const userage=prompt("Enter your age: ")
        setUser({...user,age:userage})
  }
  const changeEmail=()=>{
    const usermail=prompt("Enter your Email :")
        setUser({...user,email:usermail})
  }

  return (
    <div>
        <h2>Name : {user.name}</h2>
        <h2>Age : {user.age}</h2>
        <h2>Email : {user.email}</h2>
        <button onClick={changeName}>Change Name</button>
        <button onClick={changeAge}>Change Age</button>
        <button onClick={changeEmail}>Change Email</button>
    </div>
  )
}

export default UseStateTask