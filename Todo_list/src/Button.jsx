import React from 'react'

const Button = ({name,age,value,color}) => {
  return (
    <div>
      <p>name:{name}</p>
      <p>age:{age}</p>
      <button className={`${color}`}>{value}</button>
    </div>
  )
}

export default Button