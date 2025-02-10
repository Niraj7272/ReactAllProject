import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='bg-yellow-400 flex justify-between h-[4rem]'>
      <div>
        <img src="src/assets/foreveryoung.jpg" alt="" className='h-[3rem] ml-[1rem] mt-[0.5rem]' />
      </div>
        <div className='flex gap-[2rem] ml-[2rem] mt-[1rem] font-bold text-[1.2rem]'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/product">product</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </div>
        <div>
          <input type="text" className='bg-white h-[2.4rem] w-[20rem] mt-[0.8rem] rounded-2xl' />
        </div>
        <div className='mr-[2rem] mt-[1rem] font-bold text-[1.2rem]'>
            <NavLink to="/login">Login</NavLink>
        </div>
    </div>
  )
}

export default NavBar