import React from 'react'

const Frontpage = () => {
  return (
    <div>
        <div>
            <h1 className='text-white font-bold bg-blue-300 pl-[3rem]'>ALL PRODUCTS</h1>
        </div>
        <div className='bg-gray-200 h-screen'>
            <div className='bg-white h-[20rem] w-[15rem] ml-[1rem] mt-[1rem]'>
                <img src="./public/50-ultra-sensual-eau-de-parfum-wild-stone-men-original-imafrbzu8xgyfhkg.webp" alt="" className='h-[15rem]'/>
                <h1 className='flex justify-center mt-[0.5rem] font-bold text-[1.4rem]'>Perfume</h1>
                <h1 className='ml-[2rem] text-orange-400'>Rs.1000</h1>
            </div>
        </div>
    </div>
  )
}

export default Frontpage