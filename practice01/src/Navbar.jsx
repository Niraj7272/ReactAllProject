import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-yellow-400 h-[5rem] text-blue-800 font-bold'>
      <div className='pl-[35rem] flex gap-[3rem] pt-[1.5rem] '>
        <div >
        <input type="text" placeholder='Search' className='border-[1px] text-gray-700 h-[2rem] w-[20rem] bg-white pl-[2rem]' />
        </div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>  
    </div>
  )
}

export default Navbar