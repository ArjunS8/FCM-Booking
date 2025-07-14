import React, { useState, useEffect } from 'react';
import { Percent, Clock, Star, ChevronLeft, ChevronRight, Gift, Zap, Crown, Siren as Fire } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const DiscountSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredOffer, setHoveredOffer] = useState<number | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const discounts = [
    {
      icon: <Fire className="w-4 h-4" />,
      title: "🔥 FLASH SALE",
      subtitle: "40% OFF",
      description: "Weekend Bookings",
      code: "FLASH40",
      color: "from-red-500 to-orange-500",
      bgColor: "bg-gradient-to-r from-red-50 to-orange-50",
      badge: "LIMITED",
      timeLeft: "2h left"
    },
    {
      icon: <Crown className="w-4 h-4" />,
      title: "👑 VIP DEAL",
      subtitle: "3 for 2",
      description: "Premium Slots",
      code: "VIP3FOR2",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-r from-purple-50 to-pink-50",
      badge: "EXCLUSIVE",
      timeLeft: "Today"
    },
    {
      icon: <Star className="w-4 h-4" />,
      title: "⭐ NEW USER",
      subtitle: "50% OFF",
      description: "First Booking",
      code: "WELCOME50",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-r from-blue-50 to-cyan-50",
      badge: "NEW",
      timeLeft: "7 days"
    },
    {
      icon: <Zap className="w-4 h-4" />,
      title: "⚡ GROUP",
      subtitle: "30% OFF",
      description: "5+ bookings",
      code: "POWER30",
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-gradient-to-r from-yellow-50 to-amber-50",
      badge: "GROUP",
      timeLeft: "This week"
    },
    {
      icon: <Gift className="w-4 h-4" />,
      title: "🎁 LOYALTY",
      subtitle: "25% OFF",
      description: "Monthly Pass",
      code: "LOYAL25",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-r from-green-50 to-emerald-50",
      badge: "MEMBERS",
      timeLeft: "Ongoing"
    }
  ];

  const toggleOffers = () => {
    setIsOpen(!isOpen);
  };

  const copyCode = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
      {/* Minimal Arrow Button - Always Visible */}
      <motion.button
        onClick={toggleOffers}
        className="relative bg-gradient-to-b from-maroon-600 to-maroon-800 text-white rounded-l-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-yellow-400/50"
        whileHover={{ 
          scale: 1.1,
          x: -2,
          boxShadow: "0 10px 25px rgba(128, 0, 32, 0.4)"
        }}
        whileTap={{ scale: 0.95 }}
        style={{
          width: '40px',
          height: '80px',
          borderTopRightRadius: '0',
          borderBottomRightRadius: '0'
        }}
      >
        {/* Animated Background Shine */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-yellow-400/30 to-transparent rounded-l-full"
          animate={{
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />

        {/* Arrow Icon */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.div
            animate={{ 
              x: isOpen ? 2 : [-2, 2, -2],
              rotate: isOpen ? 180 : 0
            }}
            transition={{ 
              x: { duration: isOpen ? 0.3 : 2, repeat: isOpen ? 0 : Infinity },
              rotate: { duration: 0.3 }
            }}
          >
            <ChevronLeft className="w-5 h-5 text-yellow-400" />
          </motion.div>
        </div>

        {/* Notification Dot */}
        <motion.div
          className="absolute -top-1 -left-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          5
        </motion.div>

        {/* Vertical Text */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-90">
          <span className="text-xs font-bold text-yellow-400 whitespace-nowrap">OFFERS</span>
        </div>
      </motion.button>

      {/* Floating Offers Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm"
              onClick={toggleOffers}
              style={{ zIndex: -1 }}
            />

            {/* Offers Panel */}
            <motion.div
              initial={{ 
                opacity: 0, 
                scale: 0.8,
                x: 100,
                y: 0
              }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                x: -50,
                y: -200
              }}
              exit={{ 
                opacity: 0, 
                scale: 0.8,
                x: 100,
                y: 0
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 25,
                duration: 0.6
              }}
              className="absolute top-0 right-0 w-64 max-h-[400px] overflow-hidden shadow-2xl"
            >
              {/* Main Panel Container */}
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="relative p-3 bg-gradient-to-r from-maroon-900 to-maroon-700 text-white text-center overflow-hidden"
                >
                  {/* Close Button */}
                  <button
                    onClick={toggleOffers}
                    className="absolute top-1 right-1 w-5 h-5 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
                  >
                    <ChevronRight className="w-3 h-3" />
                  </button>

                  <motion.h3 
                    className="text-sm font-bold text-yellow-400 flex items-center justify-center space-x-1"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span>🎯</span>
                    <span>OFFERS</span>
                    <span>🎯</span>
                  </motion.h3>
                  <p className="text-[0.65rem] text-yellow-300 mt-0.5">
                    Limited time deals
                  </p>
                </motion.div>
                
                {/* Offers List */}
                <div className="p-2 space-y-2 max-h-[300px] overflow-y-auto">
                  {discounts.map((discount, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: 0.3 + (index * 0.1),
                        duration: 0.4
                      }}
                      className="relative group cursor-pointer"
                      onMouseEnter={() => setHoveredOffer(index)}
                      onMouseLeave={() => setHoveredOffer(null)}
                    >
                      <motion.div
                        className={`relative rounded-lg p-2 border transition-all duration-300 overflow-hidden ${
                          hoveredOffer === index 
                            ? 'border-maroon-400 shadow-md' 
                            : 'border-gray-200 shadow-sm'
                        } ${discount.bgColor}`}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        {/* Content */}
                        <div className="relative z-10">
                          {/* Header Row */}
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center space-x-1">
                              <motion.div 
                                className={`text-white p-1 rounded-md bg-gradient-to-r ${discount.color}`}
                                animate={{ 
                                  rotate: hoveredOffer === index ? 360 : 0
                                }}
                                transition={{ duration: 0.5 }}
                              >
                                {discount.icon}
                              </motion.div>
                              <div>
                                <h4 className="font-bold text-gray-800 text-xs">{discount.title}</h4>
                                <p className={`text-xs font-black bg-gradient-to-r ${discount.color} bg-clip-text text-transparent`}>
                                  {discount.subtitle}
                                </p>
                              </div>
                            </div>
                            
                            <div className={`text-[0.6rem] font-bold px-1 py-0.5 rounded-full text-white bg-gradient-to-r ${discount.color}`}>
                              {discount.badge}
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-gray-600 text-[0.65rem] mb-1">{discount.description}</p>
                          
                          {/* Time Left */}
                          <p className="text-red-500 text-[0.6rem] font-bold mb-1 flex items-center space-x-1">
                            <Clock className="w-2.5 h-2.5" />
                            <span>{discount.timeLeft}</span>
                          </p>

                          {/* Action Row */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-1">
                              <span className="text-[0.6rem] text-gray-500">Code:</span>
                              <code className={`text-[0.6rem] font-bold px-1 py-0.5 rounded bg-gradient-to-r ${discount.color} text-white`}>
                                {discount.code}
                              </code>
                            </div>
                            
                            <motion.button 
                              onClick={() => copyCode(discount.code)}
                              className={`text-[0.6rem] font-bold px-2 py-0.5 rounded-md text-white bg-gradient-to-r ${discount.color} hover:shadow-md transition-all duration-200`}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {copiedCode === discount.code ? '✓' : 'COPY'}
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

                {/* Footer */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                  className="p-2 bg-gray-50 border-t border-gray-200 text-center"
                >
                  <p className="text-[0.6rem] text-gray-600">
                    💡 Click to copy code
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DiscountSidebar;