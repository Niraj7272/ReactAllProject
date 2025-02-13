import React from 'react'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='bg-orange-600 h-[8rem]'>
        <div className='text-white text-[0.8rem] ml-[40rem] pt-[0.4rem] flex gap-[2rem]'>
            <NavLink to="/saveMoreOnApp">SAVE MORE ON APP</NavLink>
            <NavLink to="/becomeASeller">BECOME A SELLER</NavLink>
            <NavLink to="/helpAndSupport">HELP & SUPPORT</NavLink>
            <NavLink to="/login">LOGIN</NavLink>
            <NavLink to="/signUp">SIGN UP</NavLink>
            <NavLink >भाषा परिवर्तन</NavLink>
        </div>
        <div className='flex'>
            <img src="https://lzd-img-global.slatic.net/us/domino/3b870cb043c7f8a9741cbf66329e294e.png" alt="" className='h-[3rem] ml-[5rem] mt-[1rem]' />
            <input type="text"  className='bg-white h-[2.5rem] w-[40rem] ml-[5rem] mt-[1rem]' />
        </div>
    </div>
  )
}

export default NavBar