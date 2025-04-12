import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-yellow-400 h-[4rem] text-blue-800 font-bold'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        <NavLink to="/login">Login</NavLink>
    </div>
  )
}

export default Navbar