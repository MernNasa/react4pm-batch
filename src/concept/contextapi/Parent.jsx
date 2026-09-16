import React, { useContext } from 'react'
import { GlobalContext } from './ContextApi'


const Parent = () => {
  const result=useContext(GlobalContext)
  console.log(result)
  return (
    <div>
        <h1>Parent</h1>
    </div>
  )
}

export default Parent