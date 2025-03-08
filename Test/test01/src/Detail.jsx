import React from "react";

const Detail = () => {
  return (
    <div className="bg-gray-400 h-screen w-screen">
      <h1 className="text-gray-900 font-bold text-[1.3rem] ml-[2rem] pt-[1rem]">Detail Page</h1>
      <div className="bg-white h-[25rem] w-[80rem] ml-[2rem] mt-[6rem] rounded absolute">
        <div className="flex">
        <img
          src="./public/50-ultra-sensual-eau-de-parfum-wild-stone-men-original-imafrbzu8xgyfhkg.webp"
          alt=""
          className="h-[25rem]"
        />
        <h1 className="text-[2rem] font-bold text-gray-500 bg-gray-200 ml-[2rem] mt-[2rem] rounded pl-[10rem] h-[4rem] w-[50rem] pt-[0.5rem]">Wild Stone</h1>
        </div>
        <p className="relative top-[-17rem] ml-[28rem] mr-[3rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde possimus excepturi asperiores earum vitae facere nobis quas repudiandae expedita eius vel veniam, qui quaerat officia suscipit aut, error, dolor dignissimos!</p>
        <div className="flex ">
        <button className="relative top-[-7rem] ml-[28rem]  bg-green-500 w-[90rem] h-[2rem] text-[1rem] font-bold text-white rounded-[5px] hover:bg-green-800 cursor-pointer">Edit</button>
        <button className="relative top-[-7rem]  ml-[25rem] mr-[3rem]  bg-red-500 w-[70rem] h-[2rem] text-[1rem] font-bold text-white rounded-[5px] hover:bg-red-800 cursor-pointer">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
