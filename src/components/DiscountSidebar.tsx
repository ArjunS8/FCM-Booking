import React, { useState } from 'react';
import { Percent, Clock, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const DiscountSidebar = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  const discounts = [
    {
      icon: <Percent className="w-5 h-5" />,
      title: "30% OFF",
      description: "Weekend Bookings",
      code: "WEEKEND30"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Buy 2 Get 1 Free",
      description: "Morning Slots",
      code: "MORNING3"
    },
    {
      icon: <Star className="w-5 h-5" />,
      title: "25% OFF",
      description: "First Time Users",
      code: "NEWUSER25"
    },
    {
      icon: <Percent className="w-5 h-5" />,
      title: "20% OFF",
      description: "Group Bookings",
      code: "GROUP20"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "15% OFF",
      description: "Monthly Pass",
      code: "MONTHLY15"
    }
  ];

  return (
    <div className={`fixed right-4 top-1/2 transform -translate-y-1/2 z-50 transition-all duration-500 ${
      isMinimized ? 'translate-x-44' : 'translate-x-0'
    } hidden lg:block`}>
      <div className="bg-gradient-to-br from-maroon-900 to-maroon-800 text-white rounded-2xl shadow-2xl relative border-2 border-yellow-400/20">
        {/* Minimize/Maximize Button */}
        <button
          onClick={() => setIsMinimized(!isMinimized)}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full bg-gradient-to-r from-maroon-900 to-maroon-800 text-white p-3 rounded-l-xl hover:from-maroon-800 hover:to-maroon-700 transition-all duration-300 cursor-pointer shadow-lg border-2 border-yellow-400/20 border-r-0"
        >
          {isMinimized ? (
            <ChevronLeft className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          )}
        </button>

        <div className="w-52">
          <div className="p-4 border-b border-yellow-400/30 bg-gradient-to-r from-yellow-400/10 to-yellow-500/10">
            <h3 className="text-lg font-bold text-center text-yellow-400 flex items-center justify-center space-x-2">
              <span>🎯</span>
              <span>Special Offers</span>
              <span>🎯</span>
            </h3>
            <p className="text-xs text-center text-yellow-300 mt-1">Limited Time Only!</p>
          </div>
          
          <div className="p-4 space-y-3 max-h-96 overflow-hidden relative">
            <div className="discount-scroll space-y-3">
            {discounts.concat(discounts).map((discount, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-maroon-800/80 to-maroon-700/80 rounded-lg p-3 hover:from-maroon-700 hover:to-maroon-600 transition-all duration-300 cursor-pointer border border-yellow-400/20 hover:border-yellow-400/40 hover:shadow-lg transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                  <div className="text-yellow-400">
                    {discount.icon}
                  </div>
                  <span className="font-bold text-yellow-400">{discount.title}</span>
                  </div>
                  <div className="text-xs bg-yellow-400 text-maroon-900 px-2 py-1 rounded-full font-bold">
                    HOT
                  </div>
                </div>
                <p className="text-sm text-gray-200 mb-2">{discount.description}</p>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-yellow-300 font-mono bg-maroon-900/50 px-2 py-1 rounded">
                    {discount.code}
                  </p>
                  <button className="text-xs bg-yellow-400 text-maroon-900 px-2 py-1 rounded font-bold hover:bg-yellow-300 transition-colors">
                    COPY
                  </button>
                </div>
              </div>
            ))}
            </div>
            
            {/* Gradient Overlay for Scroll Effect */}
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-maroon-900 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountSidebar;