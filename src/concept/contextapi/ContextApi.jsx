import React, { createContext } from 'react'
import Parent from './Parent'
import Child from './Child';
import GrandChild from './GrandChild';

export const GlobalContext=createContext();


const ContextApi = () => {
    const data={
        user:"sundari",
        age:24
    }
  return (
    <div>
        <Parent/>
        <GlobalContext.Provider value={data}>
            <Child/>
            <GrandChild/>
        </GlobalContext.Provider>
    </div>
  )
}

export default ContextApi