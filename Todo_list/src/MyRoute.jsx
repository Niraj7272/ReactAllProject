import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Login from './Login'
import TODoList from './ToDoList'

const MyRoute = () => {
    const Layout = () =>{
        return(
            <div>
                <Outlet/>
            </div>
        )
    }
const routeStart = createBrowserRouter(
    [
        {
            path:"/",
            element: <Layout/>,
            children:[
                {
                    path:"/",
                    element:<TODoList/>
                },
                {
                    path:"/login",
                    element:<Login/>
                }
            ]

        }
    ]
)


  return (
    <div>
        <RouterProvider router={routeStart}/>
    </div>
  )
}

export default MyRoute