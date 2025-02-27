import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Mycontext } from './ToDoList';



const View = () => {

const [data,setData] = useState({});
let params = useParams();
let id = params.id;
const {setView,sendId} = useContext(Mycontext)

const GetDat = async() =>{
  try {
    let result = await axios({
      url: `http://localhost:4444/readspecific-item/${sendId}`,
      method: 'get'
    });
    console.log(result);
    setData(result.data)
  } catch (error) {
    console.log(error);
  }
};

useEffect(()=>{
  GetDat();
},[])

  return (
    <div className='bg-red-200 ml-[10rem] mr-[10rem] h-[15rem] w-[60rem]'>
      <h1
          className="bg-white h-[1.5rem] w-[1.5rem] pl-[0.3rem] text-[1rem] text-red-600 font-bold cursor-pointer hover:text-[1.2rem]"
          onClick={() => {
            setView(false)
          }}
        >
          X
        </h1>
        <h1 className='text-gray-700 text-[2rem] font-bold flex justify-center pt-[2rem]'>{data.title}</h1>
        <div className='bg-white ml-[2rem] mr-[2rem] mt-[2rem] rounded-[4px]'>
          <p className='p-[2rem]'>{data.description}</p>
        </div>
    </div>
  )
}

export default View