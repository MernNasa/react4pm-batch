import React from 'react'
import Navbar from './pages/Navbar'
import About from './pages/About'
import Project from './pages/Project'
import Dashboard from './pages/Dashboard'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'

const RoutingConcept = () => {
    const routes=createBrowserRouter([
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/about",
            element:<About/>
        },
        
    ])
  return <RouterProvider router={routes}/>
}

export default RoutingConcept