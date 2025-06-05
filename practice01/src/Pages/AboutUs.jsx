import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { FaCartFlatbedSuitcase } from "react-icons/fa6";
import { GiReturnArrow } from "react-icons/gi";
import Footer from './Footer'

const AboutUs = () => {
  return (
    <div>
        <div className="bg-transparent absolute mt-[-10rem] h-screen ">
          <div className="flex justify-between">
            <div className=" bg-white relative h-[40rem] w-[82.4rem] mt-[2rem]">
              <div className="flex bg-gray-700 h-[6rem] w-[15rem] p-2 ml-40 mt-40">
                <h1 className="text-orange-700 text-[3rem] font-bold  w-[40rem] pl-[3rem]">
                  E
                </h1>
                <h1 className="text-white mr-[19rem] text-[3rem] font-bold">
                  Mart
                </h1>
              </div>
              <h1 className="mt-[2rem] ml-[6.5rem] text-gray-500 text-[1.5rem]">
                Everything You Need. Right Here.
              </h1>
            </div>
            <div className="bg-pink-200 p-7 mr-[3rem] h-[38rem] ml-[40rem] absolute">
              <h1 className="text-[1.5rem] p-15">
                Cras ut ultricies risus. Etiam ac malesuada lectus. Sed congue
                nisi vitae lorem ullamcorper laoreet. In eget tellus mauris.
                Phasellus id ligula.
              </h1>
              <p className="text-gray-600 pl-15 pr-15">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                rhoncus eget enim eget tincidunt. In finibus nisi ex, eu
                interdum urna euismod sit amet. Morbi sollicitudin in magna sed
                tristique. Nulla pharetra sapien eros, sit amet bibendum nibh
                consectetur quis. Curabitur tortor dolor, fringilla eu fringilla
                id, dignissim in urna.
              </p>
              <br />
              <br />
              <p className="text-gray-600 pl-15 pr-15">
                Morbi sollicitudin in magna sed tristique. Nulla pharetra sapien
                eros, sit amet bibendum nibh consectetur quis. Curabitur tortor
                dolor, fringilla eu fringilla id.
              </p>
            </div>
          </div>
          <div className="">
            <img src="src/assets/353504.jpg" alt="" className="relative" />
            <div className="absolute mt-[-35rem] text-white p-5 pl-[7rem]">
              <h1 className="text-[3rem] font-bold">About Our Products</h1>
              <hr className="w-[15rem] ml-[7rem] mt-[2rem]" />
              <p className="text-[1.5rem] w-[40rem] mt-[2rem]">
                About Our Products Proin at velit sed elit varius porttitor. Ut
                a suscipit quam, eu congue odio. Sed eget viverra est. Vivamus
                ut sodales neque. Sed vel dui et dolor placerat egestas id
                lacinia mauris
              </p>
            </div>
            <div className="bg-white h-[52rem]  w-[82.4rem]  mt-[3rem]">
              <div className="flex gap-[5rem]">
              <div>
                <h1 className="text-[1.5rem] font-semibold text-gray-500 ml-[1rem]">
                  WHY CHOOSE US
                </h1>
                <hr className="text-pink-300 w-[10rem] ml-[2rem] mt-[1rem]" />
              </div>
              <div>
                <div className="ml-[4rem] flex">
                  <TbTruckDelivery className="text-[3rem] p-2 bg-blue-400 rounded-[2rem] mr-3 text-white" />
                  <h1 className="text-[2rem] font-semibold text-gray-600">
                    Fast Delivery
                  </h1>
                </div>
                <p className="w-[10rem] ml-[8rem] text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis.
                </p>
              </div>
              <div>
                <div className=" flex">
                  <FaCartFlatbedSuitcase className="text-[3rem] p-2 bg-blue-400 rounded-[2rem] mr-3 text-white" />
                  <h1 className="text-[2rem] font-semibold text-gray-600">
                    Free Shipping
                  </h1>
                </div>
                <p className="w-[10rem] ml-[4rem] text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis.
                </p>
              </div>
              <div>
                <div className="flex">
                  <GiReturnArrow className="text-[3rem] p-2 bg-blue-400 rounded-[2rem] mr-3 text-white" />
                  <h1 className="text-[2rem] font-semibold text-gray-600">
                    Easy Returns
                  </h1>
                </div>
                <p className="w-[10rem] ml-[4rem] text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis.
                </p>
              </div>
              </div>
              <div className='w-[82rem]'>
                <Footer/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AboutUs