import React from 'react'

const Home = () => {
  let productData = [
    {
      name:"Samba OG Cloud White Core Black For Man By... ",
      price:1399,
      realPrice:1700,
      percent:"20%",
      image:"src/assets/7ba5486ce9bde718f24d3738b64c677a.jpg_400x400q80.jpg_.webp"
    },
    {
      name:"Samba OG Cloud White Core Black For Man By... ",
      price:1399,
      realPrice:1700,
      percent:"20%",
      image:"src/assets/Sb0171e9f94e04c2ba15616731a279cdfy.jpg_400x400q80.jpg_.webp"
    },
    {
      name:"Samba OG Cloud White Core Black For Man By... ",
      price:1399,
      realPrice:1700,
      percent:"20%",
      image:"src/assets/2feb0a94f0c5d32d52305c73a9048f05.png_400x400q80.png_.webp"
    },
    {
      name:"Samba OG Cloud White Core Black For Man By... ",
      price:1399,
      realPrice:1700,
      percent:"20%",
      image:"src/assets/Sa70dd167b8e8468aaac0839e68dcaf87f.jpg_400x400q80.jpg_.webp"
    },
    {
      name:"Samba OG Cloud White Core Black For Man By... ",
      price:1399,
      realPrice:1700,
      percent:"20%",
      image:"src/assets/3231a989b512bf9d66b056c9a84cfbfc.jpg_400x400q80.jpg_.webp"
    },
    {
      name:"Samba OG Cloud White Core Black For Man By... ",
      price:1399,
      realPrice:1700,
      percent:"20%",
      image:"src/assets/71219df597a3344321d6343bc1665206.jpg_400x400q80.jpg_.webp"
    }
  ]

  let categoryData =[
    {
      name:"MakeUp Remover",
      image:"src/assets/Category/makeupremover.webp"
    },
    {
      name:"Bracelet",
      image:"src/assets/Category/bracetete.webp"
    },
    {
      name:"Broom",
      image:"src/assets/Category/broom.webp"
    },
    {
      name:"Switches",
      image:"src/assets/Category/switches.webp"
    },
    {
      name:"Hall Stand",
      image:"src/assets/Category/hallstand.webp"
    },
    {
      name:"Infant(0-3)",
      image:"src/assets/Category/infant.webp"
    },
    {
      name:"Rice",
      image:"src/assets/Category/rice.webp"
    },
    {
      name:"Switches",
      image:"src/assets/Category/switches.webp"
    },
    {
      name:"Rice",
      image:"src/assets/Category/rice.webp"
    },
    {
      name:"MakeUp Remover",
      image:"src/assets/Category/makeupremover.webp"
    },
    {
      name:"Infant(0-3)",
      image:"src/assets/Category/infant.webp"
    },
    {
      name:"Hall Stand",
      image:"src/assets/Category/hallstand.webp"
    },
    {
      name:"Bracelet",
      image:"src/assets/Category/bracetete.webp"
    },
    {
      name:"Broom",
      image:"src/assets/Category/broom.webp"
    },
    {
      name:"Switches",
      image:"src/assets/Category/switches.webp"
    },
    {
      name:"Bracelet",
      image:"src/assets/Category/bracetete.webp"
    },
  ]


  return (
    <div className='bg-gray-100 h-[100rem]'>
    <div className=' h-[32rem]'>
      <img src="src/assets/70d96363-eff1-41d6-beb4-0d24afc1ba70_NP-1976-688.png_2200x2200q80.png_.webp" alt="" className='h-[22rem] ml-[4rem]' />
    </div>
    <h1 className='text-[1.5rem] text-gray-700 ml-[4rem] mb-[0.4rem]'>Flash Sale</h1>
    <div className='bg-white text-orange-600 ml-[3rem] mr-[3rem] h-[26rem]'>
      <div className='flex justify-between  pt-[0.7rem]'>
          <h2 className='ml-[1rem] mt-[0.5rem]'>On Sale Now</h2>
          <button className='border-1 p-[5px] mr-[1rem] cursor-pointer'>SHOP ALL PRODUCTS</button>
      </div>
      <hr  className='text-gray-600 mt-[0.7rem]'/>

      <div className='grid grid-cols-6 gap-4'>
      {productData.map((item,i)=>{
        return(
         <div className='mt-[1rem]  bg-white h-[20rem] relative hover:shadow-2xl hover:border-gray-600 cursor-pointer'>
           <img src={item.image} alt="" className='h-[12rem] w-[13rem]' />
           <div className='absolute text-black text-[1rem] m-1.5'>
             <h1>{item.name}</h1>
             <h1 className='text-orange-600 text-[1.3rem]'>Rs.{item.price}</h1>
             <div className='flex'>
             <h3 className='line-through text-gray-600'>Rs.{item.realPrice}</h3>
             <span>-{item.percent}</span>
             </div>
           </div>
         </div>
         
        )
      })}
      </div>
          <h1 className='mt-[3rem] text-[1.7rem] text-gray-600'>Categories</h1>
      <div className='bg-white grid grid-cols-8 gap-[0.1rem] h-[10rem]'>
        {categoryData.map((item,i)=>{
          return(
            <div className='w-[10rem] border-[1px] border-gray-400 hover:shadow-2xl hover:border-gray-500'>
            <div>
                <img src={item.image} alt="" className='h-[5rem] ml-[2rem] mt-[1.5rem]' />
            </div>
            <div className='ml-[2rem] text-black'>
                <h1>{item.name}</h1>
            </div>
            </div>
          )
        })}
      </div>
    </div>
    </div>
  )
}

export default Home