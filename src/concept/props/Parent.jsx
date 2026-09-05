import React, { Fragment } from 'react'
import Child from './Child'
import PrimitiveProps from './PrimitiveProps'
import TitleCard from './TitleCard'
import NonPrimitiveProps from './NonPrimitiveProps'

const Parent = () => {
    // let money=3000
    // let str="abc"
    // let val=12345
    // let result=true
    // let errors=null

    let arr=["sheela",'leela','mala','shakila']
  return (
    <div>
        {/* <Child data={money}/>
        <PrimitiveProps string={str} value={val} res={result} err={errors}/> */}
{/* 
        <TitleCard title="Main Card"/>
        <hr />
        <TitleCard title="Welcome to my Page"/> */}
       
       {
        arr.map((ele,index)=>{
          return (
            <Fragment key={index}>
               <NonPrimitiveProps data={ele}/>
            </Fragment>
          )
        })
       }
    </div>
  )
}

export default Parent