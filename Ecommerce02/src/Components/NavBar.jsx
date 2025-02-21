import React from 'react'
import Logo from "../assets/logo.png"


const NavBar = () => {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900'>
        {/* upper Navbar */}
        <div className='bg-orange-200 py-1'>
            <div className='container flex justify-between items-center'>
                <div>
                    <a href="#" className='font-bold text-2xl sm:text-3xl flex gap-2'>
                        <img src={Logo} alt="Logo" className='w-13'/>
                        Shopsy
                    </a>
                </div>
                {/* search bar and order button */}
                <div>
                    <div className='group'>
                        <input type="text" 
                        placeholder='Search' 
                        className=' w-[200px] sm:w-[200px]
                        group-hover:w-[300px] transition-all 
                        duration-300 rounded-full border 
                        border-gray-300 px-2 py-1
                         focus:outline-none focus:border-1 
                         focus:border-orange-600 bg-white relative'
                          />
                          <div className=' absolute top-[0.9rem] left-[78rem] h-[2rem] bg-yellow-300 pt-[0.3rem] w-[3rem] pl-[1rem] rounded-2xl cursor-pointer border-[1px] border-gray-500'>
                                <img src="https://img.icons8.com/?size=100&id=59878&format=png&color=000000" alt="" className='h-[1.4rem] group-hover' />
                          </div>
                    </div>
                </div>
            </div>
        </div>
        {/* lower Navbar */}
        <div></div>
    </div>
  )
}

export default NavBar