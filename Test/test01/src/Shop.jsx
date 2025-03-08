import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import AddProduct from "./AddProduct";

export const Mycontext = createContext();

const Shop = () => {

const [viewPop, setViewPop] = useState(false);
const [fetchData,setFetchData] = useState([]);

const GetData = async() =>{
  try {
    let result = await axios(`http://localhost:1111/read-product`)
    // console.log(result.data);
    setFetchData(result.data);
  } catch (error) {
    console.log(error);
  }
}

useEffect(()=>{
  GetData();
},[])

  return (
    <Mycontext.Provider value={{setViewPop}}>
      <div className="bg-gray-400 h-screen w-screen">
        <h1 className="text-[1.5rem] font-bold text-gray-700 ml-[2rem] pt-[1rem]">
          All Products
        </h1>
        <button
          className="bg-green-600 h-[2rem] w-[10rem] cursor-pointer" onClick={()=>{
            setViewPop(true);
          }}
        >
          Add
        </button>
        <div className="grid grid-cols-5 absolute">
          {fetchData.map((item,i)=>{
            return(
              <div className="bg-gray-300 h-[23rem] w-[15rem] ml-[1rem] mt-[1rem] hover:shadow-blue-400 shadow-2xl">
                <img
                  src="./public/50-ultra-sensual-eau-de-parfum-wild-stone-men-original-imafrbzu8xgyfhkg.webp"
                  alt=""
                  className="h-[15rem]"
                />
                <h1 className="ml-[2rem] mt-[0.5rem] font-bold text-[1.4rem]">
                  {item.name}
                </h1>
                <h1 className="ml-[2rem] text-orange-500">Rs.{item.price}</h1>
                <div className="flex justify-between mt-[1.4rem]">
                  <button className="bg-blue-700 h-[2rem] w-[6rem] ml-[0.5rem] rounded text-white font-bold cursor-pointer">Detail</button>
                  <button className="bg-green-600 h-[2rem] w-[6rem] mr-[0.5rem] rounded text-white font-semibold cursor-pointer">Add To Cart</button>
                </div>
              </div>
              )
              })}
        </div>
        <div className="relative top-[-5rem]">
          {viewPop?<AddProduct />:null}
        </div>
      </div>
      </Mycontext.Provider>
  );
};

export default Shop;
