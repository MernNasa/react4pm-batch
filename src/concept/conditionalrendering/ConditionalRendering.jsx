import React from 'react'

const ConditionalRendering = () => {
    let res=false
    let data=false
    let loading=true
  return(
    <div>
        {
            10>2 ? <p>para 1</p>: <p>para 2</p>
        }
        {
            loading && <h2>Loading.......?</h2>
        }
        <h2>Main content</h2>
    </div>
  )
}

export default ConditionalRendering