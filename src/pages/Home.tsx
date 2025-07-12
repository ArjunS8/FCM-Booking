import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Star, Users, MapPin, Clock, Shield, Smartphone } from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Booking",
      description: "Book your turf anytime, anywhere with our mobile app"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Multiple Locations",
      description: "Find the nearest FC Marina turf in Chennai"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Payments",
      description: "Safe and secure payment gateway integration"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Group Bookings",
      description: "Organize tournaments and group matches easily"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      review: "Best turf booking experience in Chennai! The app is super easy to use.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      review: "Great facilities and excellent customer service. Highly recommended!",
      rating: 5
    },
    {
      name: "Arjun Patel",
      review: "Love the online booking system. Makes it so convenient to book slots.",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* 3D Background */}
      <div className="background-3d">
        <div className="floating-shapes">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero-bg min-h-screen flex items-center justify-center relative">
        <div className="hero-content container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-shadow">
              FC Marina <span className="no-gradient-text">Turfs</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 text-shadow">
              Chennai's Premier Football Turf Booking Platform
            </p>
            <p className="text-lg text-white/90 mb-12 max-w-2xl mx-auto">
              Download our mobile app and book your favorite turf in seconds. Experience the future of sports booking with FC Marina.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <motion.a
                href="https://apps.apple.com/in/app/fc-marina-bookings/id6473527191"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl flex items-center space-x-3 hover:bg-gray-800 transition-colors duration-300 shadow-lg w-full sm:w-auto justify-center"
              >
                <svg className="w-6 sm:w-8 h-6 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs sm:text-sm">Download on the</div>
                  <div className="text-sm sm:text-lg font-semibold">App Store</div>
                </div>
              </motion.a>
              
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.ifcmarina&hl=en_IN"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl flex items-center space-x-3 hover:bg-green-700 transition-colors duration-300 shadow-lg w-full sm:w-auto justify-center"
              >
                <svg className="w-6 sm:w-8 h-6 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs sm:text-sm">Get it on</div>
                  <div className="text-sm sm:text-lg font-semibold">Google Play</div>
                </div>
              </motion.a>
            </div>

            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="glass-effect p-6 rounded-2xl"
              >
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 text-white">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold">12</div>
                    <div className="text-xs sm:text-sm">Turfs Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold">25K+</div>
                    <div className="text-xs sm:text-sm">Happy Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold">5.0</div>
                    <div className="text-xs sm:text-sm">⭐ App Rating</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-maroon-900 relative">
        {/* 3D Background for Features */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="floating-shapes">
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4 text-shadow">Why Choose FC Marina?</h2>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto text-shadow">
              Experience the best football turf booking platform in Chennai with premium features and excellent service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-maroon-600 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-maroon-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section - Moved after Features */}
      <section id="gallery-section" className="py-20 bg-gray-100 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-4xl font-bold text-maroon-900 mb-4">Our Premium Facilities</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Take a look at our world-class football turf facilities across Chennai
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                src: "https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg?auto=compress&cs=tinysrgb&w=400",
                caption: "Premium Football Turf with Floodlights"
              },
              {
                src: "https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg?auto=compress&cs=tinysrgb&w=400",
                caption: "State-of-the-art Artificial Grass"
              },
              {
                src: "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=400",
                caption: "Professional Standard Football Field"
              },
              {
                src: "https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=400",
                caption: "Well-maintained Grass Pitch"
              },
              {
                src: "https://images.pexels.com/photos/1657349/pexels-photo-1657349.jpeg?auto=compress&cs=tinysrgb&w=400",
                caption: "Modern Turf Facilities"
              },
              {
                src: "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=400",
                caption: "Evening Football Sessions"
              }
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group cursor-pointer"
              >
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={image.src}
                    alt={image.caption}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="font-semibold text-sm sm:text-base">{image.caption}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.button
              onClick={() => {
                const gallerySection = document.getElementById('gallery-section');
                if (gallerySection) {
                  gallerySection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-maroon-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-maroon-700 transition-colors duration-300 cursor-pointer"
            >
              View Full Gallery
            </motion.button>
          </div>
        </div>
      </section>

      {/* App Preview Section - Refined without star icon */}
      <section className="py-20 bg-maroon-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">
                Book Your Turf in <span className="gradient-text">3 Simple Steps</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-maroon-900">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Download the App</h3>
                    <p className="text-gray-300 text-sm sm:text-base">Get FC Marina app from Play Store or App Store</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-maroon-900">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Choose Your Turf</h3>
                    <p className="text-gray-300 text-sm sm:text-base">Select from 12 premium turfs across Chennai</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-maroon-900">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Book & Play</h3>
                    <p className="text-gray-300 text-sm sm:text-base">Secure payment and instant confirmation</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="relative">
                <div className="w-48 sm:w-64 h-72 sm:h-96 bg-white rounded-3xl shadow-2xl mx-auto p-4">
                  <div className="w-full h-full bg-gradient-to-br from-maroon-600 to-maroon-800 rounded-2xl overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=300&h=600&fit=crop"
                      alt="FC Marina Mobile App Screenshot"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900 relative">
        {/* 3D Background for Testimonials */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="floating-shapes">
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4 text-shadow">What Our Customers Say</h2>
            <p className="text-lg sm:text-xl text-white/90 text-shadow">Join thousands of satisfied customers</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="carousel-container">
              <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="carousel-slide">
                    <div className="text-center p-4 sm:p-8 bg-white rounded-xl shadow-lg mx-2 sm:mx-4">
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-sm sm:text-lg text-gray-600 mb-4 sm:mb-6">"{testimonial.review}"</p>
                      <h4 className="text-lg sm:text-xl font-semibold text-maroon-900">{testimonial.name}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;