// import React, { useState } from 'react'

// const ControlledFormHandling = () => {
//     const [username,setUsername]=useState("")
//     const handleInput=(e)=>{
//         const {value}=e.target 
//         setUsername(value)
//     }
//     const handleForm=(e)=>{
//         e.preventDefault()   
//     }
    
//   return (
//     <div>
//         <form onSubmit={handleForm}>
//             Name : <input type="text"  onChange={handleInput} name='username' value={username} />
//             <button>Submit</button>
//         </form>
//     </div>
//   )
// }

// export default ControlledFormHandling


import React, { useState } from 'react'

const ControlledFormHandling = () => {
    const [formData,setFormData]=useState({
        username:"",
        email:"",
        password:"",
        age:""
    })

    const handleForm=(e)=>{
        e.preventDefault()
        console.log(formData)
    }

    const handleInput=(e)=>{
        const {name,value}=e.target 
        setFormData({...formData,[name]:value})
    }
  return (
    <div>
        <form onSubmit={handleForm}>
                Name : <input type="text" name='username' onChange={handleInput} value={formData.username}  />
                <br />
                Email: <input type="email" name='email' onChange={handleInput}  value={formData.email}/>
                <br />
                password: <input type="password" name='password' onChange={handleInput} value={formData.password} />
                <br />
                age : <input type="number" name='age' value={formData.age} onChange={handleInput} />
                <button>Submit</button>
        </form>
    </div>
  )
}

export default ControlledFormHandling