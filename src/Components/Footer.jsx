import React from "react";
import Logo from "../assets/Images/logo.png";
import { FaApple, FaGooglePlay, FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-10">

          {/* Left Section - Description and Links */}
          <div className="lg:w-1/2">
            <div className="flex flex-col items-start">
              <img src={Logo} alt="Logo" className="w-16 h-16 mb-2" />
              <p className="text-gray-300 text-lg mt-2">
                Our app is your all-in-one lifestyle app – designed to connect people, 
                simplify routines, and create opportunities for everyone.
              </p>
              <div className="mt-4">
                <ul className="flex space-x-6">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">Overview</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">Features</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">Careers</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">Help</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">Privacy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Section - App Download */}
          <div className="lg:w-1/5">
            <h3 className="font-bold text-lg mb-4">Get the App</h3>
            <div className="space-y-4">
              {/* App Store Button */}
              <button className=" text-white py-3 px-4 rounded-lg flex items-center justify-start gap-3 w-full transition-colors border-2 border-white">
                <FaApple className="text-2xl" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-md font-semibold">App Store</div>
                </div>
              </button>

              {/* Google Play Button */}
              <button className=" text-white py-3 px-4 rounded-lg flex items-center justify-start gap-3 w-full transition-colors border-2 border-white">
                <FaGooglePlay className="text-2xl" />
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-md font-semibold">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col items-center md:flex-row md:justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Our Website. All rights reserved.
          </p>
          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a href="#" className="bg-gray-800 hover:bg-blue-500 p-2 rounded-full transition-colors">
              <FaTwitter className="text-xl" />
            </a>
            <a href="#" className="bg-gray-800 hover:bg-blue-700 p-2 rounded-full transition-colors">
              <FaFacebookF className="text-xl" />
            </a>
            <a href="#" className="bg-gray-800 hover:bg-blue-600 p-2 rounded-full transition-colors">
              <FaLinkedinIn className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;