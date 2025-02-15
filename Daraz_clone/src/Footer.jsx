import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-white'>
        <div className='bg-gray-100 text-blue-400 '>
            <NavLink to="#" className="ml-[35%] border-[1px] border-blue-400 p-2 pl-[10rem] pr-[10rem] w-[5rem]">LOAD MORE</NavLink>
            <div className='flex text-blue-950 justify-between mt-[3rem] ml-[4rem] pb-[2rem]'>
                <div>
                    <h1 className='text-[1.3rem] mb-[0.6rem]'>Customer Care</h1>
                    <NavLink to="#">Help Center</NavLink><br />
                    <NavLink to="#">How to Buy</NavLink><br />
                    <NavLink to="#">Returns & Refunds</NavLink><br />
                    <NavLink to="#">Contact Us</NavLink>
                </div>
                <div className='ml-[10rem]'>
                <h1 className='text-[1.3rem] mb-[0.6rem]'>Daraz</h1>
                    <NavLink to="#">About Daraz</NavLink><br />
                    <NavLink to="#">Careers</NavLink><br />
                    <NavLink to="#">Daraz Blog</NavLink><br />
                    <NavLink to="#">Terms & Conditions</NavLink><br />
                    <NavLink to="#">Privacy Policy</NavLink><br />
                    <NavLink to="#">Digital Payments</NavLink><br />
                    <NavLink to="#">Daraz Customer University</NavLink><br />
                    <NavLink to="#">Daraz Affiliate Program</NavLink><br />
                    <NavLink to="#">Review & Win</NavLink><br />
                    <NavLink to="#">Meet the Winners</NavLink><br />
                    <NavLink to="#">Daraz University</NavLink><br />
                    <NavLink to="#">Sell on Daraz</NavLink><br />
                    <NavLink to="#">Code of Conduct</NavLink><br />
                </div>
                <div className='flex pl-[4rem]'>
                    <img src="src/assets/darazapplogo.png" alt="" className='h-[3rem]' />
                    <div className='ml-[1rem]'>
                        <h1 className='text-orange-600 text-[1.1rem]'>Happy Shopping</h1>
                        <h1>Download App</h1>
                    </div>
                </div>
                <div>
                    <div className='flex mr-[10rem] gap-[0.7rem]'>
                        <NavLink to="#"><img src="src/assets/applestore.png" alt="" /></NavLink>
                        <NavLink to="#"><img src="src/assets/googleplay.png" alt="" /></NavLink>
                    </div>
                    <div className='mt-[0.7rem]'>
                        <NavLink to="#"><img src="src/assets/appgallery.png" alt="" /></NavLink>
                    </div>
                </div>
            </div>
        </div>


        <div className='m-[2rem] ml-[5rem] flex'>
            <div>
            <h1>Payment Methods</h1>
            <div className='flex mt-[1rem] gap-2'>
                <img src="src/assets/PaymentMethods/cashondelivery.png" alt="" className='h-[2rem]' />
                <img src="src/assets/PaymentMethods/visa.png" alt="" className='h-[2rem]'/>
                <img src="src/assets/PaymentMethods/mastercard.png" alt="" className='h-[2rem]' />
                <img src="src/assets/PaymentMethods/esewa.png" alt="" className='h-[2rem]'/>
                <img src="src/assets/PaymentMethods/imepay.png" alt="" className='h-[2rem]'/>
            </div>
            </div>
            <div className='ml-[8rem]'>
                <h1>Verified by</h1>
                <img src="src/assets/PaymentMethods/pci.png" alt="" className='mt-[1rem]' />
            </div>
        </div>


        <div className='bg-gray-100 flex justify-between pb-[3rem]'>
            <div className='w-[110rem] ml-[5rem] mt-[3rem]'>
                <h1  className='text-gray-700'>Experience Hassle-Free Online Shopping in Nepal with Daraz</h1>
                <p className='text-[0.8rem] text-gray-500'>E-commerce has evolved over the past few years
                     and since it’s 
                    easier and more convenient, it is evident
                     that customers are actually
                     switching to the trend of online shopping. 
                     Daraz, the Nepali shopping store,
                      brings a whole new concept by showcasing a number of famous brands under 
                      one roof. Not only does it fulfill clothing necessities of both men and women 
                      but you can also shop for all kinds of appliances like air conditioners, 
                      heaters, refrigerators, LED TVs and a lot more. Simply select your favorite
                       brand like Samsung, Apple, HP, Huawei, Dell, Canon, Nikon, etc and get
                        yourself the best electronic items.</p>
                <h1  className='text-gray-700'>Convenient Online Shopping in Nepal</h1>
                <p className='text-[0.8rem] text-gray-500'>Daraz is the ultimate Nepali eCommerce website
                     that offers a solution for all needs of the customers.
                      It has a wide and assorted range of products including
                       clothing, electronics, mobile phones, home and</p>
            </div>
            <div className='ml-[5rem] w-[110rem] mt-[3rem]'>
                <p className='text-[0.8rem] text-gray-500'>living, health and beauty and much more.
                        Daraz strives to provide customers the best shopping experience in Nepal. The online store is updated daily and new products are added every day to cater to all your needs. Visit Daraz.com.np to experience shopping in Nepal as never before. Don't forget to Download Daraz App and get exclusive discounts.
                        Daraz is a global online marketplace with ecommerce stores in Pakistan, Bangladesh, Nepal, Sri Lanka and Myanmar.
                        General Information:
                        Daraz Kaymu Private Limited
                        Kathmandu Metropolitan City, Ward No. 11,Thapathali,Kathmandu, Nepal
                        VAT No. 602403687
                        Grievance handling Information:
                        Grievance Management
                        015970597 (please ask to be redirected to our Grievance Management team)</p>
                        <h1  className='text-gray-700'>TRENDING</h1>
                        <p className='text-[0.8rem] text-gray-500'>Daraz 11.11 Sale,12.12 Sale,
                            Dashain Dhamaka,Mobile Week,Valentine's Day Sale,
                            Cricket Streaming,Grocery Shopping in Nepal,Realme GT 2 Pro,Realme GT Neo 3,</p>
            </div>
            <div className='ml-[5rem] mt-[3rem] w-[110rem]'>
                <h1  className='text-gray-700'>Top Categories & Brands</h1>
                <p className='text-[0.8rem] text-gray-500'>NEW MOBILE PHONES IN NEPAL
                Samsung Mobile Phones , Xiaomi Mobiles ,
                 Nokia Mobiles , Oppo Mobiles , Apple iPhones ,
                  OnePlus , Sony Mobiles , Huawei Mobiles ,
                   Lenovo Mobiles , Colors Mobiles , Gionee Mobiles ,
                    HTC Mobiles , Umidigi Mobiles , Tablets , Samsung Tablet ,
                     Mobile Accessories</p>
                     <h1  className='text-gray-700'>LATEST LAPTOPS</h1>
                     <p className='text-[0.8rem] text-gray-500'>Apple Laptops , Samsung Laptops , Asus Laptops , 
                        Acer Laptops , HP Laptops , Dell Laptops</p>
            </div>
            <div  className='ml-[5rem] mt-[3rem] w-[110rem] mr-[5rem]'>
                <h3  className='text-gray-700'>COMPUTER COMPONENTS</h3>
                <p className='text-[0.8rem] text-gray-500'>Ram , Motherboards , Processors , Desktop Casings , CPU Cooling Fans , Gaming Graphic Cards</p>
                <h1 className='text-gray-700'>WOMEN'S FASHION</h1>
                <p className='text-[0.8rem] text-gray-500'>Clothes , Ladies Watches , Jewelry , Sarees , Ladies Kurti Designs , Women Undergarments , Shirts for
                     Ladies & Girls , T-shirts for Ladies & Girls</p>
            </div>
        </div>


        <div className='ml-[5rem] mt-[2.6rem] flex'>
            <div>
            <h1 className='mb-[0.5rem]'>Daraz International</h1>
            <div className='flex gap-[1rem]'>
                <NavLink to="#" className="flex text-gray-500  gap-[0.5rem]"><img src="src/assets/CountryFlag/pakistan.png" alt="" className='h-[2rem]'/>Pakistan</NavLink>
                <NavLink to="#" className="flex text-gray-500  gap-[0.5rem]"><img src="src/assets/CountryFlag/bangladesh.png" alt="" className='h-[2rem]' />Bangladesh</NavLink>
                <NavLink to="#" className="flex text-gray-500  gap-[0.5rem]"><img src="src/assets/CountryFlag/srilanka.png" alt="" className='h-[2rem]' />Srilanka</NavLink>
                <NavLink to="#" className="flex text-gray-500  gap-[0.5rem]"><img src="src/assets/CountryFlag/myanmar.png" alt="" className='h-[2rem]' />Myanmar</NavLink>
                <NavLink to="#" className="flex text-gray-500  gap-[0.5rem]"><img src="src/assets/CountryFlag/nepal.png" alt="" className='h-[2rem]'/>Nepal</NavLink>
            </div>
            </div>
            <div className='ml-[5rem] pb-[2rem]'>
                <h1 className='mb-[0.5rem]'>Follow Us</h1>
                <div className='flex gap-[1rem]'>
                    <NavLink to="#"><img src="src/assets/SocialMedia/facebook.png" alt="" className='h-[1.8rem]' /></NavLink>
                    <NavLink to="#"><img src="src/assets/SocialMedia/insta.png" alt="" className='h-[1.8rem]' /></NavLink>
                    <NavLink to="#"><img src="src/assets/SocialMedia/youtube.png" alt="" className='h-[1.8rem]' /></NavLink>
                    <NavLink to="#"><img src="src/assets/SocialMedia/www.png" alt="" className='h-[1.8rem]' /></NavLink>
                </div>
            </div>
            <div className='ml-[16rem] text-gray-500'>
                <p> &copy; Daraz 2025</p>
            </div>
        </div>
    </div>
  )
}

export default Footer