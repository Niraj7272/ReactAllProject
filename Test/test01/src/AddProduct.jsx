import axios from 'axios';
import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';
import { Mycontext } from './Shop';

const AddProduct = () => {
const {setViewPop} = useContext(Mycontext);
const [data,setData] = useState({
    name:"",
    price:"",
    description:"",
});    

const handleChange = (e) =>{
setData({...data,[e.target.name]: e.target.value});
}    

const handleClick = async(e) =>{
e.preventDefault();
try {
    let result = await axios({
        url:`http://localhost:1111/add-product`,
        method:"post",
        data:data,
    })
    // console.log(result);
    setData({
        name:"",
        price:"",
        description:""
    })
    toast.success(result.data.message);
} catch (error) {
    console.log(error);
}
}

  return (
    <div className='bg-blue-100 w-[30rem] h-[25rem] ml-[27rem] mt-[7rem] rounded-2xl'>
        <form action="">
            <div className='flex justify-between'>
                <h1 className='text-blue-900 font-bold text-[1.5rem]  ml-[10rem] pt-[2rem]'>ADD PRODUCT</h1>
                <p className='text-[1.3rem] font-bold text-red-600 mr-[0.5rem] cursor-pointer hover:text-red-900'
                  onClick={() => {
                    setViewPop(false);
                  }}
              >X</p>
            </div>
            <div className='ml-[3rem] pt-[2rem]'>
                <input type="text" name='name' onChange={handleChange} value={data.name} placeholder='Enter Name' className='bg-white h-[2.3rem] w-[24rem] pl-[10rem] rounded-2xl border-[1px] border-gray-300'/><br />
                <input type="number" name='price' onChange={handleChange} value={data.price} placeholder='Enter price' className='bg-white h-[2.3rem] w-[24rem] pl-[10rem] rounded-2xl mt-[1rem] border-[1px] border-gray-300'/><br />
                <textarea name="description" onChange={handleChange} id="" value={data.description} placeholder='Enter Description' className='bg-white h-[4rem] w-[24rem] pl-[9rem] rounded-2xl mt-[1rem] border-[1px] border-gray-300'></textarea>
                <input type="text" />
            </div>
            <div>
                <button onClick={handleClick} className='bg-green-700 text-white w-[24rem] h-[2rem] font-bold text-[1.2rem] ml-[3rem] rounded-2xl cursor-pointer hover:bg-green-600'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default AddProduct