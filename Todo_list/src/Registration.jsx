import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'


const Registration = () => {
    const [user,setUser] = useState({
        name:"",
        email:"",
        password:"",
    })

    const handleChange = (e)=>{
        setUser({...user,[e.target.name]: e.target.value})
    }

    const handleClick = async(e) =>{
        e.preventDefault();
        try {
            let result = await axios.post(`http://localhost:4444/insert-user`,user)
            toast.success(result.data.message);
            setUser({
                name:"",
                email:"",
                password:"",
            })
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className='bg-gray-500 h-screen w-screen flex justify-center items-center'>
    <div className='bg-white h-[30rem] w-[25rem] shadow-black shadow-2xl'>
        <h1 className='text-black text-[2rem] font-bold flex justify-center mt-[2.5rem]'>Sign Up</h1>
        <div className='ml-[3rem] mt-[2rem]'>
            <input type="text" value={user.name} placeholder='Enter Your Name' name='name' onChange={handleChange} className='bg-white w-[19rem] h-[2.5rem] mt-[2rem] pl-[1rem] border-gray-500 border-[1px] rounded' /><br />
            <input type="email" value={user.email} placeholder='Enter Your Email' name='email' onChange={handleChange} className='bg-white w-[19rem] h-[2.5rem] mt-[1rem] pl-[1rem]  border-gray-500 border-[1px] rounded'/><br />
            <input type="password" value={user.password} placeholder='Enter Your Password' name='password' onChange={handleChange} className='bg-white w-[19rem] h-[2.5rem] mt-[1rem] pl-[1rem]  border-gray-500 border-[1px] rounded'/>
        </div>
        <div>
            <button className='bg-blue-600 w-[19rem] h-[2.5rem] mt-[4rem] pl-[1rem] font-bold rounded ml-[3rem]' onClick={handleClick}>Sign Up</button>
        </div>
    </div>
    </div>
  )
}

export default Registration