import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Dashboard from './Admin/Dashboard'
import AddProduct from './Admin/AddProduct'
import Product from './Admin/product'
import AddCategory from './Admin/AddCategory'
import Category from './Admin/Category'
import Customer from './Admin/Customer'
import Footer from './Pages/Footer'
import Detail from './Pages/Detail'

const MyRoute = () => {

    const Layout = () =>{
        return(
            <div>
                <Navbar/>
                <Outlet/>
            </div>
        )
    }

    const routeStart = createBrowserRouter(
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
            },
            {
                path:"/signUp",
                element:<SignUp/>
            },
            {
                path:"/dashboard",
                element:<Dashboard/>
            },
            {
                path:"/customer",
                element:<Customer/>
            },
            {
                path:"/product",
                element:<Product/>
            },
            {
                path: "/category",
                element:<Category/>
            },
            {
                path: "/Detail",
                element:<Detail/>
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

