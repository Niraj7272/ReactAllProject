import React from 'react'
import { NavLink } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='bg-gray-300 h-screen w-screen flex'>
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
                    <h1 className='mt-[1.5rem]'><NavLink to="/costomer">Costomer</NavLink></h1>
                    <h1 className='mt-[1.5rem]'><NavLink to="/order">Order</NavLink></h1>
                    <h1 className='mt-[1.5rem]'><NavLink to="/message">Message</NavLink></h1>
                    <h1 className='mt-[1.5rem]'><NavLink to="/transaction">Transaction</NavLink></h1>
                </div>
            </div>
        </div>

        <div>

        </div>
    </div>
  )
}

export default Dashboard