import axios from "axios";
import React, { useEffect, useState } from "react";
import AddProduct from "./AddProduct";

const Shop = () => {

const [fetchData, setFetchData] = useState([]);

const GetProduct = async() =>{
    try {
        let result = await axios({
            url:`http://localhost:1111/read-product`,
            method:"get",
        })
        console.log(result);
        // setFetchData()
    } catch (error) {
        console.log(error);
    }
}
useEffect(()=>{
    setFetchData();
},[])


  return (
    <div className="bg-gray-400 h-screen w-screen">
      <h1 className="text-[1.5rem] font-bold text-gray-700 ml-[2rem] pt-[1rem]">
        All Products
      </h1>
      <button className="bg-green-600 h-[2rem] w-[10rem]">Add</button>
      <div className="grid grid-cols-5 absolute">
        <div className="relative top-[-5rem]">
            <AddProduct/>
        </div>
        <div className="bg-gray-300 h-[20rem] w-[15rem] ml-[1rem] mt-[1rem] hover:shadow-blue-400 shadow-2xl">
          <img
            src="./public/50-ultra-sensual-eau-de-parfum-wild-stone-men-original-imafrbzu8xgyfhkg.webp"
            alt=""
            className="h-[15rem]"
          />
          <h1 className="ml-[2rem] mt-[0.5rem] font-bold text-[1.4rem]">
            Perfume
          </h1>
          <h1 className="ml-[2rem] text-orange-500">Rs.1000</h1>
        </div>
        <div className="bg-gray-300 h-[20rem] w-[15rem] ml-[1rem] mt-[1rem] hover:shadow-blue-400 shadow-2xl">
          <img
            src="./public/50-ultra-sensual-eau-de-parfum-wild-stone-men-original-imafrbzu8xgyfhkg.webp"
            alt=""
            className="h-[15rem]"
          />
          <h1 className="ml-[2rem] mt-[0.5rem] font-bold text-[1.4rem]">
            Perfume
          </h1>
          <h1 className="ml-[2rem] text-orange-500">Rs.1000</h1>
        </div>
      </div>
    </div>
  );
};

export default Shop;
