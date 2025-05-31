import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { data, NavLink } from 'react-router-dom'

const Dashboard = () => {

    const [data, setData] = useState([]);

    // read User
    const GetUser = async() => {
        try {
            let result = await axios({
                url:"http://localhost:2222/read_user",
                method:"get",
            });
            console.log(result.data);
            setData(result.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        GetUser();
    },[])

  return (
    <div className='bg-white h-screen w-screen flex'>
        <div className='bg-blue-900 opacity-70 h-screen w-[10rem] '>
            <div className='flex p-[2.5rem]'>
                <h1 className='text-orange-500 font-bold text-[1.5rem]'>E</h1>
                <h1 className='text-white font-bold text-[1.5rem]'>Mart</h1>
            </div>
            <div className='text-white font-semibold ml-[2rem]'>
                <h1 className='font-bold text-[1.1rem]'>Menu</h1>
                <div className='mt-[1.3rem]'>
                    <h1><NavLink to="/dashboard">Dashboard</NavLink></h1>
                    <h1 className='mt-[1.5rem]'><NavLink to="/product" className=''>Product</NavLink></h1>
                    <h1 className='mt-[1.5rem] bg-gray-600 p-[0.5rem]'><NavLink to="/costomer">Customer</NavLink></h1>
                    <h1 className='mt-[1.5rem]'><NavLink to="/order">Order</NavLink></h1>
                    <h1 className='mt-[1.5rem]'><NavLink to="/category">Category</NavLink></h1>
                    <h1 className='mt-[1.5rem]'><NavLink to="/message">Message</NavLink></h1>
                    <h1 className='mt-[1.5rem]'><NavLink to="/transaction">Transaction</NavLink></h1>
                </div>
            </div>
        </div>

        <div className=''>
        <div className='flex'>
            <div>
                <input type="text" placeholder='Search' className=' bg-gray-200 mt-[3rem] h-[3rem] w-[45rem] rounded-2xl ml-[2rem] pl-[2rem] font-semibold' />
            </div>
            <div>
                <img src="" alt="" className=' bg-gray-200 mt-[3rem] h-[3rem] w-[3rem] rounded-2xl ml-[2rem] pl-[2rem]' />
            </div>
            <div>
                <img src="" alt="" className=' bg-gray-200 mt-[3rem] h-[3rem] w-[3rem] rounded-2xl ml-[2rem] pl-[2rem]' />
            </div>
            <div>
                <NavLink>
                    <h1 className=' bg-gray-200 mt-[3rem] h-[3rem] w-[10rem] rounded-2xl ml-[2rem] pl-[3rem] pt-[0.7rem] font-bold text-gray-600'>Log Out</h1>
                </NavLink>
            </div>
        </div>
        <div className='bg-gray-200 h-[26rem] w-[67rem] ml-[2rem] mt-[3rem] pt-[1rem]'>
            <div className='bg-white h-[2.5rem] mt-[1rem] w-[63rem] ml-[2rem] rounded-2xl'>
                <h1 className='text-blue-900 opacity-70 font-bold text-[1.5rem] pl-[30rem] '>Customer List</h1>
            </div>
            <div className='bg-white mt-[2rem] h-auto w-[63rem] ml-[2rem] pl-[3rem] pt-[1rem]'>
                <table>
                    <thead className='text-gray-500'>
                        <tr>
                        <th>SN</th>
                        <th className='pl-[10rem]'>Name</th>
                        <th className='pl-[10rem]'>Email</th>
                        <th className='pl-[10rem]'>Action</th>
                        </tr>
                    </thead>
                    {data.map((item,i)=>{
                        return(
                    <tbody>
                        <tr>
                        <td className='pt-[1.5rem] pl-[0.5rem]'>{i+1}</td>
                        <td className='pt-[1.5rem] pl-[7rem]'>{item.name}</td>
                        <td className='pt-[1.5rem] pl-[10rem]'>{item.email}</td>
                        <td className='pt-[1.5rem] pl-[10rem]'>Delete|Update</td>
                        </tr>
                    </tbody>
                    );
                })}
                </table>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Dashboard