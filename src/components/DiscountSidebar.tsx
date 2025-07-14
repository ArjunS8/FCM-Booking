import React, { useState, useEffect } from 'react';
import { Percent, Clock, Star, ChevronUp, ChevronDown, Gift, Zap, Crown, Siren as Fire } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const DiscountSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredOffer, setHoveredOffer] = useState<number | null>(null);
  const [pulseAnimation, setPulseAnimation] = useState(true);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const discounts = [
    {
      icon: <Fire className="w-5 h-5" />,
      title: "🔥 FLASH SALE",
      subtitle: "40% OFF",
      description: "Weekend Bookings",
      code: "FLASH40",
      color: "from-red-500 to-orange-500",
      bgColor: "bg-gradient-to-r from-red-50 to-orange-50",
      badge: "LIMITED",
      timeLeft: "2 hours left!"
    },
    {
      icon: <Crown className="w-5 h-5" />,
      title: "👑 VIP DEAL",
      subtitle: "Buy 2 Get 1 FREE",
      description: "Premium Morning Slots",
      code: "VIP3FOR2",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-r from-purple-50 to-pink-50",
      badge: "EXCLUSIVE",
      timeLeft: "Today only!"
    },
    {
      icon: <Star className="w-5 h-5" />,
      title: "⭐ NEWCOMER",
      subtitle: "50% OFF",
      description: "First Time Users",
      code: "WELCOME50",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-r from-blue-50 to-cyan-50",
      badge: "NEW USER",
      timeLeft: "Valid for 7 days"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "⚡ POWER HOUR",
      subtitle: "30% OFF",
      description: "Group Bookings (5+)",
      code: "POWER30",
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-gradient-to-r from-yellow-50 to-amber-50",
      badge: "GROUP",
      timeLeft: "This week only"
    },
    {
      icon: <Gift className="w-5 h-5" />,
      title: "🎁 LOYALTY",
      subtitle: "25% OFF",
      description: "Monthly Pass Holders",
      code: "LOYAL25",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-r from-green-50 to-emerald-50",
      badge: "MEMBERS",
      timeLeft: "Ongoing benefit"
    }
  ];

  // Pulse animation control
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseAnimation(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="relative">
        {/* Compact Trigger Button - Always Visible */}
        <motion.button
          onClick={toggleOffers}
          className="relative bg-gradient-to-r from-maroon-900 via-maroon-800 to-maroon-900 text-white p-3 rounded-l-2xl hover:from-maroon-800 hover:to-maroon-700 transition-all duration-300 cursor-pointer shadow-2xl border-2 border-yellow-400/30 flex items-center space-x-2 overflow-hidden"
          whileHover={{ 
            scale: 1.05,
            x: -5,
            boxShadow: "0 20px 40px rgba(255, 215, 0, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          animate={{
            x: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
            duration: 0.6
          }}
        >
          {/* Animated Background Gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex items-center space-x-2">
            <motion.div
              animate={{ 
                scale: pulseAnimation ? [1, 1.1, 1] : 1,
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Gift className="w-5 h-5 text-yellow-400" />
            </motion.div>
            
            <div className="text-left">
              <motion.div 
                className="text-yellow-400 font-bold text-xs whitespace-nowrap"
                animate={{ 
                  scale: pulseAnimation ? [1, 1.05, 1] : 1,
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                🎯 Offers
              </motion.div>
            </div>

            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronUp className="w-4 h-4 text-yellow-400" />
            </motion.div>
          </div>

          {/* Notification Badge */}
          <motion.div
            className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
            animate={{
              scale: pulseAnimation ? [1, 1.2, 1] : 1,
            }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            5
          </motion.div>
        </motion.button>

        {/* Offers Panel - Only Shows When Open */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ 
                opacity: 0, 
                scale: 0.3,
                x: 100,
                rotateY: -90
              }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                x: -320,
                rotateY: 0
              }}
              exit={{ 
                opacity: 0, 
                scale: 0.3,
                x: 100,
                rotateY: 90
              }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 20,
                duration: 0.8,
                opacity: { duration: 0.5 },
                scale: { duration: 0.6 },
                rotateY: { duration: 0.7 }
              }}
              className="absolute top-0 right-0 w-80 max-h-[500px] overflow-hidden"
              style={{ perspective: '1000px' }}
            >
              {/* Main Panel Container */}
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                {/* Animated Header */}
                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="relative p-6 bg-gradient-to-r from-maroon-900 via-maroon-800 to-maroon-900 text-white text-center overflow-hidden"
                >
                  {/* Animated Background Pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-20"
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                      duration: 10,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                    style={{
                      backgroundImage: 'radial-gradient(circle, #FFD700 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }}
                  />
                  
                  <div className="relative z-10">
                    <motion.h3 
                      className="text-xl font-bold text-yellow-400 flex items-center justify-center space-x-2"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span>🎯</span>
                      <span>EXCLUSIVE DEALS</span>
                      <span>🎯</span>
                    </motion.h3>
                    <motion.p 
                      className="text-sm text-yellow-300 mt-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      Limited time offers - Act fast!
                    </motion.p>
                  </div>
                </motion.div>
                
                {/* Offers List with Advanced Animations */}
                <div className="p-4 space-y-3 max-h-80 overflow-y-auto">
                  {discounts.map((discount, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50, rotateX: -90 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      transition={{ 
                        delay: 0.4 + (index * 0.1),
                        duration: 0.6,
                        type: "spring",
                        stiffness: 200,
                        damping: 15
                      }}
                      className="relative group cursor-pointer"
                      onMouseEnter={() => setHoveredOffer(index)}
                      onMouseLeave={() => setHoveredOffer(null)}
                      style={{ perspective: '1000px' }}
                    >
                      <motion.div
                        className={`relative rounded-2xl p-4 border-2 transition-all duration-300 overflow-hidden ${
                          hoveredOffer === index 
                            ? 'border-maroon-400 shadow-xl' 
                            : 'border-gray-200 shadow-md'
                        } ${discount.bgColor}`}
                        whileHover={{ 
                          scale: 1.02,
                          rotateY: 5,
                          z: 50
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Animated Background Gradient */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${discount.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                          animate={{
                            x: hoveredOffer === index ? ['-100%', '100%'] : '100%',
                          }}
                          transition={{
                            duration: 1.5,
                            ease: "easeInOut",
                            repeat: hoveredOffer === index ? Infinity : 0,
                          }}
                        />

                        {/* Content */}
                        <div className="relative z-10">
                          {/* Header Row */}
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              <motion.div 
                                className={`text-white p-2 rounded-lg bg-gradient-to-r ${discount.color}`}
                                animate={{ 
                                  rotate: hoveredOffer === index ? 360 : 0,
                                  scale: hoveredOffer === index ? 1.1 : 1
                                }}
                                transition={{ duration: 0.6 }}
                              >
                                {discount.icon}
                              </motion.div>
                              <div>
                                <h4 className="font-bold text-gray-800 text-sm">{discount.title}</h4>
                                <p className={`text-lg font-black bg-gradient-to-r ${discount.color} bg-clip-text text-transparent`}>
                                  {discount.subtitle}
                                </p>
                              </div>
                            </div>
                            
                            <motion.div 
                              className={`text-xs font-bold px-2 py-1 rounded-full text-white bg-gradient-to-r ${discount.color}`}
                              animate={{ 
                                scale: hoveredOffer === index ? [1, 1.1, 1] : 1,
                              }}
                              transition={{ duration: 0.5, repeat: hoveredOffer === index ? Infinity : 0 }}
                            >
                              {discount.badge}
                            </motion.div>
                          </div>

                          {/* Description */}
                          <p className="text-gray-600 text-sm mb-3 font-medium">{discount.description}</p>
                          
                          {/* Time Left */}
                          <motion.p 
                            className="text-red-500 text-xs font-bold mb-3 flex items-center space-x-1"
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <Clock className="w-3 h-3" />
                            <span>{discount.timeLeft}</span>
                          </motion.p>

                          {/* Action Row */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <span className="text-xs text-gray-500 font-mono">Code:</span>
                              <code className={`text-xs font-bold px-2 py-1 rounded bg-gradient-to-r ${discount.color} text-white`}>
                                {discount.code}
                              </code>
                            </div>
                            
                            <motion.button 
                              onClick={() => copyCode(discount.code)}
                              className={`text-xs font-bold px-3 py-1 rounded-lg text-white bg-gradient-to-r ${discount.color} hover:shadow-lg transition-all duration-300`}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {copiedCode === discount.code ? '✓ COPIED!' : 'COPY'}
                            </motion.button>
                          </div>
                        </div>

                        {/* Hover Glow Effect */}
                        <motion.div
                          className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${discount.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                          animate={{
                            scale: hoveredOffer === index ? [1, 1.05, 1] : 1,
                          }}
                          transition={{ duration: 1, repeat: hoveredOffer === index ? Infinity : 0 }}
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

                {/* Footer with Call-to-Action */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200 text-center"
                >
                  <motion.p 
                    className="text-xs text-gray-600 mb-2"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    💡 Tap any offer to copy the code instantly
                  </motion.p>
                  <motion.button
                    onClick={toggleOffers}
                    className="text-xs text-maroon-600 hover:text-maroon-800 font-medium"
                    whileHover={{ scale: 1.05 }}
                  >
                    Close offers panel
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DiscountSidebar;