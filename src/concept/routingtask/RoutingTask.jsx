import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import PrivateRouting from './privaterouting/PrivateRouting'

const RoutingTask = () => {
    const routes=createBrowserRouter([
        {
          path:"/",
          element:<Home/>,
          children:[
            {
              path:"/about",
              element:<About/>
            },
            {
              path:"/services",
              element:<Services/>
            },
            {
              path:"/contact",
              element:<Contact/>
            },
            {
              path:"/dashboard",
              element:<PrivateRouting>
                <Dashboard/>
              </PrivateRouting>,
              children:[
                {}
              ]
            }
          ]
        },
        {
          path:"/login",
          element:<Login/>
        }
    ])
  return (
    <RouterProvider router={routes}/>
  )
}

export default RoutingTask