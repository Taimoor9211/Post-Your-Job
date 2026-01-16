import React from "react";
import { 
  Home, 
  BookOpen, 
  Music, 
  Hammer, 
  Truck, 
  Heart, 
  Coffee 
} from "lucide-react";

const Categories = () => {
  const categories = [
    { icon: <Home className="h-8 w-8" />, name: "Home improvements" },
    { icon: <BookOpen className="h-8 w-8" />, name: "Education" },
    { icon: <Music className="h-8 w-8" />, name: "Entertainment" },
    { icon: <Hammer className="h-8 w-8" />, name: "Tradesman & Construction" },
    { icon: <Truck className="h-8 w-8" />, name: "Transport" },
    { icon: <Heart className="h-8 w-8" />, name: "Health and Beauty" },
    { icon: <Coffee className="h-8 w-8" />, name: "Food and Drink" },
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto py-6">
      <div className="flex justify-center items-center gap-2">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center justify-center w-36 h-36" // Changed width and height to w-32 and h-32 for consistency
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-blue-50 mb-3">
              <div className="text-blue-600">
                {category.icon}
              </div>
            </div>
            <p className="text-center text-xs  text-gray-800">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;