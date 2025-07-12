import React, { useState } from 'react';
import { Percent, Clock, Star, ChevronUp, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const DiscountSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  const toggleOffers = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="relative">
        {/* Toggle Button - Always Visible */}
        <motion.button
          onClick={toggleOffers}
          className="bg-gradient-to-r from-maroon-900 to-maroon-800 text-white p-4 rounded-l-2xl hover:from-maroon-800 hover:to-maroon-700 transition-all duration-300 cursor-pointer shadow-lg border-2 border-yellow-400/20 flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            x: isOpen ? -256 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
        >
          <span className="text-yellow-400 font-bold text-sm whitespace-nowrap">Special Offers</span>
          {isOpen ? (
            <ChevronDown className="w-4 h-4 text-yellow-400" />
          ) : (
            <ChevronUp className="w-4 h-4 text-yellow-400" />
          )}
        </motion.button>

        {/* Offers Panel - Gradual Expansion with Floating Effect */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ 
                opacity: 0, 
                scale: 0.8,
                x: 100,
                y: 50
              }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                x: 0,
                y: 0
              }}
              exit={{ 
                opacity: 0, 
                scale: 0.8,
                x: 100,
                y: 50
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 25,
                duration: 0.6,
                opacity: { duration: 0.4 },
                scale: { duration: 0.5 },
                x: { duration: 0.6 },
                y: { duration: 0.6 }
              }}
              className="absolute bottom-0 right-16 bg-gradient-to-br from-maroon-900 to-maroon-800 text-white rounded-2xl shadow-2xl border-2 border-yellow-400/20 w-64"
            >
              {/* Header with Centered Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="p-4 border-b border-yellow-400/30 bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 rounded-t-2xl text-center"
              >
                <h3 className="text-lg font-bold text-yellow-400 flex items-center justify-center space-x-2">
                  <span>🎯</span>
                  <span>Special Offers</span>
                  <span>🎯</span>
                </h3>
                <p className="text-xs text-yellow-300 mt-1">Limited Time Only!</p>
              </motion.div>
              
              {/* Content with Floating Upward Animation */}
              <div className="p-4 space-y-3 max-h-80 overflow-y-auto">
                {discounts.map((discount, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: 0.3 + (index * 0.1),
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200,
                      damping: 20
                    }}
                    className="bg-gradient-to-r from-maroon-800/80 to-maroon-700/80 rounded-lg p-3 hover:from-maroon-700 hover:to-maroon-600 transition-all duration-300 cursor-pointer border border-yellow-400/20 hover:border-yellow-400/40 hover:shadow-lg transform hover:scale-105"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <motion.div 
                          className="text-yellow-400"
                          initial={{ rotate: 0 }}
                          animate={{ rotate: 360 }}
                          transition={{ delay: 0.5 + (index * 0.1), duration: 0.6 }}
                        >
                          {discount.icon}
                        </motion.div>
                        <span className="font-bold text-yellow-400">{discount.title}</span>
                      </div>
                      <motion.div 
                        className="text-xs bg-yellow-400 text-maroon-900 px-2 py-1 rounded-full font-bold"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.6 + (index * 0.1), type: "spring", stiffness: 300 }}
                      >
                        HOT
                      </motion.div>
                    </div>
                    <p className="text-sm text-gray-200 mb-2">{discount.description}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-yellow-300 font-mono bg-maroon-900/50 px-2 py-1 rounded">
                        {discount.code}
                      </p>
                      <button 
                        onClick={() => navigator.clipboard.writeText(discount.code)}
                        className="text-xs bg-yellow-400 text-maroon-900 px-2 py-1 rounded font-bold hover:bg-yellow-300 transition-colors"
                      >
                        COPY
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Floating Close Hint */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.3 }}
                className="p-3 text-center border-t border-yellow-400/20"
              >
                <p className="text-xs text-yellow-300/70">Click button again to close</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DiscountSidebar;