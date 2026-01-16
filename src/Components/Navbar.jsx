import React from 'react';
import Logo from '../assets/Images/Logo.png';

const Navbar = () => {
  return (
    <nav className="w-full h-20 bg-white backdrop-blur-3xl">
      <div className="flex items-center justify-between w-full h-full max-w-[1440px] mx-auto px-14">
        {/* Left - Brand/Home */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="w-16" />
        </div>

        {/* Center - Navigation Links */}
        <div className="flex space-x-10">
            <a 
            href="/" 
            className="text-black font-medium text-base uppercase tracking-wide hover:text-gray-600 transition-colors duration-300"
          >
            Home
          </a>
          <a 
            href="/dashboard" 
            className="text-black font-medium text-base uppercase tracking-wide hover:text-gray-600 transition-colors duration-300"
          >
            Dashboard
          </a>
          <a 
            href="#" 
            className="text-black font-medium text-base uppercase tracking-wide hover:text-gray-600 transition-colors duration-300"
          >
            How it Works
          </a>
          <a 
            href="#" 
            className="text-black font-medium text-base uppercase tracking-wide hover:text-gray-600 transition-colors duration-300"
          >
            Service
          </a>
          <a 
            href="#" 
            className="text-black font-medium text-base uppercase tracking-wide hover:text-gray-600 transition-colors duration-300"
          >
            Top Categories
          </a>
          <a 
            href="#" 
            className="text-black font-medium text-base uppercase tracking-wide hover:text-gray-600 transition-colors duration-300"
          >
            Contact
          </a>
        </div>

        {/* Right - Sign In */}
        <div className="flex items-center space-x-4">
          <button 
            className="w-[118px] h-[40px] bg-[#FDFDFD] border border-[#0000005C] rounded-[30px] text-black font-medium hover:bg-gray-50 transition-colors flex items-center justify-center"
          >
            Sign In
          </button>

          <button className="bg-[#515DEF] text-white font-medium text-sm px-6 py-2.5 rounded-[30px]">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;