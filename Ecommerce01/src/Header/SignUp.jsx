import React from 'react'
import { NavLink } from 'react-router-dom'

const SignUp = () => {
  return (
    <div>
    <div className='bg-amber-100 m-[3rem] h-[35rem] w-[30rem] ml-[26rem]'>
      <form action="">
        <h1 className='font-bold ml-[10.5rem] text-[2rem] pt-[1.5rem]'>SIGN UP</h1>
        <div className='mt-[1.5rem]'>
          <input type="text" placeholder='Enter User name' className='bg-white m-[0.5rem] h-[3rem] w-[23rem] ml-[3.4rem] rounded-[10px]'/><br />
          <input type="text" placeholder='Enter Email' className='bg-white m-[0.5rem] h-[3rem] w-[23rem] ml-[3.4rem] rounded-[10px]' />
          <input type="text" placeholder='Enter Address' className='bg-white m-[0.5rem]  h-[3rem] w-[23rem] ml-[3.4rem] rounded-[10px]' />
          <input type="text" placeholder='Enter password' className='bg-white m-[0.5rem] h-[3rem] w-[23rem] ml-[3.4rem] rounded-[10px]' />
          <input type="text" placeholder='Enter Conform password' className='bg-white m-[0.5rem]  h-[3rem] w-[23rem] ml-[3.4rem] rounded-[10px]' />
        </div>
        <div className='bg-green-500 m-[1rem] h-[3rem] w-[23rem] ml-[3.4rem] rounded-[10px]'>
          <button className='ml-[9rem] mt-[0.7rem] font-bold text-[1.2rem] cursor-pointer'>Sign Up</button>
        </div>
        <div>
          <p  className='ml-[9rem]'>Have An Account <NavLink to="/login" className="text-blue-600"> Login</NavLink></p>
        </div>
      </form>
    </div>
    </div>
  )
}

export default SignUp