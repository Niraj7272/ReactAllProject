import React from "react";
import AboutUs from "./AboutUs";

const About = () => {
  return (
    <div>
      <div className="m-[1rem] mt-0">
        <img src="src/assets/wine.jpg" alt="" className="relative" />
        <h3 className="absolute mt-[-31rem] text-white font-semibold text-[1rem] pl-[5rem]">
          A FEW WORDS
        </h3>
        <h1 className="absolute mt-[-30rem] text-white font-bold text-[3rem] pl-[5rem]">
          ABOUT US
        </h1>
        <AboutUs/>
      </div>
    </div>
  );
};

export default About;
