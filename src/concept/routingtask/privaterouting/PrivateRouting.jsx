import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRouting = ({children}) => {
    // logic for private routing
    const token=JSON.parse(localStorage.getItem("jwtToken"))

  return token ? children : <Navigate to="/login"/>
}

export default PrivateRouting