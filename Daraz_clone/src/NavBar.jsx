import React from 'react'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='bg-orange-600'>
        <div className='text-white'>
            <NavLink to="/saveMoreOnApp">SAVE MORE ON APP</NavLink>
            <NavLink to="/becomeASeller">BECOME A SELLER</NavLink>
            <NavLink to="/helpAndSupport">HELP & SUPPORT</NavLink>
            <NavLink to="/login">LOGIN</NavLink>
            <NavLink to="/signUp">SIGN UP</NavLink>
            <NavLink >भाषा परिवर्तन</NavLink>
        </div>
        <img src="https://lzd-img-global.slatic.net/us/domino/3b870cb043c7f8a9741cbf66329e294e.png" alt="" className='h-[3rem]' />

    </div>
  )
}

export default NavBar