import React from 'react'

const WrapperComponent = ({children}) => {
  return (
    <div>
        {children}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, aliquam!</p>
    </div>
  )
}

export default WrapperComponent