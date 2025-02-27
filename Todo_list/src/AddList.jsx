import React, { useContext, useState } from "react";
import { Mycontext } from "./ToDoList";
import axios from "axios";
import { toast } from "react-toastify";

const AddList = ({ title, btn }) => {
  const { setPop, pop } = useContext(Mycontext);
  const [data, setData] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      let result = await axios({
        url: "http://localhost:4444/add-item",
        method: "post",
        data: data,
      });
      setPop(false);
      // console.log(result);
      toast.success(result.data.message);
      // alert("Data Inserted successfull!");
    } catch (error) {
      console.log(error);
      alert("Data Inserted Fail!");
    }
  };

  console.log(pop);

  return (
    <div className="bg-blue-100 h-[25rem] w-[27rem] ml-[30rem] mt-[8rem]">
      <div className="flex justify-between">
        <h1 className="font-bold text-[1.7rem] pl-[10rem] pt-[1.7rem]">
          {title}
        </h1>
        <h1
          className="bg-white h-[1.5rem] w-[1.5rem] pl-[0.3rem] text-[1rem] text-red-600 font-bold cursor-pointer hover:text-[1.2rem]"
          onClick={() => {
            setPop(false);
          }}
        >
          X
        </h1>
      </div>
      <div>
        {/* <input
            type="text"
            name="title"
            // value={data.title}
            onChange={handleChange}
            placeholder="Title"
            required
            className="border-[1px] m-[1rem] w-[23rem] h-[2rem] pl-[10rem] ml-[2rem]"
          /> */}
      
        
        {pop === "Add" ? (
          <input
            type="text"
            name="title"
            // value={data.title}
            onChange={handleChange}
            placeholder="Title"
            required
            className="border-[1px] m-[1rem] w-[23rem] h-[2rem] pl-[10rem] ml-[2rem]"
          />
        ) : (
          <input
            type="text"
            name="title"
            value="hello"
            // onChange={handleChange}

            placeholder="Title"
            required
            className="border-[1px] m-[1rem] w-[23rem] h-[2rem] pl-[10rem] ml-[2rem]"
          />
        )}
        <br />
        <textarea
          name="description"
          id=""
          cols="48"
          rows="5"
          value={data.description}
          onChange={handleChange}
          placeholder="Description"
          required
          className="border-[1px] ml-[2rem]"
        ></textarea>
      </div>
      <div>
        <button
          className="bg-green-400 ml-[2rem] w-[23rem] mt-[2rem] text-[1.5rem] cursor-pointer"
          onClick={handleClick}
        >
          {btn}
        </button>
      </div>
    </div>
  );
};

export default AddList;
