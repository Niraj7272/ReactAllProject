import axios from 'axios';
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Login = () => {

  const navigate= useNavigate()

  const [loginUser, setLoginUser] = useState({
    email:"",
    password: "",
  });

  const handleChange = (e) => {
    setLoginUser({...loginUser,[e.target.name]: e.target.value});
  }

  const handleClick = async(e) => {
    e.preventDefault();
    try {
      let result = await axios.post("http://localhost:2222/login",loginUser);
      if(result.data.status===999){
       return toast.error(result.data.message)
      }
      toast.success(result.data.message)
      navigate('/dashboard')
    } catch (error) {
      toast.error("Cannot connect to database");
      console.log(error);
    }
   
  }

  return (
    <div className='bg-gray-300 h-[32rem] w-[30rem] ml-[27rem] m-[2rem] rounded-2xl shadow-2xl'>
      <h1 className='font-bold text-[2rem] text-gray-700 ml-[12rem] m-[1rem] pt-[1.5rem]'>Login</h1>
      <div className='mt-[3rem]'>
        <input type="email" name='email' onChange={handleChange} placeholder='Email' className='border-1 border-gray-500 h-[2.3rem] w-[25rem] ml-[2.5rem] rounded-2xl pl-[2rem]'/><br /><br />
        <input type="password" name='password' onChange={handleChange} placeholder='Password' className='border-1 border-gray-500 h-[2.3rem] w-[25rem] ml-[2.5rem] rounded-2xl pl-[2rem]'/><br /><br />
        <h1 className='text-blue-500 ml-[12rem] font-semibold'><a href="#">Forgot Password?</a></h1><br />
        <button  onClick={handleClick} className='border-1 border-gray-500 h-[2.3rem] w-[25rem] ml-[2.5rem] rounded-2xl pl-[2rem] font-bold bg-blue-500 text-white'>Login</button><br />
        <div className='flex ml-[2.5rem] mt-[1rem]'>
          <p className='text-gray-600'>Don't have an account?</p><NavLink to="/signUp" className='text-blue-500'>Sign Up</NavLink>
        </div>
        <div className='flex mt-[1.5rem]'>
            <hr className='w-[10rem] text-gray-500 ml-[2.5rem]'/>
            <h1 className='ml-[1.5rem] text-gray-600'>OR</h1>
            <hr className='w-[10rem] text-gray-500 ml-[1.5rem]'/>
        </div>
        <div className='mt-[1.5rem]'>
        <button className='border-2 border-gray-500 h-[2.3rem] w-[25rem] ml-[2.5rem] rounded-2xl pl-[2rem] font-bold bg-white '>Login with Google</button><br /><br />

        </div>
      </div>
    </div>
  )
}

export default Login