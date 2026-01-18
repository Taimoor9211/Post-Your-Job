import React from "react";
import Image17 from "../assets/Images/image17.png";
import Image19 from "../assets/Images/image19.jpg";

const Trustandsafety = () => {
  return (
    <div className="max-w-[1100px] mx-auto  flex flex-col md:flex-row relative items-center gap-14 mb-10">
      {/* Left side with image and background */}
      <div className="flex-1 relative">
        <div className="bg-[#29BAF9] w-[290px] h-[528px] absolute left-[170px] top-[-83px] z-5 rounded-lg"></div>
        <div className="bg-[#515DEF] w-[380px] h-[465px] absolute left-[80px] top-[-20px] z-0 rounded-lg"></div>
        <img
          src={Image17}
          alt="Trust and Safety Features"
          className="w-[380px] h-[465px] z-10 relative top-[-20px] left-[50px]"
        />
        {/* Testimonial section - FIXED: changed left-[-100] to left-[-100px] */}
        <div className="mt-8 absolute bottom-10 left-[-60px] bg-white shadow-lg rounded-lg p-2 w-[250px] ml-4 mb-4 z-20">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center mr-4">
              <img src={Image19} alt="" className="rounded-full" />
            </div>
            <div>
              <h4 className="font-bold text-gray-800">Michael John</h4>
              <div className="flex items-center">
                <div className="flex text-yellow-500">
                  <span className="text-xl">★</span>
                </div>
                <span className="ml-2 font-medium text-gray-700">4.8</span>
                <span className="ml-1 text-gray-500">(41 reviews)</span>
              </div>
            </div>
          </div>
        </div>
        {/* Status indicators - MOVED to right column for better layout */}
        <div className="flex items-center gap-8 mt-8 mb-8 absolute bottom-10 left-[-20px]">
          <div className="flex items-center absolute bottom-85 left-[400px] z-10 bg-[#FFFFD5] p-1 rounded-full w-48">
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center mr-3">
              <span className="text-white font-bold">✓</span>
            </div>
            <div>
              <h4 className=" text-gray-800">Job Completed</h4>
            </div>
          </div>

          <div className="flex items-center absolute bottom-100 left-[350px] z-10 bg-[#FFFFD5] p-1 rounded-full w-48">
            <div className="w-8 h-8 rounded-full bg-[#515DEF] flex items-center justify-center mr-3">
              <span className="text-white font-bold">$</span>
            </div>
            <div>
              <h4 className=" text-gray-800">Payment Released</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Right side content */}
      <div className="flex-1 p-8">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Trust and Safety Features for Your Protection
        </h2>

        <div className="space-y-8 mb-8">
          {/* Secure Payments */}
          <div>
            <h3 className="text-xl font-semibold text-[#515DEF] mb-2">
              Secure Payments
            </h3>
            <p className="text-gray-600 mb-2">
              Make every transaction with confidence. Jobscando ensures fast,
              safe, and fully protected payments for both customers and
              providers.
            </p>
            <h6 className="text-[#515DEF] cursor-pointer font-medium hover:underline inline-block">
              Read More
            </h6>
          </div>

          {/* Trusted Ratings and Reviews */}
          <div>
            <h3 className="text-xl font-semibold text-[#515DEF] mb-2">
              Trusted Ratings and Reviews
            </h3>
            <p className="text-gray-600 mb-2">
              Get honest feedback from real customers. Jobscando's trusted
              ratings and reviews help you choose the right professionals with
              confidence.
            </p>
            <h6 className="text-[#515DEF] cursor-pointer font-medium hover:underline inline-block">
              Read More
            </h6>
          </div>

          {/* Insurance */}
          <div>
            <h3 className="text-xl font-semibold text-[#515DEF] mb-2">
              Insurance
            </h3>
            <p className="text-gray-600 mb-2">
              Your safety matters to us. Jobscando offers insured services,
              giving you peace of mind knowing every booking is protected.
            </p>
            <h6 className="text-[#515DEF] cursor-pointer font-medium hover:underline inline-block">
              Read More
            </h6>
          </div>
        </div>

        {/* Post Your Task Button */}
        <button className="bg-[#515DEF] text-white py-3 px-8 rounded-lg font-semibold text-lg hover:bg-[#434BD0] transition-colors shadow-md hover:shadow-lg">
          Post Your Task
        </button>
      </div>
    </div>
  );
};

export default Trustandsafety;
