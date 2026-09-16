import React, { useEffect, useReducer } from 'react'

const UseReducerHook = () => {
    const initialState=0
    const reducer=(state,action)=>{
        switch(action){
            case "increment":
                return state+1
            case "decrement":
                return state-1 
            case "reset":
                return initialState
            default:
                alert("Invalid Action")
                return state   
        }
    }
    const [count,dispatch]=useReducer(reducer,initialState)
    // contextApi simple state management (inbuilt react state management)

    // RTK (Redux Toolkit) state management (third party state management library) 
    // RTK used for large scale application state management
   
  return (
    <div>
        <h1>UseReducerHook</h1>
         <p>Count: {count}</p>
        <button className="border-2 bg-blue-500 text-white p-2 cursor-pointer" onClick={()=>dispatch("increment")}>Increment</button>
        <button className="border-2 bg-blue-500 text-white p-2 cursor-pointer" onClick={()=>dispatch("decrement")}>Decrement</button>
        <button className="border-2 bg-blue-500 text-white p-2 cursor-pointer" onClick={()=>dispatch("reset")}>Reset</button>
        <button className="border-2 bg-blue-500 text-white p-2 cursor-pointer" onClick={()=>dispatch("complete")}>Complete</button>
       
    </div>
  )
}

export default UseReducerHook