import React from 'react'
import Image26 from '../assets/Images/Image26.jpg'
import Image27 from '../assets/Images/Image27.jpg'
import Image28 from '../assets/Images/Image28.jpg'
import Image29 from '../assets/Images/Image29.jpg'
import Image30 from '../assets/Images/Image30.jpg'
import Image31 from '../assets/Images/Image31.jpg'

const PostYourFirstTask = () => {
  return (
    <div className="w-full bg-white py-12 px-4">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Main Content Container */}
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Section */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Post your First Task<br />in seconds
            </h1>
            
            <p className="text-gray-600 text-lg mb-10">
              Share what you need, set your details, and get matched with the right experts instantly — fast, easy, and completely hassle-free.
            </p>
            
            {/* Steps with larger numbers */}
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-[#515DEF]">1</span>
                <span className="text-lg font-medium text-gray-900">Describe what you need done</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-[#515DEF]">2</span>
                <span className="text-lg font-medium text-gray-900">Set your budget</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-[#515DEF]">3</span>
                <span className="text-lg font-medium text-gray-900">Post task and pick the best Tasker</span>
              </div>
            </div>
            
            <button className="w-[175px] h-[48px] bg-[#515DEF] text-white rounded-lg font-medium hover:bg-[#4448D6]">
              Post Your Task
            </button>
          </div>
          
          {/* Right Side - Services Grid with alternating layout */}
          <div className="lg:w-1/2">
            
            {/* Container for alternating layout */}
            <div className="flex flex-col gap-4">
              
              {/* Row 1: Plumbing (Left) */}
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-xl p-2 hover:border-[#515DEF] transition-colors max-w-[80%]">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={Image26} alt="Plumbing" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Plumbing</h3>
                      <p className="text-gray-600 text-sm">Leak Repair, Pipe Installation & Replacement</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 2: Vehicle Booking (Right) */}
              <div className="flex justify-end">
                <div className="bg-white border border-gray-200 rounded-xl p-2 hover:border-[#515DEF] transition-colors max-w-[80%]">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={Image27} alt="Vehicle Booking" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 ">Vehicle Booking</h3>
                      <p className="text-gray-600 text-sm">Taxi Booking, Car Rentals, Truck Booking, Logistics</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 3: Food Delivery (Left) */}
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-xl p-2 hover:border-[#515DEF] transition-colors max-w-[80%]">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={Image28} alt="Food Delivery" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 ">Food Delivery</h3>
                      <p className="text-gray-600 text-sm">Grocery Delivery, Home Made Food, Fast food</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 4: Consultation (Right) */}
              <div className="flex justify-end">
                <div className="bg-white border border-gray-200 rounded-xl p-2 hover:border-[#515DEF] transition-colors max-w-[80%]">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={Image29} alt="Consultation" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Consultation</h3>
                      <p className="text-gray-600 text-sm">Medical checkups, Physiotherapists, Specialists</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 5: E-Commerce (Left) */}
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-xl p-2 hover:border-[#515DEF] transition-colors max-w-[80%]">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={Image30} alt="E-Commerce" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">E-Commerce</h3>
                      <p className="text-gray-600 text-sm">Online Stores, Marketplace, Classified, Buying & Selling</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 6: Home Maintenance (Right) */}
              <div className="flex justify-end">
                <div className="bg-white border border-gray-200 rounded-xl p-2 hover:border-[#515DEF] transition-colors max-w-[80%]">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={Image31} alt="Home Maintenance" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Home Maintenance</h3>
                      <p className="text-gray-600 text-sm">Leak Repair, Pipe Installation & Replacement</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        
        {/* Divider at bottom */}
        <div className="mt-12 pt-12 border-t border-gray-300"></div>
        
      </div>
    </div>
  )
}

export default PostYourFirstTask