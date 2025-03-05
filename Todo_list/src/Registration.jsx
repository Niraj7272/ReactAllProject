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
    <div className='bg-blue-200 h-[25rem] w-[30rem] ml-[27rem] mt-[8rem] rounded-2xl'>
        <h1 className='text-blue-900 text-[2rem] font-bold flex justify-center pt-[2rem]'>Sign Up</h1>
        <div className='ml-[2.5rem]'>
            <input type="text" value={user.name} placeholder='Enter Your Name' name='name' onChange={handleChange} className='bg-white w-[25rem] h-[2.5rem] mt-[2rem] pl-[8rem] rounded-2xl' /><br />
            <input type="email" value={user.email} placeholder='Enter Your Email' name='email' onChange={handleChange} className='bg-white w-[25rem] h-[2.5rem] mt-[1rem] pl-[8rem] rounded-2xl'/><br />
            <input type="password" value={user.password} placeholder='Enter Your Password' name='password' onChange={handleChange} className='bg-white w-[25rem] h-[2.5rem] mt-[1rem] pl-[8rem] rounded-2xl'/>
        </div>
        <div>
            <button className='bg-green-700 w-[25rem] h-[2.5rem] mt-[2rem] pl-[1rem] font-bold rounded-2xl ml-[2.5rem]' onClick={handleClick}>Sign Up</button>
        </div>
    </div>
  )
}

export default Registration