import React from 'react'
import { NavLink } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='bg-gray-300 h-[33rem] w-[30rem] ml-[27rem] m-[1rem] rounded-2xl shadow-2xl'>
      <h1 className='font-bold text-[2rem] text-gray-700 ml-[12rem]  pt-[0.5rem]'>Sign Up</h1>
      <div className='mt-[1.5rem]'>
        <input type="text" placeholder='Name' className='border-1 border-gray-500 h-[2.3rem] w-[25rem] ml-[2.5rem] rounded-2xl pl-[2rem]'/><br /><br />
        <input type="email" placeholder='Email' className='border-1 border-gray-500 h-[2.3rem] w-[25rem] ml-[2.5rem] rounded-2xl pl-[2rem]'/><br /><br />
        <input type="password" placeholder='Password' className='border-1 border-gray-500 h-[2.3rem] w-[25rem] ml-[2.5rem] rounded-2xl pl-[2rem]'/><br /><br />
        <input type="password" placeholder='Conform Password' className='border-1 border-gray-500 h-[2.3rem] w-[25rem] ml-[2.5rem] rounded-2xl pl-[2rem]'/><br /><br />
        <button className='border-1 border-gray-500 h-[2.3rem] w-[25rem] ml-[2.5rem] rounded-2xl pl-[2rem] font-bold bg-blue-500 text-white'>Sign Up</button><br />
        <div className='flex ml-[2.5rem] mt-[1rem]'>
          <p className='text-gray-600'>Already have an account?</p><NavLink to="/login" className='text-blue-500'>Login</NavLink>
        </div>
        <div className='flex mt-[1.5rem]'>
            <hr className='w-[10rem] text-gray-500 ml-[2.5rem]'/>
            <h1 className='ml-[1.5rem] text-gray-600'>OR</h1>
            <hr className='w-[10rem] text-gray-500 ml-[1.5rem]'/>
        </div>
        <div className='mt-[1.5rem]'>
        <button className='border-2 border-gray-500 h-[2.3rem] w-[25rem] ml-[2.5rem] rounded-2xl pl-[2rem] font-bold bg-white '>Sign Up with Google</button><br /><br />

        </div>
      </div>
    </div>
  )
}

export default SignUp