import axios from 'axios';
import React, { useState } from 'react'

const AddProduct = () => {

const [data,setData] = useState({
    name:"",
    price:"",
    description:"",
});    

const handleChange = (e) =>{
setData({...data,[e.target.name]: e.target.value});
}    

const handleClick = (e) =>{
e.preventDefault();
try {
    let result = axios({
        url:``,
        method:"",
        data:data,
    })
} catch (error) {
    console.log(error);
}
}

  return (
    <div className='bg-blue-100 w-[30rem]'>
        <form action="">
            <div>
                <h1 className='text-blue-900 font-bold text-[1.5rem] flex justify-center'>ADD PRODUCT</h1>
            </div>
            <div className='ml-[30rem]'>
                <input type="text" name='name' onChange={handleChange} placeholder='Enter Name' className='bg-white'/><br />
                <input type="number" name='price' onChange={handleChange} placeholder='Enter price' className='bg-white mt-[1rem]'/><br />
                <textarea name="description" onChange={handleChange} id="" placeholder='Enter Description' className='bg-white mt-[1rem]'></textarea>
                <input type="text" />
            </div>
            <div>
                <button onClick={handleClick} className='bg-green-700 text-white w-[10rem] h-[2rem] font-bold text-[1.2rem]'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default AddProduct