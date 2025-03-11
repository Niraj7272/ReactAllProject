import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const [loginUser,setLoginUser] = useState({
    email:"",
    password:"",
  });

  const handleChange = (e) =>{
    setLoginUser({...loginUser,[e.target.name]: e.target.value});
  }

  const handleClick = async(e) =>{
    e.preventDefault();
    try {
      let result = await axios.post("http://localhost:4444/login",loginUser);
      toast.success(result.data.message)
    } catch (error) {
      toast.error("connot connect to database");
    }
  }

  return (
    <div className="bg-gray-500 h-screen w-screen flex justify-center items-center">
      <div className="bg-white h-[25rem] w-[25rem] rounded-[20px] shadow-black shadow-2xl">
        <h1 className="text-black text-[2rem] font-bold flex justify-center mt-[2rem]">Login</h1>
        <div className="mt-[4rem] ml-[3rem]">
          <input type="email" placeholder="Enter Your Email" name="email" value={loginUser.email} onChange={handleChange} className="border-gray-500 border-[1px] w-[19rem] h-[2.5rem] pl-[1rem] rounded"/><br />
          <input type="password" placeholder="Enter Your Password" name="password" value={loginUser.password} onChange={handleChange} className="border-gray-500 border-[1px] w-[19rem] h-[2.5rem] mt-[1rem] pl-[1rem] rounded"/>
        </div>
        <div className="bg-green-500 border-[1px] border-gray-500 w-[19rem] h-[2.5rem] mt-[2.5rem] ml-[3rem] rounded flex justify-center font-semibold hover:bg-green-800" onClick={handleClick}>
            <button>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
