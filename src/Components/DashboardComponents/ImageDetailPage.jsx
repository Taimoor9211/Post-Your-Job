import React,{useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Star, Check, X } from "lucide-react";


const ImageDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

    useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  // Get service data from navigation state
  const service = location.state?.serviceData || {
    title: "AC General Service",
    image: require("../../assets/Images/image22.jpg"),
    category: "Home Improvements",
    description:
      "We specialize in providing professional and reliable air conditioning services for both residential and commercial spaces. Our team of skilled technicians is dedicated to delivering quick, safe, and long-lasting solutions — whether it's AC installation, routine maintenance, repairs, gas refilling, or complete system upgrades for optimal cooling performance.",
    reviews: [
      {
        text: "Hi, Booking the task was quick and easy. The professional arrived on time and did an excellent job. I availed AC service from this platform and it was really good. The technician was skilled, polite, and completed the work efficiently. Highly recommended!",
        author: "Pauline A.",
      },
    ],
    rating: 4.7,
    completionRate: 95,
    price: "Per AC (1 to 2.5 tons)",
  };

  const handleBookNow = () => {
    // Add your booking logic here
    alert(`Booking ${service.title}...`);
  };

  return (
    <div className="w-full max-w-[1161px] mx-auto p-5 py-6 md:py-10">
      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12">
        {/* Left side - Image */}
        <div className="lg:w-[600px]">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[600px] object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Right side - Details */}
        <div className="lg:w-[516px] flex-1">
          <div className="space-y-5 md:space-y-6">
            {/* Title Section */}
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {service.title}
              </h1>
              <p className="text-lg text-gray-600 mt-1">{service.price}</p>
              <span className="inline-block mt-2 px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                {service.category}
              </span>
            </div>

            <hr className="border-gray-300" />

            {/* Description Section */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Description
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>

            <hr className="border-gray-300" />

            {/* Reviews Section */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                What Reviews Says?
              </h2>
              <p className="text-gray-700 italic leading-relaxed">
                "{service.reviews[0]?.text}"
              </p>
              <p className="text-gray-900 font-medium mt-4">
                - {service.reviews[0]?.author}
              </p>
            </div>

            <hr className="border-gray-300" />

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-gray-600 font-medium mb-2">
                  Overall Ratings
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-gray-900">
                    {service.rating}
                  </span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(service.rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-gray-600 font-medium mb-2">
                  Completion Rate
                </h3>
                <div className="flex items-center gap-2">
                  <div className="text-2xl font-bold text-gray-900">
                    {service.completionRate}%
                  </div>
                </div>
              </div>
            </div>

            {/* Book Now Button */}
            <button
              onClick={handleBookNow}
              className="w-full bg-[#515DEF] text-white font-semibold py-3 rounded-full hover:bg-[#3F4BDA] transition-colors duration-300 text-lg mt-4"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Service Details Section */}
      <div className="bg-white py-16">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          {service.title}
        </h1>
        <p className="text-base md:text-lg text-gray-600 mt-2">
          {service.description}
        </p>

        <div className="flex flex-col lg:flex-row justify-between mt-6 md:mt-8 gap-6 md:gap-8">
          {/* Left Side (Includes) */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
              Includes
            </h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="w-6 h-6 bg-green-500 flex items-center justify-center rounded-full mr-3 mt-1 flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </span>
                <span className="text-gray-700">Dismounting of indoor unit</span>
              </div>
              <div className="flex items-start">
                <span className="w-6 h-6 bg-green-500 flex items-center justify-center rounded-full mr-3 mt-1 flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </span>
                <span className="text-gray-700">
                  Cleaning of indoor unit with pressure washer
                </span>
              </div>
              <div className="flex items-start">
                <span className="w-6 h-6 bg-green-500 flex items-center justify-center rounded-full mr-3 mt-1 flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </span>
                <span className="text-gray-700">
                  Cleaning of outdoor unit with pressure washer
                </span>
              </div>
              <div className="flex items-start">
                <span className="w-6 h-6 bg-green-500 flex items-center justify-center rounded-full mr-3 mt-1 flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </span>
                <span className="text-gray-700">
                  Mounting of indoor unit after cleaning
                </span>
              </div>
            </div>
          </div>

          {/* Right Side (Does Not Include) */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
              Does Not Include
            </h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="w-6 h-6 bg-red-500 flex items-center justify-center rounded-full mr-3 mt-1 flex-shrink-0">
                  <X className="w-4 h-4 text-white" />
                </span>
                <span className="text-gray-700">
                  Wash the indoor unit without dismounting
                </span>
              </div>
              <div className="flex items-start">
                <span className="w-6 h-6 bg-red-500 flex items-center justify-center rounded-full mr-3 mt-1 flex-shrink-0">
                  <X className="w-4 h-4 text-white" />
                </span>
                <span className="text-gray-700">
                  Dismounting of outdoor unit
                </span>
              </div>
              <div className="flex items-start">
                <span className="w-6 h-6 bg-red-500 flex items-center justify-center rounded-full mr-3 mt-1 flex-shrink-0">
                  <X className="w-4 h-4 text-white" />
                </span>
                <span className="text-gray-700">Any type of repair</span>
              </div>
              <div className="flex items-start">
                <span className="w-6 h-6 bg-red-500 flex items-center justify-center rounded-full mr-3 mt-1 flex-shrink-0">
                  <X className="w-4 h-4 text-white" />
                </span>
                <span className="text-gray-700">Any type of material</span>
              </div>
              <div className="flex items-start">
                <span className="w-6 h-6 bg-red-500 flex items-center justify-center rounded-full mr-3 mt-1 flex-shrink-0">
                  <X className="w-4 h-4 text-white" />
                </span>
                <span className="text-gray-700">Any type of gas</span>
              </div>
              <div className="flex items-start">
                <span className="w-6 h-6 bg-red-500 flex items-center justify-center rounded-full mr-3 mt-1 flex-shrink-0">
                  <X className="w-4 h-4 text-white" />
                </span>
                <span className="text-gray-700">Ladder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDetailPage;