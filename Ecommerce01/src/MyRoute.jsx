import React from 'react'
import { BrowserRouter, createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Header/Home'
import Product from './Header/Product'
import About from './Header/About'
import Contact from './Header/Contact'
import Login from './Header/Login'

const MyRoute = () => {
    const Layout = () =>{
        return(
            <div>
                <NavBar/>
                <Outlet/>
            </div>
        )
    }

    const routerStart = createBrowserRouter(
        [
            {
                path:"/",
                element:<Layout/>,
                children:[
                    {
                        path:"/",
                        element:<Home/>
                    },
                    {
                        path:"/product",
                        element:<Product/>
                    },
                    {
                        path:"/about",
                        element:<About/>
                    },
                    {
                        path:"/contact",
                        element:<Contact/>
                    }
                ]
            },
            {
                path:"/login",
                element:<Login/>
            }
        ]
    )
  return (
    <div>
        <RouterProvider router={routerStart}/>
    </div>
  )
}

export default MyRoute