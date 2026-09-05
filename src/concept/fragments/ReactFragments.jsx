import React, { Fragment } from 'react'

const ReactFragments = () => {
    const arr=[1,2,3,4,5,6,7,8]
  return (
    <>
        <h1>ReactFragments</h1>
        <h2>Fragment</h2>
        <ul>
            {
                arr.map(( ele,index)=>{
                    return <Fragment key={index}>
                        <li>{ele}</li>
                    </Fragment>
                })
            }
        </ul>
    </>
  )
}

export default ReactFragments