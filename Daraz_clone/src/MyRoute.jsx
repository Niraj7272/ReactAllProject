import React from 'react'
import NavBar from './NavBar'
import {BrowserRouter,createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import SaveMoreOnApp from './Pages/SaveMoreOnApp'
import BecomeASeller from './Pages/BecomeASeller'
import HelpAndSupport from './Pages/HelpAndSupport'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import MakeUp from './Category/MakeUp'
import Footer from './Footer'


const MyRoute = () => {
    const Layout = () =>{
        return(
            <div>
                <NavBar/>
                <Outlet/>
                <Footer/>
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
                        path:"/saveMoreOnApp",
                        element:<SaveMoreOnApp/>
                    },
                    {
                        path:"/becomeASeller",
                        element:<BecomeASeller/>
                    },
                    {
                        path:"/helpAndSupport",
                        element:<HelpAndSupport/>
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
                        path:"/makeUp",
                        element:<MakeUp/>
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