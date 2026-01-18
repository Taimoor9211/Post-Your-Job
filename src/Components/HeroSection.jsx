import React from "react";
import Image1 from "../assets/Images/image1.png";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[809px]">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-[rgba(21,56,133,0.37)] opacity-100"></div>
      <img
        src={Image1}
        alt="Hero Image"
        className="object-cover w-full h-full opacity-100"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 gap-6 w-[1144px] mx-auto px-4">
        <h1 className="font-poppins font-medium text-7xl leading-[110%] tracking-[-2%]">
          Post Your Job
          <br />
          Our Agents Handle Everything.
        </h1>
        <p className="font-joan font-normal text-xl leading-[150%]">
          Post your job, get matched with verified providers, and pay securely
          <br /> through escrow — all in one platform.
        </p>
        <div className="flex gap-6">
          <button className="w-[267px] h-[48px] py-3 px-8 rounded-[36px] bg-[#2563EB] text-white font-semibold">
            Post a Job
          </button>
          <button className="w-[267px] h-[48px] py-3 px-8 rounded-[36px] bg-[#F3F7FF] text-black font-normal">
            Become a Provider
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
