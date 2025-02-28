import axios from 'axios';
import React, { useState } from 'react'

const AddProduct = () => {

const [data,setData] = useState({
    name:"",
    price:"",
    description:"",
});    

const handleChange = (e) =>{
setData({...data,[e.target.name]: e.target.value});
}    

const handleClick = (e) =>{
e.preventDefault();
try {
    let result = axios({
        url:``,
        method:"",
        data:data,
    })
} catch (error) {
    console.log(error);
}
}

  return (
    <div>
        <form action="">
            <div>
                <h1>ADD PRODUCT</h1>
            </div>
            <div>
                <input type="text" name='name' onChange={handleChange} placeholder='Enter Name' /><br />
                <input type="number" name='price' onChange={handleChange} placeholder='Enter price' /><br />
                <textarea name="description" onChange={handleChange} id="" placeholder='Enter Description'></textarea>
                <input type="text" />
            </div>
            <div>
                <button onClick={handleClick}>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default AddProduct