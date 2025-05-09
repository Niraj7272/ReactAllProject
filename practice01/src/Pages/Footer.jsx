import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='bg-gray-400 h-[20rem] w-screen flex justify-between pt-[3rem] text-[1.3rem] pr-[5rem]'>
        <div className='ml-[5rem]'>
          <h1 className='font-bold text-white '>ABOUT</h1>
          <p className='w-[20rem] text-[1rem] text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Inventore temporibus necessitatibus autem dolorum 
             obcaecati, doloremque mollitia nesciunt provident 
             debitis magnam, consequatur aperiam nobis. Rerum
              quisquam modi at eum consequuntur id.</p>
        </div>
        <div>
          <h1 className='font-bold text-white '>CATEGORIES</h1>
        </div>
        <div>
          <h1 className='font-bold text-white '>INFORMATIONS</h1>
        </div>
        <div>
          <h1 className='font-bold text-white '>CONTACT</h1>
        </div>
      </div>
    </div>
  )
}

export default Footer