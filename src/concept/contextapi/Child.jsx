import React, { useContext } from 'react'
import { GlobalContext } from './ContextApi'


const Child = () => {
    const res=useContext(GlobalContext)
    console.log(res)
  return (
    <div>
        <h1>Child</h1>
    </div>
  )
}

export default Child