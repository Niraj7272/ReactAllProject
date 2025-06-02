import React, { createContext, useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { MyContext } from "../Context/contextCreateandProvide";
import AddCategory from "./AddCategory";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { toast } from "react-toastify";

const Category = () => {
  const { pop, setPop } = useContext(MyContext);
  const [data, setData] = useState([]);

  //read category
  const GetCategory = async () => {
    try {
      let result = await axios({
        url: "http://localhost:2222/read_category",
        method: "get",
      });
      console.log(result.data);
      setData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  //delete category
  const Deletecategory = async(id)=>{
    try {
        let result = await axios({
            url:`http://localhost:2222/delete_category/${id}`,
            method: "delete",
        })
        toast.success(result.data.message);
        GetCategory();
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
    GetCategory();
  }, []);

  return (
    <div className="bg-white h-screen w-screen flex">
      <div className="bg-blue-900 opacity-70 h-screen w-[10rem] ">
        <div className="flex p-[2.5rem]">
          <h1 className="text-orange-500 font-bold text-[1.5rem]">E</h1>
          <h1 className="text-white font-bold text-[1.5rem]">Mart</h1>
        </div>
        <div className="text-white font-semibold ml-[2rem]">
          <h1 className="font-bold text-[1.1rem]">Menu</h1>
          <div className="mt-[1.3rem]">
            <h1>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </h1>
            <h1 className="mt-[1.5rem]">
              <NavLink to="/product">Product</NavLink>
            </h1>
            <h1 className="mt-[1.5rem]">
              <NavLink to="/customer">Customer</NavLink>
            </h1>
            <h1 className="mt-[1.5rem]">
              <NavLink to="/order">Order</NavLink>
            </h1>
            <h1 className="mt-[1.5rem]">
              <NavLink to="/category" className="bg-gray-600 p-[0.5rem]">
                Category
              </NavLink>
            </h1>
            <h1 className="mt-[1.5rem]">
              <NavLink to="/message">Message</NavLink>
            </h1>
            <h1 className="mt-[1.5rem]">
              <NavLink to="/transaction">Transaction</NavLink>
            </h1>
          </div>
        </div>
      </div>

      <div>
        <div className="flex relative">
          <div className="absolute">{pop ? <AddCategory /> : null}</div>
          <div>
            <input
              type="text"
              placeholder="Search"
              className=" bg-gray-200 mt-[3rem] h-[3rem] w-[45rem] rounded-2xl ml-[2rem] pl-[2rem] font-semibold"
            />
          </div>
          <div>
            <img
              src=""
              alt=""
              className=" bg-gray-200 mt-[3rem] h-[3rem] w-[3rem] rounded-2xl ml-[2rem] pl-[2rem]"
            />
          </div>
          <div>
            <img
              src=""
              alt=""
              className=" bg-gray-200 mt-[3rem] h-[3rem] w-[3rem] rounded-2xl ml-[2rem] pl-[2rem]"
            />
          </div>
          <div>
            <NavLink>
              <h1 className=" bg-gray-200 mt-[3rem] h-[3rem] w-[10rem] rounded-2xl ml-[2rem] pl-[3rem] pt-[0.7rem] font-bold text-gray-600">
                Log Out
              </h1>
            </NavLink>
          </div>
        </div>

        <div className="bg-gray-200 h-[20rem] w-[70rem] mt-[2rem] ml-[2rem] ">
          <div className="flex">
            <h1 className="font-bold text-[1.5rem] ml-[2rem] bg-white h-[2.5rem] w-[50rem] pl-[20rem] mt-[1rem] rounded-2xl text-blue-800">
              Category List
            </h1>
            <button
              onClick={() => {
                setPop(true);
              }}
              className="bg-green-600 h-[2rem] w-[7rem] pl-[1rem] font-bold text-white cursor-pointer mt-[1rem] ml-[10rem]"
            >
              Add
            </button>
          </div>
          <div className="bg-white mt-[2rem] h-auto w-[66rem] ml-[2rem] pl-[3rem] pt-[1rem]">
            <table>
              <thead className="text-gray-500">
                <tr>
                  <th>SN</th>
                  <th className="pl-[10rem]">Category</th>
                  <th className="pl-[15rem]">Action</th>
                </tr>
              </thead>
              {data.map((item, i) => {
                return (
                  <tbody className="">
                    <tr>
                      <td className="pt-[1.5rem] pl-[0.5rem]">{1 + i}</td>
                      <td className="pt-[1.5rem] pl-[8rem]">
                        {item.category_title}
                      </td>
                      <td className="pt-[1.5rem] pl-[10rem]">
                        <button
                          className="cursor-pointer"
                          onClick={()=>{
                            Deletecategory(item.idcategory)
                          }}
                        >
                          <MdDelete className="text-red-700 h-[1.6rem] w-[2rem] cursor-pointer" />
                        </button>

                        <button>
                          <CiEdit className="text-green-600 h-[1.6rem] w-[2rem] cursor-pointer" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
