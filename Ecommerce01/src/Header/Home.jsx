import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='relative'>
      <img src="src/assets/menfashion.jpg" alt="" className='h-full w-full'/>
      <div className='bg-gray-900 text-[1.5rem] text-white absolute top-[22.6rem] left-[46rem] w-[13rem] h-[3rem] pl-[3rem] font-bold'>
        <NavLink to="/shop">Shop Now</NavLink>
      </div>
      <div className='absolute top-0 right-0'>
        <img src="src/assets/images.jpg" alt="" className='h-[40rem]' />
      </div>
      <div className='bg-white absolute top-[40rem] left-[61.5rem]'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio reiciendis, inventore eligendi illo, voluptate atque impedit quod quae saepe numquam corrupti? Odit quae mollitia maiores harum atque nostrum at accusamus.</p>
      </div>
    </div>
  )
}

export default Home