import React from "react";
import hero1 from "../img/hero1.jpg";
// import Link
import { Link } from "react-router-dom";

const Hero = () => {
  
  return (
    <section className="bg-[#607d8b] h-[700px] bg-no-repeat bg-cover bg-center py-24 ">
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>Update Coming
          </div>
          <h1 className="text-[50px] leading-[1.2] font-light mb-4 font-serif ">
            Welcome To The <span className="text-[65px] font-mono font-extrabold">RK</span> shop
            <br />
            <span className="font-semibold"> check for once </span>
          </h1>

          <Link
            to="/"
            className=" self-start  font-semibold border-b-4  border-amber-950"
          >
            Discover More
          </Link>
        </div>
        <div className="hidden lg:block">
          <img src={hero1} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
