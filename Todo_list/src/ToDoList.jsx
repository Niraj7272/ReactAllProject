import React, { createContext, useEffect, useState } from "react";
import AddList from "./AddList";
import axios from "axios";
import View from "./View";
import { toast } from "react-toastify";

export const Mycontext = createContext();
const TODoList = () => {
  const [pop, setPop] = useState(false);
  const [view, setView] = useState(false);
  const [data, setdata] = useState([]);
  const [sendId, setSendId] = useState(null);
 


  //read_item
  const GetData = async () => {
    try {
      let result = await axios({
        url: "http://localhost:4444/read-item",
        method: "get",
      });
      // console.log(result.data);
      setdata(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  //Delete-item
  const Delete = async (id) => {
    try {
      let result = await axios({
        url: `http://localhost:4444/delete-item/${id}`,
        method: "delete",
      });
      GetData();

      toast.success(result.data.message);
      // console.log(result);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    GetData();
  }, []);

  return (
    <Mycontext.Provider value={{ data, setdata, setPop, setView, sendId, pop }}>
      <div className="bg-gray-200 h-auto">
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
                setPop("Add");
              }}
              className="cursor-pointer"
            >
              Add
            </button>
          </div>
        </div>

        <div className="absolute">{view ? <View /> : null}</div>
        <div className="h-auto bg-white mt-[2.5rem] ml-[1.5rem] mr-[1.5rem] rounded-2xl">
          <div className=" ml-[1.5rem] grid grid-cols-3">
            {data.map((item, i) => {
              return (
                <div className="bg-gray-100 mt-[2rem] h-auto w-[25rem]">
                  <h1 className="text-[2rem] font-bold flex justify-center">
                    {item.title}
                  </h1>
                  <p className="ml-[1.5rem]">{item.description}</p>
                  <div className="flex justify-between">
                    <button
                      className="bg-blue-400 h-[2rem] w-[6rem] font-bold text-white cursor-pointer mt-[7rem]"
                      onClick={() => {
                        setSendId(item.id);
                        setView(true);
                      }}
                    >
                      View
                    </button>
                    <button
                      className="bg-green-500 h-[2rem] w-[6rem] font-bold text-white cursor-pointer mt-[7rem]"
                      onClick={() => {
                        setPop("Update");
                        setSendId(item.id);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-700 h-[2rem] w-[6rem] font-bold text-white cursor-pointer mt-[7rem]"
                      onClick={() => {
                        Delete(item.id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="absolute top-[2rem]">
          {pop === "Add" && <AddList title="Add List" btn="Submit" />}
        </div>
        <div className="absolute top-[2rem]">
          {pop === "Update" && <AddList title="Update List" btn="Edit" />}
        </div>
      </div>
    </Mycontext.Provider>
  );
};

export default TODoList;
