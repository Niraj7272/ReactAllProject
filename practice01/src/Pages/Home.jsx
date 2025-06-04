import React from "react";
import CategoryDisplay from "./CategoryDisplay";
import Footer from "./Footer";
import AboutUs from "./AboutUs";

const Home = () => {
  return (
    <div>
      <div className="h-[1230px] relative">
        <div className="sticky top-0 z-10">
          <img
            src="src/assets/red-wine-bottle-wine-glass-burgundy-background_884546-2883.jpg"
            alt=""
            className="h-[32.8rem] ml-[1.5rem] bg-white"
          />
        </div>
        <div className="relative z-20 mt-[-25rem] px-6">
          <div className="bg-transparent h-[30rem] w-screen inline-block ml-[4rem]">
            <h4 className="text-white text-[1rem]">Uncork the New Elegance</h4>
            <h1 className="text-white text-[3rem] w-[40rem] font-bold">
              Introducing our latest wine collection
            </h1>
            <h3 className="text-white text-[1.2rem] w-[40rem]">
              Experience bold flavors and timeless craftsmanship with every pour
              of our newest vintage selection
            </h3>
            <button className="bg-white mt-[3rem] h-[2.5rem] w-[9rem] cursor-pointer hover:text-blue-400">
              SHOP NOW
            </button>
          </div>
          <div className="bg-white h-[75rem] w-screen inline-block pt-4">
            <CategoryDisplay/>
            <div className="flex flex-col items-center justify-center p-4 text-center mt-[4rem]">
              <h1 className="text-gray-500">POPULAR PRODUCTS</h1>
              <h1 className="text-gray-800 font-bold text-[2.5rem]">
                Trending Now
              </h1>
            </div>
            <div className="flex gap-[2rem] h-[15rem]">
              <img src="src/assets/nikeairforce.jpeg" alt="" />
              <img src="src/assets/mackbook.jpeg" alt="" />
              <img src="src/assets/merlotveneto.jpeg" alt="" />
              <img src="src/assets/images (4).jpeg" alt="" />
              <img src="src/assets/iphone12.jpeg" alt="" />
            </div>
            <div className="flex flex-col items-center justify-center text-center mt-[7rem]">
              <h1 className="text-gray-500">SHOP</h1>
              <h1 className="text-gray-800 font-bold text-[2.5rem]">
                Best Selling
              </h1>
            </div>
            <div className="flex gap-[2rem] h-[15rem] mt-[5rem]">
              <img src="src/assets/iphone12.jpeg" alt="" />
              <img src="src/assets/images (4).jpeg" alt="" />
              <img src="src/assets/mackbook.jpeg" alt="" />
              <img src="src/assets/nikeairforce.jpeg" alt="" />
              <img src="src/assets/merlotveneto.jpeg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="h-[3000px] relative">
        <div className="sticky top-0 z-10">
          <img
            src="src/assets/Visit-Niagara-Falls-3-1.jpg"
            alt=""
            className="h-[46rem] ml-[1.5rem] bg-white"
          />
        </div>
        <div className="relative z-20 mt-[-4rem] px-6">
          <div className="bg-transparent h-[40rem] w-screen inline-block ml-[4rem]">
            <h3 className="text-white text-[1rem] w-[30rem]">NEW COLLECTION</h3>
            <h1 className="text-white font-bold text-[3rem] w-[30rem]">
              Raise a Glass to Something Special
            </h1>
            <h1 className="text-white text-[1.5rem] w-[30rem]">
              Discover the essence of our newest wine release Savor rich aromas,
              refined taste, and the artistry of tradition in every bottle.
            </h1>
            <button className="bg-white mt-[3rem] h-[2.5rem] w-[9rem] cursor-pointer hover:text-blue-400">
              SHOP NOW
            </button>
          </div>
          <div className="bg-white h-[106rem] w-screen inline-block pt-4">
            <div className="w-[81.8rem]">
                <AboutUs/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
