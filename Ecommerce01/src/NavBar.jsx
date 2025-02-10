import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='bg-yellow-400 flex justify-between h-[4rem]'>
        <div className='flex gap-[2rem] ml-[2rem] mt-[1rem] font-bold text-[1.2rem]'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/product">product</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </div>
        <div className='mr-[2rem] mt-[1rem] font-bold text-[1.2rem]'>
            <NavLink to="/login">Login</NavLink>
        </div>
    </div>
  )
}

export default NavBar