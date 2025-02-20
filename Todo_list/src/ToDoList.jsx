import React from "react";

const TODoList = ()=>{
    return(
        <div className="bg-gray-200 h-screen">
            <h1>.</h1>
            <div>
                <h1 className="bg-white m-[1rem] rounded-[20px] h-[5rem] text-[3rem] font-bold pl-[33rem]">Todo List</h1>
            </div>
            <div className="flex justify-between">
                <div className="bg-white flex justify-between w-[30rem] ml-[1.5rem] border-[1px]">
                    <input type="text" className="w-[30rem]"/>
                    <img src="https://img.icons8.com/?size=100&id=59878&format=png&color=000000" alt="" className="h-[2rem] bg-orange-300 p-1" />
                </div>
                <div className="bg-green-600 mr-[10rem] w-[12rem] pl-[5rem] pt-[0.3rem] font-bold text-white cursor-pointer">
                    <button>Add</button>
                </div>
            </div>
            <div className="h-[25rem] bg-white mt-[2.5rem] ml-[1.5rem] mr-[1.5rem] rounded-2xl">

            </div>
            
        </div>
    )
}

export default TODoList

