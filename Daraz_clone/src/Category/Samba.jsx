import React from 'react'
import { NavLink } from 'react-router-dom'

const Samba = () => {
  return (
    <div className='bg-gray-100'>
      <div className='bg-white mt-[0.6rem] pl-[4rem] text-blue-700 pb-[0.5rem]'>
      <select name="" id="">
        <option value="">Category</option>
        <option value="">Women's Fashion</option>
        <option value="">Health products</option>
        <option value="">Baby Care</option>
        <option value="">Food items</option>
      </select>
      </div>
      <div className='text-blue-500 bg-gray-100 mb-[0.5rem] mt-[0.5rem] pl-[4rem]'>
        <NavLink to="#">TV,Audio / Video Gaming</NavLink>{">"}
        <NavLink to="#">TV,Audio / Video Gaming</NavLink>{">"}
        <NavLink to="#">TV,Audio / Video Gaming</NavLink>
      </div>
      <div className='flex justify-between bg-white ml-[4rem] mr-[4rem]'>
        <div className='ml-[2rem] pl-[2rem] pb-[3rem]'>
          <img src="src/assets/7ba5486ce9bde718f24d3738b64c677a.jpg_400x400q80.jpg_.webp" alt="" />
        </div>
        <div className=''>
          <h1>Airpods Bluetooth Charging Case Pure Sound Super Premium Quality</h1>
        </div>
        <div className='bg-gray-50'>
          <h1>Delivery Options </h1>
        </div>
      </div>
    </div>
  )
}

export default Samba
