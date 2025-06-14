import React from 'react'

const Shop = () => {
  return (
    <div className='bg-gray-200 h-screen'>
        <div className='flex ml-[1rem]'>
            <h1 className='bg-white mt-[1rem] pl-[2rem] pt-[0.6rem] font-bold h-[2.5rem] w-[20rem]'>All Products</h1>
        </div>
        <div className='m-[1rem] bg-gray-400 w-[17rem] h-[18rem] shadow-2xl shadow-black'>
            <img src="src/assets/nikeairforce.jpeg" alt="" />
            <h1 className='font-bold ml-[2rem] mt-[0.5rem]'>Nike Air Force</h1>
            <h1 className='font-bold ml-[4rem]'>*****</h1>
            <div className='flex gap-[2rem] ml-[1rem] text-white font-bold'>
                <button className='bg-blue-500 p-[0.3rem] h-[2rem] w-[6rem]'>Buy Now</button>
                <button className='bg-green-700 w-[7rem]'>View Detail</button>
            </div>
        </div>
    </div>
  )
}

export default Shop