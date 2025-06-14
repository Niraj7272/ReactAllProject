import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [data, setData] = useState([]);
  const { idproduct } = useParams();

  // console.log(idproduct);

  const GetDetail = async () => {
    try {
      let result = await axios({
        url: `http://localhost:2222/readSpecific_product/${idproduct}`,
        method: "get",
      });
      console.log(result.data);
      setData(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetDetail();
  }, []);

  return (
    <div>
      <div className="bg-white h-screen w-screen flex">
            <div>
              <img
                src={`http://localhost:2222/images/${data.image}`}
                alt=""
                className="h-[30rem] pt-[3rem] pl-[5rem] p-[2rem] "
              />
              {/* <div className="flex h-[6rem] ml-[5rem] gap-[0.5rem]">
            <img src="src/assets/nikeairforce.jpeg" alt="" />
            <img src="src/assets/nikeairforce.jpeg" alt="" />
            <img src="src/assets/nikeairforce.jpeg" alt="" />
            <img src="src/assets/nikeairforce.jpeg" alt="" />
          </div> */}
            </div>
        <div className="mt-[4rem]">
          <h1 className="font-bold text-2xl text-gray-600">{data.product_title}</h1>
          <h2 className="font-bold text-2xl mt-[1rem] text-gray-500">
            Rs. {data.price}
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
          <h1 className="text-gray-500 font-bold text-[1.2rem] mt-[3rem]">
            Product Details
          </h1>
          <p className="w-[30rem] mt-[1rem] text-gray-400">
            {data.description}
          </p>
        </div>
      </div>
      <div className="">
        <h1 className="text-gray-700 font-semibold text-[1.5rem] ml-[40rem] mt-[2rem]">
          Related products
        </h1>
        <hr className="text-orange-600 w-[5rem] ml-[43rem] mt-[0.8rem]" />
        <div className="flex gap-[1.5rem] mt-[2rem]">
          <img src="src/assets/mackbook.jpeg" alt="" />
          <img src="src/assets/iphone12.jpeg" alt="" />
          <img
            src="src/assets/50-ultra-sensual-eau-de-parfum-wild-stone-men-original-imafrbzu8xgyfhkg.webp"
            alt=""
            className="h-[12rem]"
          />
          <img src="src/assets/tshirtblack.jpg" alt="" className="h-[12rem]" />
          <img src="src/assets/nikeairforce.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Detail;
