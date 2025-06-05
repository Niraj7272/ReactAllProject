import axios from "axios";
import React, { useEffect, useState } from "react";

const CategoryDisplay = () => {
    const [data,setData] = useState([]);

    const GetCategory = async() => {
        try {
            let result = await axios({
                url:`http://localhost:2222/read_category`,
                method:"get",
            })
            console.log(result.data);
            setData(result.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        GetCategory();
    },[])

    
  return (
    <div>
      <div className="flex gap-[1.8rem]">
        {data.map((cat,i)=> (
        <div className="border-[2px] border-gray-300 h-[5rem] w-[12rem] flex items-center justify-center p-4 text-center font-bold cursor-pointer">
          <h1>{cat.category_title}</h1>
        </div>
         ))}
      </div>
    </div>
  );
  
};

export default CategoryDisplay;
