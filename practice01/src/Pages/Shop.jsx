import React from 'react'

const Shop = () => {
  return (
    <div className='bg-gray-200 h-screen'>
        <div className='flex ml-[1rem]'>
            <h1 className='bg-white mt-[1rem] pl-[2rem] pt-[0.6rem] font-bold h-[2.5rem] w-[20rem]'>All Products</h1>
        </div>
        <div className='m-[1rem]'>
            <img src="src/assets/nikeairforce.jpeg" alt="" />
            <h1 className='font-bold ml-[2rem] mt-[0.5rem]'>Nike Air Force</h1>
            <h1 className='font-bold ml-[4rem]'>*****</h1>
        </div>
    </div>
  )
}

export default Shop