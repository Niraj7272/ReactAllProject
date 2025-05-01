import React from 'react'

const AddProduct = () => {
  return (
    <div className='bg-gray-300 h-screen w-screen'>
        <div className='bg-white h-[35rem] w-[50rem] mt-[5rem] ml-[17rem]'>
                <h1 className='text-orange-600 font-bold text-[2rem] ml-[18rem] pt-[1rem]'>Add Product</h1>
            <div className='ml-[3rem] mt-[2rem] flex gap-[2rem]'>
                <div>
                    <label htmlFor="" className='text-[1.5rem] text-gray-700'>Product Title</label><br />
                    <input type="text" className='border-2 border-gray-400 h-[2.5rem] w-[21rem] pl-[2rem] rounded-[5px] mt-[0.6rem]' />
                </div>
                <div>
                    <label htmlFor="" className='text-[1.5rem] text-gray-700'>Price</label><br />
                    <input type="text" className='border-2 border-gray-400 h-[2.5rem] w-[21rem] pl-[2rem] rounded-[5px] mt-[0.6rem]' />
                </div>
            </div>
            <div className='ml-[3rem] mt-[1rem] flex gap-[2rem]'>
                <div>
                    <label htmlFor="" className='text-[1.5rem] text-gray-700'>Stock</label><br />
                    <input type="text" className='border-2 border-gray-400 h-[2.5rem] w-[21rem] pl-[2rem] rounded-[5px] mt-[0.6rem]' />
                </div>
                <div>
                    <label htmlFor="" className='text-[1.5rem] text-gray-700'>Category</label><br />
                    <input type="text" className='border-2 border-gray-400 h-[2.5rem] w-[21rem] pl-[2rem] rounded-[5px] mt-[0.6rem]' />
                </div>
            </div>
            <div className='ml-[3rem] mt-[1rem] flex gap-[2rem]'>
                <div>
                    <label htmlFor="" className='text-[1.5rem] text-gray-700'>Description</label><br />
                    <textarea name="" id="" className='border-2 border-gray-400 h-[5rem] w-[21rem] pl-[2rem] rounded-[5px] mt-[0.6rem]'></textarea>
                </div>
                <div>
                    <label htmlFor="" className='text-[1.5rem] text-gray-700'>Choose Image</label><br />
                    <input type="text" className='border-2 border-gray-400 h-[2.5rem] w-[21rem] pl-[2rem] rounded-[5px] mt-[0.6rem]' />
                </div>
            </div>
            <div>
                <button className=' h-[4rem] w-[15rem] rounded-[5px] mt-[2rem] ml-[32rem] bg-green-500 cursor-pointer font-bold text-white text-2xl'>Add</button>
            </div>

        </div>
    </div>
  )
}

export default AddProduct