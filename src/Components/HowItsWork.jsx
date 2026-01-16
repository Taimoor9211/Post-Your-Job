import React from "react"
import { Search } from "lucide-react"
import Image2 from "../assets/Images/image2.jpg"
import Image3 from "../assets/Images/image3.jpg"
import Image4 from "../assets/Images/image4.jpg"
import Image5 from "../assets/Images/image5.jpg"
import Image6 from "../assets/Images/image6.jpg"
import Image7 from "../assets/Images/image7.jpg"
import Image8 from "../assets/Images/image8.jpg"
import Image9 from "../assets/Images/image9.jpg"
import Image10 from "../assets/Images/image10.jpg"
import Image11 from "../assets/Images/image11.jpg"
import Image12 from "../assets/Images/image12.jpg"
import Image13 from "../assets/Images/image13.jpg"
import Image14 from "../assets/Images/image14.jpg"
import Image15 from "../assets/Images/image15.jpg"
import Image16 from "../assets/Images/image16.jpg"

const HowItsWork = () => {
  const tags = [
    "Event Cattering",
    "Ac Installation",
    "Carpentry",
    "Painting & decorating",
    "Languages",
    "Home Salon",
    "Massage",
    "Gym Trainer",
    "Construction",
  ]

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center px-4 pt-12 pb-14">
      {/* Search Section */}
      <div className="w-full max-w-[1000px] bg-white flex flex-col items-center gap-6 p-4 mb-20">
        <div className="w-full max-w-[950px] h-[80px] bg-white rounded-[50px] shadow-xl flex items-center justify-between px-8">
          <div className="flex items-center flex-grow">
            <Search className="w-6 h-6 text-gray-400 mr-4" />
            <input
              type="text"
              placeholder="Search anything...."
              className="w-full h-full text-lg placeholder:text-gray-400 focus:outline-none"
            />
          </div>
          <button className="w-[134px] h-[57px] bg-[#515DEF] text-white rounded-[50px] font-medium text-base hover:bg-[#4448D6]">
            Search
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-[#F3F7FF] text-[#515DEF] rounded-[36px] text-sm font-medium"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>

      {/* Home Improvements Section */}
      <div className="w-full max-w-[1100px] mx-auto pb-10">
        <div className="flex justify-between items-center px-4 mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Home Improvements</h2>
          <a href="#" className="text-[#515DEF] font-medium text-lg hover:underline">
            View All
          </a>
        </div>

        <div className="flex justify-center gap-10">
          <div className="w-[350px]">
            <div className="h-[250px]">
              <img src={Image2} alt="AC Installation" className="w-full h-full object-cover rounded-xl" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">AC Installation</h3>
            </div>
          </div>

          <div className="w-[350px]">
            <div className="h-[250px]">
              <img src={Image3} alt="Carpentry" className="w-full h-full object-cover rounded-xl" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">Carpentry</h3>
            </div>
          </div>

          <div className="w-[350px]">
            <div className="h-[250px]">
              <img src={Image4} alt="Painting & Decorating" className="w-full h-full object-cover rounded-xl" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">Painting & Decorating</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Food & Drinks Section */}
      <div className="w-full max-w-[1100px] mx-auto py-10">
        <div className="flex justify-between items-center px-4 mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Food & Drinks</h2>
          <a href="#" className="text-[#515DEF] font-medium text-lg hover:underline">
            View All
          </a>
        </div>

        <div className="flex justify-center gap-10">
          <div className="w-[350px]">
            <div className="h-[250px]">
              <img src={Image5} alt="Home Chef On-Demand" className="w-full h-full object-cover rounded-xl" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">Home Chef On-Demand</h3>
            </div>
          </div>

          <div className="w-[350px]">
            <div className="h-[250px]">
              <img src={Image6} alt="Event Catering Service" className="w-full h-full object-cover rounded-xl" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">Event Catering Service</h3>
            </div>
          </div>

          <div className="w-[350px]">
            <div className="h-[250px]">
              <img src={Image7} alt="Custom Orders" className="w-full h-full object-cover rounded-xl" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">Custom Orders</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="w-full max-w-[1100px] mx-auto py-10">
        <div className="flex justify-between items-center px-4 mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Education</h2>
          <a href="#" className="text-[#515DEF] font-medium text-lg hover:underline">
            View All
          </a>
        </div>

        <div className="flex justify-center gap-10">
          <div className="w-[350px]">
            <div className="h-[250px]">
              <img src={Image8} alt="Maths and Science" className="w-full h-full object-cover rounded-xl" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">Maths and Science</h3>
            </div>
          </div>

          <div className="w-[350px]">
            <div className="h-[250px]">
              <img src={Image9} alt="Languages" className="w-full h-full object-cover rounded-xl" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">Languages</h3>
            </div>
          </div>

          <div className="w-[350px]">
            <div className="h-[250px]">
              <img src={Image10} alt="Religious" className="w-full h-full object-cover rounded-xl" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">Religious</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Health & Beauty Section */}
      <div className="w-full max-w-[1100px] mx-auto py-10">
        <div className="flex justify-between items-center px-4 mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Health & Beauty</h2>
          <a href="#" className="text-[#515DEF] font-medium text-lg hover:underline">
            View All
          </a>
        </div>

        <div className="flex justify-center gap-10">
          <div className="w-[350px]">
            <div className="h-[250px]">
              <img src={Image11} alt="Home Salon" className="w-full h-full object-cover rounded-xl" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">Home Salon</h3>
            </div>
          </div>

          <div className="w-[350px]">
            <div className="h-[250px]">
              <img src={Image12} alt="Massage" className="w-full h-full object-cover rounded-xl" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">Massage</h3>
            </div>
          </div>

          <div className="w-[350px]">
            <div className="h-[250px]">
              <img src={Image13} alt="Personal Trainer" className="w-full h-full object-cover rounded-xl" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">Personal Trainer</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Most Popular Categories Section */}
      <div className="w-full max-w-[1100px] mx-auto pt-10">
        <div className="flex justify-between items-center px-4 mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Most Popular Categories</h2>
          <a href="#" className="text-[#515DEF] font-medium text-lg hover:underline">
            View All
          </a>
        </div>

        <div className="flex justify-center gap-10">
          <div className="w-[350px]">
            <div className="h-[250px]">
              <img src={Image14} alt="IT & Tech Support" className="w-full h-full object-cover rounded-xl" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">IT & Tech Support</h3>
            </div>
          </div>

          <div className="w-[350px]">
            <div className="h-[250px]">
              <img src={Image15} alt="Entertainment" className="w-full h-full object-cover rounded-xl" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">Entertainment</h3>
            </div>
          </div>

          <div className="w-[350px]">
            <div className="h-[250px]">
              <img src={Image16} alt="Construction" className="w-full h-full object-cover rounded-xl" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">Construction</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItsWork