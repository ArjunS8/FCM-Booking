import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Download } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-maroon-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold">FC Marina Bookings</span>
            </div>
            <p className="text-gray-300 mb-4">
              Chennai's premier football turf booking platform. Experience the best in sports facility management.
            </p>
            <div className="flex space-x-4">
             <a
                href="https://www.facebook.com/people/FC-Marina/61573995053454/"
                className="text-gray-300 hover:text-[#1877F2] transition-colors duration-300"
                title="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/fcmarina_tn/"
                className="text-gray-300 hover:text-[#F58529] transition-all duration-300"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@FcMarinachn"
                className="text-gray-300 hover:text-[#FF0000] transition-colors duration-300"
                title="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/bookings" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Bookings
                </Link>
              </li>
              
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Turf Booking
                </a>
              </li>
             <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Coaching Programs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-300" />
                <span className="text-gray-300">+91 9962220400</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-300" />
                <span className="text-gray-300">Contact@fcmbookings.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-300 mt-1" />
                <span className="text-gray-300">
                  113/77, Chettiyar Agaram Rd, Numbal,
                  Vanagaram, Chennai-600077.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* App Download Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Download Our App</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://apps.apple.com/in/app/fc-marina-bookings/id6473527191"
              className="bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center space-x-3 hover:bg-gray-800 transition-colors duration-300 shadow-lg justify-center"
              >
                <svg className="w-5 sm:w-6 h-5 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs sm:text-sm">Download on the</div>
                  <div className="text-sm sm:text-base font-semibold">App Store</div>
                </div>
              </a>
              
              <a
                href="https://play.google.com/store/apps/details?id=com.ifcmarina&hl=en_IN"
                className="bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center space-x-3 hover:bg-green-700 transition-colors duration-300 shadow-lg justify-center"
              >
                <svg className="w-5 sm:w-6 h-5 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs sm:text-sm">Get it on</div>
                  <div className="text-sm sm:text-base font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 mb-4 md:mb-0 text-sm sm:text-base text-center md:text-left">
            © 2024 FC Marina. All rights reserved.
          </p>
          <span className="text-gray-300 text-sm sm:text-base">
            Powered by{' '}
            <a href="https://socialcosmos.in/" className="text-[#00ff00] hover:text-[#00ff00] transition-colors duration-300 font-bold">Social Cosmos</a>
          </span>
           <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">
              Terms of Service
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">
              Cancellation and Refunds Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;