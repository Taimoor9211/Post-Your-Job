import React from 'react';

const WelcomeSection = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-6 lg:px-12 gap-4 sm:gap-0">
      <div className="w-full sm:w-auto">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Welcome Back, Michael Joint!</h1>
        <p className="text-gray-500 text-sm sm:text-base mt-1">Let's dive in and get things done.</p>
      </div>
      <div className='flex flex-col sm:flex-row gap-3 sm:gap-5 items-start sm:items-center w-full sm:w-auto'>
        <p className="text-gray-500 text-sm sm:text-base order-2 sm:order-1 w-full sm:w-auto">May 30, 2024 - Wednesday - 12:09 PM</p>
        <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded text-sm sm:text-base w-full sm:w-auto order-1 sm:order-2 hover:bg-blue-700 transition-colors duration-200">
          + Post a Job
        </button>
      </div>
    </div>
  );
};

export default WelcomeSection;