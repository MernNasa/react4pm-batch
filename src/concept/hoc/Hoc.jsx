import React from 'react'
import Car from './Car'
import WrapperComponent from './WrapperComponent'

const Hoc = () => {
  return (
    <div>
        <WrapperComponent>
            <Car/>
        </WrapperComponent>
        
          <Car/>
        <WrapperComponent>
            <Car/>
        </WrapperComponent>
          
    </div>
  )
}

export default Hoc