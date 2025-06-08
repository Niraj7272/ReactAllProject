import React from "react";
import Footer from "./Footer";
import { IoCall } from "react-icons/io5";
import { FaRegSquareFull } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="bg-white h-[77rem]">
      <div className="relative">
        <img
          src="src/assets/INEPnmz.jpg"
          alt=""
          className="h-[34.5rem] ml-[22rem]"
        />
      </div>
      <div className="flex absolute mt-[-28rem] gap-[7rem]">
        <div className="  text-white bg-gray-200  h-[23rem] w-[26rem] ml-[10rem] p-10 relative">
          <h1 className="text-gray-800 font-bold text-[2rem] mb-[1rem]">
            Contact Me
          </h1>
          <p className="text-[1.3rem] text-gray-700">
            I Will read all my emails one by one and i'm not going to let them
            missed.Send me any message you want and i will reply that.
          </p>
          <p className="mt-[3rem] text-gray-700">
            I need your Name and Email Address but you won't receive anything
            but your reply only.
          </p>
        </div>
        <IoCall className="bg-orange-600 absolute ml-[8.4rem] h-[3rem] w-[3rem] p-[0.6rem] mt-[14.3rem] text-white" />
        <FaRegSquareFull className="bg-orange-600 absolute ml-[35rem] p-[1rem] mt-[3rem]"/>
        <FaRegSquareFull className="bg-white opacity-90 absolute ml-[34.4rem] p-[1rem] mt-[2.3rem]"/>
        <div className="">
          <h1 className="text-white font-bold text-[1.7rem]">
            Send Me A Message
          </h1>
          <div className="flex gap-8 mt-[3rem]">
            <input
              type="text"
              placeholder="First Name"
              className="bg-transparent backdrop-blur-[5PX] text-white h-[3rem] w-[14rem] border-[2px] border-white"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent backdrop-blur-[5PX] text-white h-[3rem] w-[14rem] border-[2px] border-white"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="bg-transparent  backdrop-blur-[5px] h-[3rem] mt-[1rem] w-[30rem] border-[2px] border-white text-white "
          />
          <br />
          <textarea
            name=""
            id=""
            placeholder="Message"
            className="bg-transparent backdrop-blur-[5px] mt-[1rem] border-[2px] border-white h-[9rem] w-[30rem] text-white"
          ></textarea>
          <br />
          <button className="bg-orange-500 h-[2.5rem] mt-[1rem] w-[13rem] text-white ml-[17rem] cursor-pointer">
            SEND MESSAGE
          </button>
        </div>
      </div>
      <div className="mt-[4rem] ml-[2rem]"><img src="src/assets/Screenshot 2025-06-08 140935.png" alt="" /></div>
      <div className="w-[80rem] ml-[2rem]">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
