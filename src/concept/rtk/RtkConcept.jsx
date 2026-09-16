import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../../features/counterSlice'

const RtkConcept = () => {

    const data=useSelector((state)=>state.counter)
    console.log(data)
    const dispacth=useDispatch()
  return (
    <div>
        <h1>Redux Toolkit Concept</h1>
        <h2>Counter Value: {data}</h2>
        <button className='border-2 bg-blue-200' onClick={()=>dispacth(increment())}>Increment</button>
        <button className='border-2 bg-red-200' onClick={()=>dispacth(decrement())}>Decrement</button>
        <button className='border-2 bg-green-200' onClick={()=>dispacth(reset())}>Reset</button>
    </div>
  )
}

export default RtkConcept 