import React from "react";
import { NavLink } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-pink-100 mt-[5rem]">
      <div className="flex p-10 pt-[3rem]">
        <h1 className="text-gray-800 font-bold text-2xl">Subscribe to our newsletter</h1>
        <input type="email" placeholder="Your email address..." className="bg-white h-[3rem] w-[30rem] pl-[2rem] ml-[15rem]"/>
        <button className="bg-gray-600 text-white ml-[2rem] w-[10rem]">SUBSCRIBE</button>
      </div><hr className="text-gray-400"/>
      <div className=" h-[20rem] w-screen flex justify-between pt-[3rem] text-[1.3rem] pr-[5rem]">
        <div className="ml-[5rem]">
          <h1 className="font-bold text-black ">ABOUT</h1>
          <p className="w-[20rem] text-[1rem] text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            temporibus necessitatibus autem dolorum obcaecati, doloremque
            mollitia nesciunt provident debitis magnam, consequatur aperiam
            nobis. Rerum quisquam modi at eum consequuntur id.
          </p>
        </div>
        <div>
          <h1 className="font-bold text-black ">CATEGORIES</h1>
          <div className="text-[1rem]  text-gray-800">
            <li>
              <NavLink>Clothing</NavLink>
            </li>
            <li>
              <NavLink>Footware</NavLink>
            </li>
            <li>
              <NavLink>Handbag</NavLink>
            </li>
            <li>
              <NavLink>Jwellery</NavLink>
            </li>
            <li>
              <NavLink>Belt</NavLink>
            </li>
            <li>
              <NavLink>Jense</NavLink>
            </li>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-black ">INFORMATIONS</h1>
          <div className="text-[1rem]  text-gray-800">
            <li>
              <NavLink>About Us</NavLink>
            </li>
            <li>
              <NavLink>Contact Us</NavLink>
            </li>
            <li>
              <NavLink>Terms & Condition</NavLink>
            </li>
            <li>
              <NavLink>Return & Exchange</NavLink>
            </li>
            <li>
              <NavLink>Shipping & Delivery</NavLink>
            </li>
            <li>
              <NavLink>Private Policy</NavLink>
            </li>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-black ">CONTACT</h1>
          <div className="text-[1rem]  text-gray-800">
            <h1>Address: Duhabi-9, Sunsari Nepal</h1>
            <br />
            <hr />
            <div className="flex">
              <h1><FaPhoneAlt /></h1>
              <h1>Phone : 9814372723</h1>
            </div>
            <div className="flex">
              <h1><MdEmail /></h1>
               <h1>Email : nc72723@gmail.com</h1>
            </div>
          </div>
        </div>
      </div><hr className="text-gray-400"/>
      <div className=" flex h-[6rem] justify-center items-center text-center">
        <p className="text-gray-600 flex justify-center">
          Copyright&copy; 2082 All rights reserved | Design By Niraj Chaudhary
        </p>
      </div>
    </div>
  );
};

export default Footer;
