import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, User, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+91 9876543210", "+91 9876543211"],
      action: "tel:+919876543210"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@fcmarina.com", "bookings@fcmarina.com"],
      action: "mailto:info@fcmarina.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Head Office",
      details: ["123 Marina Beach Road", "Chennai, Tamil Nadu 600001"],
      action: "https://maps.google.com/?q=Marina+Beach+Chennai"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Operating Hours",
      details: ["Mon - Sun: 6:00 AM - 11:00 PM", "Customer Support: 24/7"],
      action: null
    }
  ];

  const locations = [
    {
      name: "FC Marina Adyar",
      address: "123 Marina Beach Road, Adyar",
      phone: "+91 9876543210",
      mapUrl: "https://maps.google.com/?q=Marina+Beach+Chennai"
    },
    {
      name: "FC Marina Velachery",
      address: "456 Velachery Main Road",
      phone: "+91 9876543211",
      mapUrl: "https://maps.google.com/?q=Velachery+Chennai"
    },
    {
      name: "FC Marina OMR",
      address: "789 Old Mahabalipuram Road",
      phone: "+91 9876543212",
      mapUrl: "https://maps.google.com/?q=OMR+Chennai"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 relative">
      {/* 3D Background */}
      <div className="background-3d">
        <div className="floating-shapes">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-shadow">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto text-shadow px-4">
            Have questions about our turfs or need help with bookings? We're here to help you 24/7.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold text-maroon-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
                    required
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <div className="relative">
                <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div className="relative">
                <MessageCircle className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={5}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-maroon-600 text-white py-3 rounded-lg font-semibold hover:bg-maroon-700 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-maroon-600 bg-maroon-50 p-3 rounded-lg">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-maroon-900 mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 mb-1">{detail}</p>
                      ))}
                      {info.action && (
                        <a
                          href={info.action}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-maroon-600 hover:text-maroon-700 font-medium inline-flex items-center mt-2"
                        >
                          {info.title === "Phone" && "Call Now"}
                          {info.title === "Email" && "Send Email"}
                          {info.title === "Head Office" && "Get Directions"}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Locations Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 text-shadow">Our Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-maroon-900 mb-3">{location.name}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">{location.address}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">{location.phone}</span>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <a
                    href={location.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-maroon-600 text-white py-2 px-4 rounded-lg text-center hover:bg-maroon-700 transition-colors duration-300"
                  >
                    Get Directions
                  </a>
                  <a
                    href={`tel:${location.phone}`}
                    className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg text-center hover:bg-green-700 transition-colors duration-300"
                  >
                    Call
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-maroon-900 text-center mb-8">Find Us</h2>
            <div className="aspect-video rounded-lg overflow-hidden h-64 sm:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8155087959673!2d80.26570731482196!3d13.0475815908074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266c4ddf2b031%3A0x1d69b7a3d0c0d5b4!2sMarina%20Beach%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1735000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="FC Marina Locations Map"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;