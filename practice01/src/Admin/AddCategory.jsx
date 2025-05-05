import React, { useContext, useState } from 'react'
import axios from "axios";
import { MyContext } from '../Context/contextCreateandProvide';
import { toast } from 'react-toastify';


const AddCategory = () => {

    const {pop, setPop } = useContext(MyContext);
    const [data, setData] = useState({
        category_title: "",
    });

    const handleChange = (e)=>{
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleClick = async(e) =>{
        e.preventDefault();
        try {
            let result = await axios({
                url: "http://localhost:2222/add_category",
                method: "post",
                data: data,
            })
            toast.success(result.data.message);
            setPop(false);
        } catch (error) {
            console.log(error);
            alert("Data Inserted Failed");
        }
    }

  return (
        <div className='bg-white h-[22rem] w-[40rem] mt-[10rem]  ml-[12rem]'>
                <h1 onClick={() => { setPop(false);
          }} className='bg-gray-400 text-red-600 font-bold w-[30px] h-[30px] text-[1.2rem] pl-[6px] ml-[38rem] cursor-pointer'>X</h1>
                <h1 className='text-orange-600 font-bold text-[2rem] ml-[13rem]'>Add Category</h1>
            <div className='ml-[3rem] mt-[2rem] flex gap-[2rem]'>
                <div>
                    <label htmlFor="" className='text-[1.5rem] text-gray-700'>Category Title</label><br />
                    <input type="text" name="category_title" value={data.category_title} onChange= {handleChange} required className='border-2 border-gray-400 h-[2.5rem] w-[34rem] pl-[2rem] rounded-[5px] mt-[0.6rem]' />
                </div>
            </div>
            <div>
                <button onClick={handleClick} className=' h-[4rem] w-[15rem] rounded-[5px] mt-[4rem] ml-[22rem] bg-green-500 cursor-pointer font-bold text-white text-2xl'>Add</button>
            </div>

        </div>
  )
}

export default AddCategory