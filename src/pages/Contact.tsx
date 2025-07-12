import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, User, MessageCircle, ChevronDown } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [selectedLocation, setSelectedLocation] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
      details: ["+91 9962220400", "+91 9876543211"],
      action: "tel:+919962220400"
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
      name: "FC Marina Vanagaram",
      address: "113/77, Chettiyar Agaram Rd, Numbal, Vanagaram, Chennai-600077",
      phone: "+91 9962220400",
      mapUrl: "https://www.google.co.in/maps/place/113,+Chettiyar+Agaram+Rd,+Chettiyar+Agaram,+Porur,+Chennai,",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8155087959673!2d80.16570731482196!3d13.0475815908074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266c4ddf2b031%3A0x1d69b7a3d0c0d5b4!2sVanagaram%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1735000000000!5m2!1sen!2sin"
    },
    {
      name: "FC Marina Porur (Keppel)",
      address: "Keppal Software park Pvt Ltd, One Paramount, 110, Mount Poonamalle Rd, Porur, Chennai-600125",
      phone: "+91 9962220400",
      mapUrl: "https://www.google.co.in/maps/place/Keppel+Software+Park,Pvt+Ltd./@13.0322309,80.1666229,1080m/",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8155087959673!2d80.16570731482196!3d13.0322309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266c4ddf2b031%3A0x1d69b7a3d0c0d5b4!2sPorur%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1735000000001!5m2!1sen!2sin"
    },
    {
      name: "FC Marina Nolambur",
      address: "230 4th Main Road, Apartments, opp. VGN Flats, Nolambur, Chennai-600095",
      phone: "+91 9962220400",
      mapUrl: "https://www.google.co.in/maps/place/FC+Marina+Turf+(Nolambur)/@13.0772497,80.1627306,858m/",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8155087959673!2d80.16570731482196!3d13.0772497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266c4ddf2b031%3A0x1d69b7a3d0c0d5b4!2sNolambur%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1735000000002!5m2!1sen!2sin"
    },
    {
      name: "FC Marina Thalambur",
      address: "No.6/858 Thiruvalluvar Street, Natham, thalambur, Chennai-600130",
      phone: "+91 9962220400",
      mapUrl: "https://www.google.co.in/maps/place/FC+MARINA+FOOTBALL+ACADEMY/@12.8540869,80.199116,3433m/",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8155087959673!2d80.199116!3d12.8540869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266c4ddf2b031%3A0x1d69b7a3d0c0d5b4!2sThalambur%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1735000000003!5m2!1sen!2sin"
    },
    {
      name: "FC Marina Thiryuvanmiyur (Roof Covered)",
      address: "Thiruvanmiyur beach, 111, Bay View Dr St, Kottivakkam, Chennai, Tamilnadu 600041",
      phone: "+919962220400",
      mapUrl: "https://www.google.co.in/maps/place/FC+MARINA+TURF+(Thiruvanmiyur+Beach)/@12.9688839,80.2547922,3432m/",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8155087959673!2d80.2547922!3d12.9688839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266c4ddf2b031%3A0x1d69b7a3d0c0d5b4!2sThiruvanmiyur%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1735000000004!5m2!1sen!2sin"
    },
    {
      name: "FC Marina Madipakkam",
      address: "200, 9th St, behind Dr.KAMAKSHI MEMORIAL HOSPITAL, Madipakkam, Chennai-600091",
      phone: "+919962220400",
      mapUrl: "https://www.google.co.in/maps/place/FC+MARINA+TURF/@12.9514122,80.2017817,858m/",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8155087959673!2d80.2017817!3d12.9514122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266c4ddf2b031%3A0x1d69b7a3d0c0d5b4!2sMadipakkam%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1735000000005!5m2!1sen!2sin"
    },
    {
      name: "FC Marina Kovilambakkam",
      address: "Manikandan street, Veeramani Nagar, Kovilambakkam, Chennai-600117",
      phone: "+91 9962220400",
      mapUrl: "https://www.google.co.in/maps/place/FC+Marina+Academy+-+Kovilambakkam/@12.9439708,80.1748446,1716m/",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8155087959673!2d80.1748446!3d12.9439708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266c4ddf2b031%3A0x1d69b7a3d0c0d5b4!2sKovilambakkam%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1735000000006!5m2!1sen!2sin"
    },
    {
      name: "FC Marina Perumbakkam",
      address: "260/2A, Radiance Mercury, opp. to Radiance Mercury, Cheran Nagar, Chennai, Tamil Nadu 600100",
      phone: "+91 9962220400",
      mapUrl: "https://www.google.co.in/maps/place/FC+MARINA+TURF+(Perumbakkam)/@12.9439699,80.1593948,6864m/",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8155087959673!2d80.1593948!3d12.9439699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266c4ddf2b031%3A0x1d69b7a3d0c0d5b4!2sPerumbakkam%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1735000000007!5m2!1sen!2sin"
    },
    {
      name: "FC Marina West Tambaram (Roof Covered)",
      address: "No 18 Karumariamman Nagar, Wwst, near Vishnu Nagar, Tambaram, Chennai-600045",
      phone: "+91 9962220400",
      mapUrl: "https://www.google.co.in/maps/place/FC+MARINA+TURF+(+TAMBARAM)/@12.9230718,80.0972868,858m/",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8155087959673!2d80.0972868!3d12.9230718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266c4ddf2b031%3A0x1d69b7a3d0c0d5b4!2sTambaram%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1735000000008!5m2!1sen!2sin"
    },
    {
      name: "FC Marina Medavakkam",
      address: "N0. 299/1A Bhavaniamman Koil Street, Pallikaranai, chennai-600100",
      phone: "+91 9962220400",
      mapUrl: "https://www.google.co.in/maps/place/FC+Marina+Academy+Medavakkam/@12.9230589,80.0174597,27460m/",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8155087959673!2d80.0174597!3d12.9230589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266c4ddf2b031%3A0x1d69b7a3d0c0d5b4!2sMedavakkam%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1735000000009!5m2!1sen!2sin"
    },
    {
      name: "FC Marina Mugalivakkam",
      address: "7, Roja Street, Maxworth Nagar Phase 2, Kolapakkam chennai-600116",
      phone: "+91 9962220400",
      mapUrl: "https://www.google.co.in/maps/place/Marina+FC/@13.0176393,80.0890062,13725m/",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8155087959673!2d80.0890062!3d13.0176393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266c4ddf2b031%3A0x1d69b7a3d0c0d5b4!2sMugalivakkam%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1735000000010!5m2!1sen!2sin"
    },
    {
      name: "FC Marina Pallikaranai",
      address: "Ambal nagar, Pallikaranai, Chennai-600100",
      phone: "+91 9962220400",
      mapUrl: "https://www.google.co.in/maps/place/FC+Marina+Football+Academy+Pallikaranai/@12.9363544,80.1748158,3432m/",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8155087959673!2d80.1748158!3d12.9363544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266c4ddf2b031%3A0x1d69b7a3d0c0d5b4!2sPallikaranai%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1735000000011!5m2!1sen!2sin"
    }
  ];

  const handleLocationSelect = (index: number) => {
    setSelectedLocation(index);
    setIsDropdownOpen(false);
  };

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

        {/* Locations Section with Dropdown */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 text-shadow">Our Locations</h2>
          
          {/* Location Dropdown */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full bg-white rounded-xl shadow-lg p-4 flex items-center justify-between hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-maroon-600" />
                  <span className="font-semibold text-maroon-900">{locations[selectedLocation].name}</span>
                </div>
                <ChevronDown className={`w-5 h-5 text-maroon-600 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 max-h-64 overflow-y-auto z-10"
                >
                  {locations.map((location, index) => (
                    <button
                      key={index}
                      onClick={() => handleLocationSelect(index)}
                      className={`w-full text-left p-4 hover:bg-gray-50 transition-colors duration-200 ${
                        index === selectedLocation ? 'bg-maroon-50 text-maroon-900' : 'text-gray-700'
                      } ${index !== locations.length - 1 ? 'border-b border-gray-100' : ''}`}
                    >
                      <div className="font-medium">{location.name}</div>
                      <div className="text-sm text-gray-500 mt-1">{location.address}</div>
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          {/* Selected Location Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-maroon-900 mb-4">{locations[selectedLocation].name}</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gray-500 mt-1" />
                  <span className="text-gray-600">{locations[selectedLocation].address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-600">{locations[selectedLocation].phone}</span>
                </div>
              </div>
              <div className="flex space-x-3">
                <a
                  href={locations[selectedLocation].mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-maroon-600 text-white py-3 px-4 rounded-lg text-center hover:bg-maroon-700 transition-colors duration-300"
                >
                  Get Directions
                </a>
                <a
                  href={`tel:${locations[selectedLocation].phone}`}
                  className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg text-center hover:bg-green-700 transition-colors duration-300"
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* Dynamic Map */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video h-64 lg:h-full">
                <iframe
                  key={selectedLocation}
                  src={locations[selectedLocation].embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${locations[selectedLocation].name} Location Map`}
                ></iframe>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;