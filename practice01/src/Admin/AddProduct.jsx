import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../Context/contextCreateandProvide';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState({
        product_title: "",
        price: "",
        stock: "",
        category: "",
        description: "",
        image: "",
    });
    const {pop, setPop } = useContext(MyContext);

    const handleChange = (e) => {
        setValue({...value, [e.target.name]: e.target.value})
        // console.log({...data, [e.target.name]: e.target.value});
    }
    const handleFile = (e) => {
        setValue({...value, [e.target.name]: e.target.files[0]});
    }

    const handleClick = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        for (let key in value) {
            formData.append(key, value[key]);
        }
        try {
            let result = await axios({
                url:"http://localhost:2222/add_product",
                method: "post",
                data: formData,
                headers: {
                'Content-Type': 'multipart/form-data'
            }
            })
            toast.success(result.data.message);
            setPop(false);
        } catch (error) {
             console.log(error);
            alert("Data Inserted Failed");
        }
    }

    const GetProduct = async() => {
        try {
            let result = await axios({
                url: "http://localhost:2222/read_category",
                method: "get",
            })
            console.log(result.data);
            setData(result.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        GetProduct();
    },[]);

  return (
    <div className='bg-transparent backdrop-blur-sm h-screen w-screen fixed'>
        <div className='bg-white h-[35rem] w-[50rem] mt-[5rem]  ml-[7rem]'>
                <h1 onClick={() => { setPop(false);
          }} className='bg-gray-400 text-red-600 font-bold w-[30px] h-[30px] text-[1.2rem] pl-[6px] ml-[48rem] cursor-pointer'>X</h1>
                <h1 className='text-orange-600 font-bold text-[2rem] ml-[18rem]'>Add Product</h1>
            <div className='ml-[3rem] mt-[2rem] flex gap-[2rem]'>
                <div>
                    <label htmlFor="" className='text-[1.5rem] text-gray-700'>Product Title</label><br />
                    <input type="text" onChange={handleChange} name='product_title' className='border-2 border-gray-400 h-[2.5rem] w-[21rem] pl-[2rem] rounded-[5px] mt-[0.6rem]' />
                </div>
                <div>
                    <label htmlFor="" className='text-[1.5rem] text-gray-700'>Price</label><br />
                    <input type="text" onChange={handleChange} name='price' className='border-2 border-gray-400 h-[2.5rem] w-[21rem] pl-[2rem] rounded-[5px] mt-[0.6rem]' />
                </div>
            </div>
            <div className='ml-[3rem] mt-[1rem] flex gap-[2rem]'>
                <div>
                    <label htmlFor="" className='text-[1.5rem] text-gray-700'>Stock</label><br />
                    <input type="text" onChange={handleChange} name='stock' className='border-2 border-gray-400 h-[2.5rem] w-[21rem] pl-[2rem] rounded-[5px] mt-[0.6rem]' />
                </div>
                <div>
                    <label htmlFor="" className='text-[1.5rem] text-gray-700'>Category</label><br />
                    <select name="category" id="" onChange={handleChange} className='border-2 border-gray-400 h-[2.5rem] w-[21rem] pl-[2rem] rounded-[5px] mt-[0.6rem]'>
                        {data.map((cat,i)=> (
                             <option value="cat">{cat.category_title}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className='ml-[3rem] mt-[1rem] flex gap-[2rem]'>
                <div>
                    <label htmlFor="" className='text-[1.5rem] text-gray-700'>Description</label><br />
                    <textarea name="description" id="" onChange={handleChange} className='border-2 border-gray-400 h-[5rem] w-[21rem] pl-[2rem] rounded-[5px] mt-[0.6rem]'></textarea>
                </div>
                <div>
                    <label htmlFor="" className='text-[1.5rem] text-gray-700'>Choose Image</label><br />
                    <input type="file" name='image' onChange={handleFile} className='border-2 border-gray-400 h-[2.5rem] w-[21rem] pl-[2rem] rounded-[5px] mt-[0.6rem] cursor-pointer' />
                </div>
            </div>
            <div>
                <button onClick={handleClick} className=' h-[4rem] w-[15rem] rounded-[5px] mt-[2rem] ml-[32rem] bg-green-500 cursor-pointer font-bold text-white text-2xl'>Add</button>
            </div>

        </div>
    </div>
  )
}

export default AddProduct