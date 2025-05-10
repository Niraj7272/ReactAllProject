import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='bg-gray-400 h-[20rem] w-screen flex justify-between pt-[3rem] text-[1.3rem] pr-[5rem]'>
        <div className='ml-[5rem]'>
          <h1 className='font-bold text-white '>ABOUT</h1>
          <p className='w-[20rem] text-[1rem] text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Inventore temporibus necessitatibus autem dolorum 
             obcaecati, doloremque mollitia nesciunt provident 
             debitis magnam, consequatur aperiam nobis. Rerum
              quisquam modi at eum consequuntur id.</p>
        </div>
        <div>
          <h1 className='font-bold text-white '>CATEGORIES</h1>
          <div className='text-[1rem]  text-gray-800'>
          <li><NavLink>Clothing</NavLink></li>
          <li><NavLink>Footware</NavLink></li>
          <li><NavLink>Handbag</NavLink></li>
          <li><NavLink>Jwellery</NavLink></li>
          <li><NavLink>Belt</NavLink></li>
          <li><NavLink>Jense</NavLink></li>
          </div>
        </div>
        <div>
          <h1 className='font-bold text-white '>INFORMATIONS</h1>
          <div className='text-[1rem]  text-gray-800'>
          <li><NavLink>About Us</NavLink></li>
          <li><NavLink>Contact Us</NavLink></li>
          <li><NavLink>Terms & Condition</NavLink></li>
          <li><NavLink>Return & Exchange</NavLink></li>
          <li><NavLink>Shipping & Delivery</NavLink></li>
          <li><NavLink>Private Policy</NavLink></li>
          </div>
        </div>
        <div>
          <h1 className='font-bold text-white '>CONTACT</h1>
          <div className='text-[1rem]  text-gray-800'>
            <h1>Address: Duhabi-9, Sunsari Nepal</h1><br />
            <hr />
            <h1>Phone : 9814372723</h1>
            <h1>Email : nc72723@gmail.com</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer