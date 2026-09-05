import React, { Fragment } from 'react'
import Card from './Card'

const Conditional_Props = () => {
    const arr=[
       {
        id:1,
        username:"sundari",
        percentage:99
       },
       {
        id:2,
        username:"sheela",
        percentage:89
       },
       {
        id:3,
        username:"mala",
        percentage:79
       },
       {
        id:4,
        username:"shakila",
        percentage:59
       },
       {
        id:5,
        username:"sharmila",
        percentage:95
       },

    ]
    const username=false
  return (
    <div>
        <button>{ username || "default"}</button>
        <table>
            <tr>
                <th>ID </th>
                <th>Name </th>
                <th>Percentage</th>
            </tr>
            {
                arr.map((ele,index)=>{
                    return <Fragment key={index}>
                            <Card data={ele}/>
                    </Fragment>
                })
            }
        </table>

        {
            false && <h1>hello</h1>
        }

        
    </div>
  )
}

export default Conditional_Props