import React from "react";

const Detail = () => {
  return (
    <div className="bg-white h-screen w-screen flex">
      <div>
        <img
          src="src/assets/nikeairforce.jpeg"
          alt=""
          className="h-[30rem] pt-[3rem] pl-[5rem] p-[2rem] "
        />
      </div>
      <div className="mt-[4rem]">
        <h1 className="font-bold text-2xl text-gray-600">Nike Air Force</h1>
        <h2 className="font-bold text-2xl mt-[1rem] text-gray-500">
          Rs. 100000
        </h2>
        <select
          name=""
          id=""
          className="border-[2px] text-gray-400 mt-[1rem] w-[8rem]"
        >
          <option value="">Select Size</option>
          <option value="">M</option>
          <option value="">L</option>
          <option value="">XL</option>
          <option value="">XXL</option>
        </select>
        <br />
        <button className=" bg-orange-500 opacity-80 h-[2rem] w-[8rem] mt-[1rem] text-white font-semibold text-[0.9rem] cursor-pointer">
          ADD TO CART
        </button>
        <h1 className="text-gray-500 font-bold text-[1.2rem] mt-[3rem]">Product Details</h1>
        <p className="w-[30rem] mt-[1rem] text-gray-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque,
          repudiandae? Laborum, sunt nihil consectetur earum quod sequi rem
          consequatur dicta similique tempore libero esse fuga veritatis
          doloremque nemo! Dolor, soluta?
        </p>
      </div>
    </div>
  );
};

export default Detail;
