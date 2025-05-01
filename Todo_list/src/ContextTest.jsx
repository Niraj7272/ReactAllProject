import React, { useContext, useEffect } from 'react'
import { IContext } from './context/IContext'

const ContextTest = () => {
    const {them,toggleThem,value} = useContext(IContext);

    const handleClick = () =>{
        toggleThem();
        console.log(them);
    };

    useEffect(()=>{
        document.body.style.backgroundColor = them == "light"?"white":"black";
    },[them]);
  return (
    <>
    <button onClick={handleClick} className='bg-red-600'>toogle</button>
    </>
  )
}

export default ContextTest