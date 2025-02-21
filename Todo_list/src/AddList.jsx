import React, { useState } from "react";

const AddList = ({cross}) => {

  return (
    <div className="bg-blue-100 h-[25rem] w-[27rem] ml-[30rem] mt-[8rem]">
      <div className="flex justify-between">
        <h1 className="font-bold text-[1.7rem] pl-[10rem] pt-[1.7rem]">
          Add List
        </h1>
        <h1 className="bg-white h-[1.5rem] w-[1.5rem] pl-[0.3rem] text-[1rem] text-red-600 font-bold cursor-pointer hover:text-[1.2rem]" onClick={()=>{
          cross(false)
        }}>X</h1>
      </div>
        <div>
          <input
            type="text"
            placeholder="Title"
            className="border-[1px] m-[1rem] w-[23rem] h-[2rem] pl-[10rem] ml-[2rem]"
          />
          <br />
          <textarea
            name=""
            id=""
            cols="48"
            rows="5"
            placeholder="Description"
            className="border-[1px] ml-[2rem]"
          ></textarea>
        </div>
      <div>
        <button className="bg-green-400 ml-[2rem] w-[23rem] mt-[2rem] text-[1.5rem] cursor-pointer">
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddList;
