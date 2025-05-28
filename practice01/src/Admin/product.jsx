import React, { createContext, useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import AddProduct from './AddProduct';
import { MyContext } from '../Context/contextCreateandProvide';

const Product= () => {

    const {pop, setPop} = useContext(MyContext);

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
                    <h1 className='mt-[1.5rem]'><NavLink to="/product" className='bg-gray-600 p-[0.5rem]'>Product</NavLink></h1>
                    <h1 className='mt-[1.5rem]'><NavLink to="/costomer">Costomer</NavLink></h1>
                    <h1 className='mt-[1.5rem]'><NavLink to="/order">Order</NavLink></h1>
                    <h1 className='mt-[1.5rem]'><NavLink to="/category">Category</NavLink></h1>
                    <h1 className='mt-[1.5rem]'><NavLink to="/message">Message</NavLink></h1>
                    <h1 className='mt-[1.5rem]'><NavLink to="/transaction">Transaction</NavLink></h1>
                </div>
            </div>
        </div>

        <div>
        <div className='flex relative'>
        <div className='absolute'>{pop ? <AddProduct/> : null}</div>
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
        
        <div className='bg-gray-200 h-[30rem] w-[70rem] mt-[2rem] ml-[2rem]'>
            <div className='flex'>
                <h1 className='font-bold text-[1.5rem] text-blue-800 pl-[25rem] mt-[1rem] bg-white h-[2.5rem] w-[55rem] rounded-2xl ml-[2rem]'>Product List</h1>
                <button onClick={()=>{setPop(true)}} className='bg-green-600 h-[2rem] mt-[1rem] w-[7.5rem] pl-[1rem] font-bold text-white cursor-pointer ml-[4rem]'>Add</button>
            </div>
            <div className='bg-white h-auto w-[66rem] m-[2rem] pl-[3rem] pt-[1rem]'>
                <table>
                    <thead className='text-gray-500'>
                        <tr>
                            <th>SN</th>
                            <th className='pl-[3rem]'>Name</th>
                            <th className='pl-[8rem]'>Price</th>
                            <th className='pl-[3rem]'>Stock</th>
                            <th className='pl-[3rem]'>Category</th>
                            <th className='pl-[5rem]'>Description</th>
                            <th className='pl-[7rem]'>Image</th>
                            <th className='pl-[6rem]'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Product