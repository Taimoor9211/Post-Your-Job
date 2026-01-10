import React from "react";
import Image18 from "../assets/Images/Image18.png";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const ReadytoSimplifyYourLife = () => {
  return (
    <div className="relative w-full h-[650px] overflow-hidden">
      {/* Background Image with overlay */}
      <div className="absolute inset-0">
        <img
          src={Image18}
          alt="Background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#2563EB] opacity-50"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        {/* Main Heading */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6">
          Ready to Simplify Your Life?
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-center mb-10 max-w-2xl">
          Join thousands of users who have already discovered the convenience of
          <br />
          having all essential services in one powerful platform.
        </p>

        {/* App Store Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mb-16">
          {/* Google Play Button */}
          <button className="bg-black hover:bg-gray-900 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-3 min-w-[200px] transition-colors">
            <FaGooglePlay className="text-2xl" />
            <div className="text-left">
              <div className="text-xs">GET IT ON</div>
              <div className="text-lg font-semibold">Google Play</div>
            </div>
          </button>

          {/* App Store Button */}
          <button className="bg-black hover:bg-gray-900 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-3 min-w-[200px] transition-colors">
            <FaApple className="text-2xl" />
            <div className="text-left">
              <div className="text-xs">Download on the</div>
              <div className="text-lg font-semibold">App Store</div>
            </div>
          </button>
        </div>

        {/* Stats Section */}
        <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-16">
          {/* Active Users */}
          <div className="text-center">
            <div className="text-xl md:text-2xl font-bold mb-2">100K+</div>
            <div className="text-lg">Active Users</div>
          </div>

          {/* Services Delivered */}
          <div className="text-center">
            <div className="text-xl md:text-2xl font-bold mb-2">500K+</div>
            <div className="text-lg">Services Delivered</div>
          </div>

          {/* Average Rating */}
          <div className="text-center">
            <div className="text-xl md:text-2xl font-bold mb-2">4.8/5</div>
            <div className="text-lg">Average Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadytoSimplifyYourLife;
