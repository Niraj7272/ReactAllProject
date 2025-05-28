import React from 'react'

const Contact = () => {
  return (
    <div>
      <div>
          <img src="src/assets/contact.jpg" alt="" className='w-screen h-[60vh] relative opacity-80' />
          <div className='flex justify-center'>
              <h1 className='absolute top-[13rem] text-white font-bold text-[3.5rem]'>Contact Us</h1>
          </div>
      </div>
      <div>
        <h1 className='ml-[29rem] text-[2rem] font-bold text-gray-500'>Let's Start a Conversation</h1>
        <div className='flex justify-between'>
          <div className='ml-[5rem]'>
            <h1 className='font-bold text-[2rem] '>How TO Find Us</h1>
            <p className=''>hello fsdfufh duhdc </p>
          </div>
          <div className='mr-[10rem]'>
            <h1 className='font-bold text-[2rem]'>Get IN Touch</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact