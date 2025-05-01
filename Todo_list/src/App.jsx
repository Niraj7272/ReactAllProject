import { useContext, useEffect, useState } from 'react'
// import TODoList from './ToDoList'
// import AddList from './AddList'
// import Button from './Button'
// import Registration from './Registration'
// import Login from './Login'
import ContextTest from './ContextTest'
import { IContext } from './context/IContext';
import TODoList from './ToDoList';



function App() {
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
      <TODoList/>
      </>
    )
}

export default App
