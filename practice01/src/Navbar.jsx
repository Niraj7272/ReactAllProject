import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-yellow-400 h-[5rem] text-blue-800 font-bold'>
      <div className='flex'>
        <div className='flex ml-[2rem] mt-[1rem]  font-bold text-[1.5rem] bg-gray-500 h-[3rem] w-[7rem]'>
          <h1 className='text-orange-600 ml-[1.3rem]'>E</h1>
          <h1 className='text-white'>Mart</h1>
        </div>
        <div className='pl-[25rem] flex gap-[3rem] pt-[1.5rem]'>
            <div >
              <input type="text" placeholder='Search' className='border-[1px] text-gray-700 h-[2rem] w-[20rem] bg-white pl-[2rem]' />
            </div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
                <NavLink to="/login">Login</NavLink>
        </div>
      </div>  
    </div>
  )
}

export default Navbar