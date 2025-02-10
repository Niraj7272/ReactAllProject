import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div>
    <div className='bg-amber-100 m-[6rem] h-[27rem] w-[30rem] ml-[26rem]'>
      <form action="">
        <h1 className='font-bold ml-[12rem] text-[2rem] pt-[1.5rem]'>LOGIN</h1>
        <div className='mt-[1.5rem]'>
          <input type="text" placeholder='Enter User name' className='bg-white m-[1rem] h-[3rem] w-[23rem] ml-[3.4rem] rounded-[10px]'/><br />
          <input type="text" placeholder='Enter Password' className='bg-white m-[1rem] h-[3rem] w-[23rem] ml-[3.4rem] rounded-[10px]' />
        </div>
        <div className='bg-green-500 m-[1rem] h-[3rem] w-[23rem] ml-[3.4rem] rounded-[10px]'>
          <button className='ml-[10rem] mt-[0.7rem] font-bold text-[1.2rem] cursor-pointer'>Login</button>
        </div>
        <div>
          <NavLink to="/forgetPassword"  className='ml-[10rem] text-blue-600'>Forget password</NavLink><br />
          <p  className='ml-[7rem]'>Don't Have An Account <NavLink to="/signUp" className="text-blue-600"> SignUp</NavLink></p>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Login