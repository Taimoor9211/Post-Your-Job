import React from 'react';
import { Search, MapPin } from 'lucide-react';

const ServicesHeroSection = () => {
  return (
    <div className="w-full h-[380px] max-w-[1440px] mx-auto flex flex-col justify-center items-start px-14 py-4 bg-white">
      {/* Header Section */}
      <div className="mb-8 w-full">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Get the <span className="text-[#515DEF]">service</span> you need today.
        </h1>
        <p className="text-lg text-gray-600">
          From home repairs to personal care—reliable providers are one tap away.
        </p>
      </div>

      {/* Search Form Section */}
      <div className="w-full flex items-center bg-white shadow-lg p-2 border border-gray-200">
        {/* Service Type Input */}
        <div className="flex-1 flex items-center px-4 py-3">
          <Search className="h-5 w-5 text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="What type of service are you looking for?"
            className="flex-1 outline-none text-gray-700 placeholder-gray-500 text-base w-full"
          />
        </div>

        {/* Divider */}
        <div className="h-8 w-px bg-gray-300 mx-2"></div>

        {/* Location Input */}
        <div className="flex items-center px-4 py-3">
          <MapPin className="h-5 w-5 text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Location"
            className="outline-none text-gray-700 placeholder-gray-500 text-base w-40"
          />
        </div>

        {/* Search Button */}
        <button className="ml-4 bg-[#515DEF] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#3F4BDA] transition-colors duration-200 whitespace-nowrap">
          Search Service
        </button>
      </div>
    </div>
  );
};

export default ServicesHeroSection;