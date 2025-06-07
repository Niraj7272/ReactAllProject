import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="relative">
        <img
          src="src/assets/INEPnmz.jpg"
          alt=""
          className="h-[35rem] ml-[22rem]"
        />
      </div>
      <div className="flex absolute mt-[-28rem] gap-[7rem]">
      <div className="  text-white bg-gray-500 h-[23rem] w-[26rem] ml-[10rem] p-10">
        <h1 className="text-gray-800 font-bold text-[2rem] mb-[1rem]">
          Contact Me
        </h1>
        <p className="text-[1.3rem]">
          I Will read all my emails one by one and i'm not going to let them
          missed.Send me any message you want and i will reply that.
        </p>
        <p className="mt-[3rem]">
          I need your Name and Email Address but you won't receive anything but
          your reply only.
        </p>
      </div>
      <div className="">
        <h1 className="text-white font-bold text-[1.7rem] mt-[3rem]">Send Me A Message</h1>
        <div className="flex gap-8">
          <input type="text" placeholder="First Name" className="bg-transparent text-white h-[3rem] w-[14rem] border-[2px] border-red-600" />
          <input
            type="email"
            placeholder="Email Address"
            className="bg-transparent text-white h-[3rem] w-[14rem] border-[2px] border-red-600"
          />
        </div>
        <input type="text" placeholder="Subject" className="bg-transparent h-[3rem] mt-[1rem] w-[30rem] border-[2px] border-red-600 text-white " />
        <br />
        <textarea
          name=""
          id=""
          placeholder="Message"
          className="bg-transparent mt-[1rem] border-[2px] border-red-600 h-[9rem] w-[30rem] text-white"
        ></textarea>
        <br />
        <button className="bg-orange-500 h-[2.5rem] mt-[1rem] w-[13rem] text-white ml-[17rem]">SEND MESSAGE</button>
      </div>
      </div>
      {/* <div className="bg-red-300 h-screen w-[83rem] flex">
        <div className="bg-gray-200 h-[20rem] w-[30rem] ml-[10rem]">
          
        </div>
        <div className="ml-[3rem]">
          <h1>Send Me A Message</h1>
          <div className="flex gap-2">
            <input type="text" placeholder="First Name" className="bg-gray-100"/>
            <input type="email" placeholder="Email Address" className="bg-gray-100" />
          </div>
          <input type="text" placeholder="Subject" className="bg-gray-100"/><br />
          <textarea name="" id="" placeholder="Message" className="bg-gray-100"></textarea><br />
          <button className="bg-orange-500">SEND MESSAGE</button>
        </div>
      </div> */}
    </div>
  );
};

export default Contact;
