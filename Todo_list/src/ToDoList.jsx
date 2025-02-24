import React, { createContext, useState } from "react";
import AddList from "./AddList";

export const Mycontext = createContext();
const TODoList = () => {
  const [pop, setPop] = useState(false);
  const [data, setdata] = useState([
    {
      title: "hello",
      description: "hello everyone how are you. i am fine and how aru",
    },
  ]);

  return (
    <Mycontext.Provider value={{ data, setdata, setPop }}>
      <div className="bg-gray-200 h-screen">
        <h1>.</h1>
        <div>
          <h1 className="bg-white m-[1rem] rounded-[20px] h-[5rem] text-[3rem] font-bold pl-[33rem]">
            Todo List
          </h1>
        </div>
        <div className="flex justify-between">
          <div className="bg-white flex justify-between w-[30rem] ml-[1.5rem] border-[1px]">
            <input type="text" className="w-[30rem]" />
            <img
              src="https://img.icons8.com/?size=100&id=59878&format=png&color=000000"
              alt=""
              className="h-[2rem] bg-orange-300 p-1 cursor-pointer"
            />
          </div>
          <div className="bg-green-600 mr-[10rem] w-[12rem] pl-[5rem] pt-[0.3rem] font-bold text-white cursor-pointer hover:bg-green-800">
            <button
              onClick={() => {
                setPop(true);
              }}
              className="cursor-pointer"
            >
              Add
            </button>
          </div>
        </div>
        <div className="absolute top-[2rem]">{pop ? <AddList /> : null}</div>
        <div className="h-[25rem] bg-white mt-[2.5rem] ml-[1.5rem] mr-[1.5rem] rounded-2xl">
          <div className=" ml-[1.5rem] grid grid-cols-3">
            {data.map((item, i) => {
              return (
                <div className="bg-gray-100 mt-[2rem] h-auto w-[25rem]">
                  <h1 className="text-[2rem] font-bold ml-[10rem]">
                    {item.title}
                  </h1>
                  <p className="ml-[1.5rem]">{item.description}</p>
                  <button className="bg-blue-400 h-[2rem] w-[6rem] font-bold text-white cursor-pointer mt-[7rem]">
                    Details
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Mycontext.Provider>
  );
};

export default TODoList;
