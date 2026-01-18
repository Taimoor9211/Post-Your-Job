import React from 'react';

const Review = () => {
  // Sample rating state (could be managed with hooks in a real application)
  const ratings = {
    service: 5,
    reliability: 5,
    punctuality: 5,
    solution: 5,
  };

  const renderStars = (count) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`cursor-pointer text-lg sm:text-xl md:text-2xl lg:text-3xl ${index < count ? "text-blue-600" : "text-gray-300"}`}>
        ★
      </span>
    ));
  };

  return (
    <div className='w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-12 lg:py-16'>
      <div className='w-full max-w-[383px] mb-6 md:mb-8'>
        <h1 className='text-xl sm:text-2xl font-bold'>How was your experience?</h1>
        <p className='text-gray-600 text-sm sm:text-base'>Your feedback helps us improve.</p>
      </div>

      <div className='w-full max-w-[383px] mb-6 md:mb-8 space-y-4 sm:space-y-6'>
        <div className='flex justify-between items-center text-center'>
          <h3 className='font-semibold text-sm sm:text-base md:text-lg'>Service</h3>
          <div className='ml-2 sm:ml-4'>{renderStars(ratings.service)}</div>
        </div>
        <div className='flex justify-between items-center text-center'>
          <h3 className='font-semibold text-sm sm:text-base md:text-lg'>Reliability</h3>
          <div className='ml-2 sm:ml-4'>{renderStars(ratings.reliability)}</div>
        </div>
        <div className='flex justify-between items-center text-center'>
          <h3 className='font-semibold text-sm sm:text-base md:text-lg'>Punctuality</h3>
          <div className='ml-2 sm:ml-4'>{renderStars(ratings.punctuality)}</div>
        </div>
        <div className='flex justify-between items-center text-center'>
          <h3 className='font-semibold text-sm sm:text-base md:text-lg'>Solution</h3>
          <div className='ml-2 sm:ml-4'>{renderStars(ratings.solution)}</div>
        </div>
      </div>
      
      <div className='w-full max-w-[1040px] mb-6 md:mb-8'>
        <h2 className='font-semibold text-sm sm:text-base md:text-lg mb-2 sm:mb-3'>Add comment</h2>
        <textarea 
          className='w-full h-[120px] sm:h-[140px] md:h-[150px] bg-[#F5F5F5] rounded-lg p-3 sm:p-4 border border-gray-300 text-sm sm:text-base' 
          placeholder='Share your thoughts or suggestions…'
        ></textarea>
      </div>
      
      <div className='w-full max-w-[200px]'>
        <button className='w-full h-[36px] sm:h-[40px] bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors duration-300 text-sm sm:text-base'>
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default Review;