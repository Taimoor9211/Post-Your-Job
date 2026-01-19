import React from 'react'
import { useNavigate } from 'react-router-dom'
import Image2 from "../../assets/Images/image2.jpg"
import Image3 from "../../assets/Images/image3.jpg"
import Image4 from "../../assets/Images/image4.jpg"
import Image5 from "../../assets/Images/image5.jpg"
import Image6 from "../../assets/Images/image6.jpg"
import Image7 from "../../assets/Images/image7.jpg"
import Image8 from "../../assets/Images/image8.jpg"
import Image9 from "../../assets/Images/image9.jpg"
import Image10 from "../../assets/Images/image10.jpg"
import Image11 from "../../assets/Images/image11.jpg"
import Image12 from "../../assets/Images/image12.jpg"
import Image13 from "../../assets/Images/image13.jpg"
import Image14 from "../../assets/Images/image14.jpg"
import Image15 from "../../assets/Images/image15.jpg"
import Image16 from "../../assets/Images/image16.jpg"

const ServicesCard = () => {
  const navigate = useNavigate()

  // All services data
  const servicesData = [
    {
      category: "Home Improvements",
      services: [
        { id: 1, title: "AC Installation", image: Image2 },
        { id: 2, title: "Carpentry", image: Image3 },
        { id: 3, title: "Painting & Decorating", image: Image4 }
      ]
    },
    {
      category: "Food & Drinks",
      services: [
        { id: 4, title: "Home Chef On-Demand", image: Image5 },
        { id: 5, title: "Event Catering Service", image: Image6 },
        { id: 6, title: "Custom Orders", image: Image7 }
      ]
    },
    {
      category: "Education",
      services: [
        { id: 7, title: "Maths and Science", image: Image8 },
        { id: 8, title: "Languages", image: Image9 },
        { id: 9, title: "Religious", image: Image10 }
      ]
    },
    {
      category: "Health & Beauty",
      services: [
        { id: 10, title: "Home Salon", image: Image11 },
        { id: 11, title: "Massage", image: Image12 },
        { id: 12, title: "Personal Trainer", image: Image13 }
      ]
    },
    {
      category: "Most Popular Categories",
      services: [
        { id: 13, title: "IT & Tech Support", image: Image14 },
        { id: 14, title: "Entertainment", image: Image15 },
        { id: 15, title: "Construction", image: Image16 }
      ]
    }
  ]

  // When a service is clicked
  const handleServiceClick = (service, category) => {
    navigate('/service-details', { 
      state: { 
        serviceData: {
          ...service,
          category: category,
          // Adding more details for the detail page
          description: "We specialize in providing professional and reliable services. Our team of skilled professionals is dedicated to delivering quick, safe, and long-lasting solutions.",
          reviews: [
            {
              text: "Booking the task was quick and easy. The professional arrived on time and did an excellent job. The technician was skilled, polite, and completed the work efficiently. Highly recommended!",
              author: "Satisfied Customer"
            }
          ],
          rating: 4.7,
          completionRate: 95,
          price: "Custom Pricing Based on Requirements"
        }
      } 
    })
  }

  return (
    <div className="w-full max-w-[1100px] mx-auto pb-10 px-4 sm:px-8">
      {servicesData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="py-8 sm:py-10">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 mb-6 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-0">
              {section.category}
            </h2>
            <a href="#" className="text-[#515DEF] font-medium text-base sm:text-lg hover:underline">
              View All
            </a>
          </div>

          {/* Services Grid */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 lg:gap-10">
            {section.services.map((service) => (
              <div 
                key={service.id} 
                className="w-full sm:w-[320px] lg:w-[350px] cursor-pointer group"
                onClick={() => handleServiceClick(service, section.category)}
              >
                <div className="h-[200px] sm:h-[220px] lg:h-[250px] overflow-hidden rounded-xl">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-[#515DEF] transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ServicesCard