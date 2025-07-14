import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Star, Navigation, Phone } from 'lucide-react';

const Bookings = () => {
  const [selectedVenue, setSelectedVenue] = useState<number | null>(null);

  const venues = [
    {
      id: 1,
      name: "FC Marina Vanagaram",
      address: "113/77, Chettiyar Agaram Rd, Numbal, Vanagaram, Chennai-600077",
      rating: 4.8,
      price: "₹1,500/hour",
      image: "/venue-images/2K6A6045.JPG",
      facilities: ["UPI Accepted", "Toilets", "Changing Rooms", "Free Parking", "Bips Available", "Artifical Football Turf", "With Outs"],
      mapUrl: "https://www.google.co.in/maps/place/FC+Marina+Football+Academy+-+Centre+of+Excellence/@13.0546361,80.1488909,851m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a5261ff119b5dfd:0x2b7eac202ee7814e!8m2!3d13.0546361!4d80.1488909!16s%2Fg%2F11y6n_n6d_?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      phone: "+91 9962220400"
      
    },
    {
      id: 2,
      name: "FC Marina Porur (Keppel)",
      address: "Keppal Software park Pvt Ltd, One Paramount, 110, Mount Poonamalle Rd, Porur, Chennai-600125",
      rating: 4.9,
      price: "₹1,500/hour",
      image: "/venue-images/2K6A6046.JPG",
      facilities: ["UPI Accepted", "Toilets", "Changing Rooms", "Free Parking", "Bips Available"],
      mapUrl: "https://www.google.co.in/maps/place/FC+Marina+Porur+Turf/@13.0311527,80.1646972,1122m/data=!3m1!1e3!4m6!3m5!1s0x3a5261a3809205f1:0x97227fb8be73c538!8m2!3d13.0310078!4d80.1682374!16s%2Fg%2F11xmd0sryw?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      phone: "+91 9962220400"
    },
    {
      id: 3,
      name: "FC Marina Nolambur",
      address: "230 4th Main Road, Apartments, opp. VGN Flats, Nolambur, Chennai-600095",
      rating: 4.7,
      price: "₹1,500/hour",
      image: "/venue-images/2K6A6047.JPG",
      facilities: ["UPI Accepted", "Toilets", "Changing Rooms", "Free Parking", "Bips Available", "shower", "Artifical Football Turf", "With Outs"],
      mapUrl: "https://www.google.co.in/maps/place/FC+Marina+Turf+(Nolambur)/@13.0772497,80.1627306,858m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a526158a80e9739:0x44f592770ade844a!8m2!3d13.0772497!4d80.1653055!16s%2Fg%2F11rgzwbtbg?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      phone: "+91 9962220400"
    },
    {
      id: 4,
      name: "FC Marina Thalambur",
      address: "No.6/858 Thiruvalluvar Street, Natham, thalambur, Chennai-600130",
      rating: 4.6,
      price: "₹1,200/hour",
      image: "/venue-images/2K6A6048.JPG",
      facilities: ["UPI Accepted", "Toilets", "Changing Rooms", "Free Parking", "Bips Available", "Roof Covered", "Artifical Football Turf", "With Outs"],
      mapUrl: "https://www.google.co.in/maps/place/FC+MARINA+FOOTBALL+ACADEMY/@12.8540869,80.199116,3433m/data=!3m1!1e3!4m10!1m2!2m1!1sNo.6%2F858+Thiruvalluvar+Street,+Natham,+thalambur,+Chennai-600130%22!3m6!1s0x3a525b766d066039:0x52a8490aa73700b5!8m2!3d12.8400089!4d80.2144489!15sCkFOby42Lzg1OCBUaGlydXZhbGx1dmFyIFN0cmVldCwgTmF0aGFtLCB0aGFsYW1idXIsIENoZW5uYWktNjAwMTMwIlo_Ij1ubyA2IDg1OCB0aGlydXZhbGx1dmFyIHN0cmVldCBuYXRoYW0gdGhhbGFtYnVyIGNoZW5uYWkgNjAwMTMwkgELc29jY2VyX2NsdWKaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTlFNWFV6ZEVoUkVBRaoBchABKgoiBm5hdGhhbSgAMh8QASIbTw_bhixSuMfKCaGFxP6Ecg9MsdvnX3nafVTPMkEQAiI9bm8gNiA4NTggdGhpcnV2YWxsdXZhciBzdHJlZXQgbmF0aGFtIHRoYWxhbWJ1ciBjaGVubmFpIDYwMDEzMOABAPoBBAgAEDQ!16s%2Fg%2F11l36ggg5s?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      phone: "+91 9962220400"
    },
    {
      id: 5,
      name: "FC Marina Thiryuvanmiyur (Roof Covered)",
      address: "Thiruvanmiyur beach, 111, Bay View Dr St, Kottivakkam, Chennai, Tamilnadu 600041",
      rating: 4.8,
      price: "₹1,950/hour",
      image: "/venue-images/2K6A6049.JPG",
      facilities: ["UPI Accepted", "Toilets", "Changing Rooms", "Free Parking", "Bips Available", "shower", "Roof Covered", "Artifical Football Turf", "With Outs"],
      mapUrl: "https://www.google.co.in/maps/place/FC+MARINA+TURF+(Thiruvanmiyur+Beach)/@12.9688839,80.2547922,3432m/data=!3m1!1e3!4m10!1m2!2m1!1sThiruvanmiyur+beach,+111,+Bay+View+Dr+St,+Kottivakkam,+Chennai,+Tamilnadu+600041!3m6!1s0x3a525dcbdde45771:0xa97db1e275e30698!8m2!3d12.9727355!4d80.2658124!15sClBUaGlydXZhbm1peXVyIGJlYWNoLCAxMTEsIEJheSBWaWV3IERyIFN0LCBLb3R0aXZha2thbSwgQ2hlbm5haSwgVGFtaWxuYWR1IDYwMDA0MZIBDGZ1dHNhbF9maWVsZKoBdBABMh8QASIbsbR073W69V4DZWEpm4QdrA5MXEVNmaJcqYC-Mk8QAiJLdGhpcnV2YW5taXl1ciBiZWFjaCAxMTEgYmF5IHZpZXcgZHIgc3Qga290dGl2YWtrYW0gY2hlbm5haSB0YW1pbG5hZHUgNjAwMDQx4AEA!16s%2Fg%2F11jzcwz8sc?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      phone: "+919962220400"
    },
    {
      id: 6,
      name: "FC Marina Madipakkam",
      address: "200, 9th St, behind Dr.KAMAKSHI MEMORIAL HOSPITAL, Madipakkam, Chennai-600091",
      rating: 4.9,
      price: "₹1,500/hour",
      image: "/venue-images/2K6A6050.JPG",
      facilities: ["UPI Accepted", "Toilets", "Changing Rooms", "Free Parking", "Bips Available", "Artifical Football Turf", "With Outs"],
      mapUrl: "https://www.google.co.in/maps/place/FC+MARINA+TURF/@12.9514122,80.2017817,858m/data=!3m1!1e3!4m9!1m2!2m1!1s200,+9th+St,+behind+Dr.KAMAKSHI+MEMORIAL+HOSPITAL,+Madipakkam,+Chennai-60009!3m5!1s0x3a525d2cecb058cf:0x2256deee37b67f68!8m2!3d12.9514128!4d80.2065957!16s%2Fg%2F11fnjz25nc?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      phone: "+919962220400"
    },

    {
     id: 7,
      name: "FC Marina Kovilambakkam",
      address: "Manikandan street, Veeramani Nagar, Kovilambakkam, Chennai-600117",
      rating: 4.7,
      price: "₹1,200/hour",
      image: "/venue-images/184A5381.JPG",
      facilities: ["UPI Accepted", "Toilets", "Changing Rooms", "Free Parking", "Bips Available"],
      mapUrl: "https://www.google.co.in/maps/place/FC+Marina+Academy+-+Kovilambakkam/@12.9439708,80.1748446,1716m/data=!3m1!1e3!4m10!1m2!2m1!1sfcm+turf+kovilambakkam!3m6!1s0x3a525f032a02aef5:0xe8b80cc0f399493a!8m2!3d12.9439708!4d80.1812475!15sChZmY20gdHVyZiBrb3ZpbGFtYmFra2FtWhgiFmZjbSB0dXJmIGtvdmlsYW1iYWtrYW2SAQ1zcG9ydHNfc2Nob29smgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5UVU52TWpWaVoyMW5SUkFCqgFNEAEqDCIIZmNtIHR1cmYoADIfEAEiG1x6lvjwy6HVixkmD9CYIhTywaImiFTIx92ZRDIaEAIiFmZjbSB0dXJmIGtvdmlsYW1iYWtrYW3gAQD6AQQIABBG!16s%2Fg%2F11x1849nh5?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      phone: "+91 9962220400"
    },
    {
      id: 8,
      name: "FC Marina Perumbakkam",
      address: "260/2A, Radiance Mercury, opp. to Radiance Mercury, Cheran Nagar, Chennai, Tamil Nadu 600100",
      rating: 4.8,
      price: "₹1,000/hour",
      image: "/venue-images/184A5382.JPG",
      facilities: ["UPI Accepted", "Toilets", "Changing Rooms", "Free Parking", "Bips Available", "shower", "Artifical Football Turf", "With Outs"],
      mapUrl: "https://www.google.co.in/maps/place/FC+MARINA+TURF+(Perumbakkam)/@12.9439699,80.1593948,6864m/data=!3m1!1e3!4m10!1m2!2m1!1sfcm+turf+perumbakkam!3m6!1s0x3a525bc901a4dd2d:0x5f55802ea9ddaa03!8m2!3d12.8949194!4d80.2012451!15sChRmY20gdHVyZiBwZXJ1bWJha2thbVoWIhRmY20gdHVyZiBwZXJ1bWJha2thbZIBDWZvb3RiYWxsX2NsdWKaASNDaFpEU1VoTk1HOW5TMFZKUTBGblRVTnZNaTFUUjBWUkVBRaoBSxABKgwiCGZjbSB0dXJmKAAyHxABIhsYLsBMDDUxZJ6kEOn8bf5qVoDKT0M10my-KMAyGBACIhRmY20gdHVyZiBwZXJ1bWJha2thbeABAPoBBAgrEEw!16s%2Fg%2F11rh_44jh6?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      phone: "+91 9962220400"
    },
    {
      id: 9,
      name: "FC Marina West Tambaram (Roof Covered)",
      address: "No 18 Karumariamman Nagar, Wwst, near Vishnu Nagar, Tambaram, Chennai-600045",
      rating: 4.6,
      price: "₹1,400/hour",
      image: "/venue-images/184A5383.JPG",
      facilities: ["UPI Accepted", "Toilets", "Changing Rooms", "Free Parking", "Bips Available", "Roof Covered", "Artifical Football Turf", "With Outs"],
      mapUrl: "https://www.google.co.in/maps/place/FC+MARINA+TURF+(+TAMBARAM)/@12.9230718,80.0972868,858m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a525f4f6b1283a3:0x8f3a73cfea038807!8m2!3d12.9230718!4d80.0998617!16s%2Fg%2F11kplb681y?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      phone: "+91 9962220400"
    },
    {
      id: 10,
      name: "FC Marina Medavakkam",
      address: "N0. 299/1A Bhavaniamman Koil Street, Pallikaranai, chennai-600100",
      rating: 4.9,
      price: "₹1,000/hour",
      image: "/venue-images/2K6A6042.JPG",
      facilities: ["UPI Accepted", "Toilets", "Changing Rooms", "Free Parking", "Bips Available"],
      mapUrl: "https://www.google.co.in/maps/place/FC+Marina+Academy+Medavakkam/@12.9230589,80.0174597,27460m/data=!3m1!1e3!4m10!1m2!2m1!1sFC+MARINA+TURF+medavakkam!3m6!1s0x3a525df1eefd6005:0x96528214ca17781b!8m2!3d12.9302167!4d80.1965593!15sChlGQyBNQVJJTkEgVFVSRiBtZWRhdmFra2FtWhsiGWZjIG1hcmluYSB0dXJmIG1lZGF2YWtrYW2SAQtzcG9ydHNfY2x1YpoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSZk1UaFBUMUpCRUFFqgFRCg0vZy8xMWZuanoyNW5jEAEyHxABIhsYMnScSEJlD-I8KkylT6QukdIGKAd7IOhd_gkyHRACIhlmYyBtYXJpbmEgdHVyZiBtZWRhdmFra2Ft4AEA-gEECAAQRg!16s%2Fg%2F11x1fr34sl?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      phone: "+91 9962220400"
    },
    {
      id: 11,
      name: "FC Marina Mugalivakkam",
      address: "7, Roja Street, Maxworth Nagar Phase 2, Kolapakkam chennai-600116",
      rating: 4.7,
      price: "₹1,200/hour",
      image: "/venue-images/2K6A6043.JPG",
      facilities: ["UPI Accepted", "Toilets", "Changing Rooms", "Free Parking", "Bips Available","Shower", "Artifical Football Turf", "With Outs"],
      mapUrl: "https://www.google.co.in/maps/place/Marina+FC/@13.0176393,80.0890062,13725m/data=!3m1!1e3!4m10!1m2!2m1!1sfc+marina+turf+mugalivakkam!3m6!1s0x3a52615a4b4c2cad:0x3f95722577ce8bc4!8m2!3d13.0176393!4d80.1652239!15sChtmYyBtYXJpbmEgdHVyZiBtdWdhbGl2YWtrYW1aHSIbZmMgbWFyaW5hIHR1cmYgbXVnYWxpdmFra2FtkgEPY29hY2hpbmdfY2VudGVymgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDJ4c2VWWnNPVVJPTWtaNlpVZGtiRnBYYjNST01VWnRVMjVaTWxSSVl4QUKqAVMKDS9nLzExZm5qejI1bmMQATIfEAEiGxe8JnEBFEvLIdo0fpPrFkQ8mUzlJzvwCjxdtDIfEAIiG2ZjIG1hcmluYSB0dXJmIG11Z2FsaXZha2thbeABAPoBBQigAhBM!16s%2Fg%2F11j218qyxc?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      phone: "+91 9962220400"
    },
    {
      id: 12,
      name: "FC Marina Pallikaranai",
      address: "Ambal nagar, Pallikaranai, Chennai-600100",
      rating: 4.8,
      price: "₹1,200/hour",
      image: "/venue-images/2K6A6044.JPG",
      facilities: ["UPI Accepted", "Toilets", "Changing Rooms", "Free Parking", "Bips Available", "Shower", "Card Accepted","Artifical Football Turf", "With Outs"],
      mapUrl: "https://www.google.co.in/maps/place/FC+Marina+Football+Academy+Pallikaranai/@12.9363544,80.1748158,3432m/data=!3m1!1e3!4m10!1m2!2m1!1sfc+marina+turf+pallikaranai!3m6!1s0x3a525d99dd794d61:0x9d2ebb76aa2d3d65!8m2!3d12.9363544!4d80.1938702!15sChtmYyBtYXJpbmEgdHVyZiBwYWxsaWthcmFuYWlaHSIbZmMgbWFyaW5hIHR1cmYgcGFsbGlrYXJhbmFpkgELc29jY2VyX2NsdWKaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTllOemRmTFV4M0VBRaoBUwoNL2cvMTFmbmp6MjVuYxABMh8QASIbGJLnKBvekZyZDExdcqZLOdBmEa8cvu84Fn8fMh8QAiIbZmMgbWFyaW5hIHR1cmYgcGFsbGlrYXJhbmFp4AEA-gEECAAQRA!16s%2Fg%2F11sw8vxtwr?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D",
      phone: "+91 9962220400"
    }
   ];

  const handleGetDirections = (mapUrl: string) => {
    window.open(mapUrl, '_blank');
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
            Book Your Perfect Turf
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto text-shadow px-4">
            Choose from our 12 premium football turfs across Chennai. Download our app for instant booking and better deals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {venues.map((venue, index) => (
            <motion.div
              key={venue.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
                selectedVenue === venue.id ? 'ring-4 ring-maroon-500' : ''
              }`}
            >
              <div className="relative">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold">{venue.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-maroon-900 mb-2">{venue.name}</h3>
                <div className="flex items-start space-x-2 mb-4">
                  <MapPin className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">{venue.address}</p>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {venue.facilities.map((facility, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {facility}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="text-2xl font-bold text-maroon-600">{venue.price}</div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Per hour</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => setSelectedVenue(venue.id)}
                    className="w-full bg-maroon-600 text-white py-3 rounded-lg font-semibold hover:bg-maroon-700 transition-colors duration-300"
                  >
                    Select Venue
                  </button>
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleGetDirections(venue.mapUrl)}
                      className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2"
                    >
                      <Navigation className="w-4 h-4" />
                      <span>Directions</span>
                    </button>
                    
                    <button
                      onClick={() => window.open(`tel:${venue.phone}`)}
                      className="flex-1 bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 flex items-center justify-center space-x-2"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* App Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-maroon-900 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Book?</h2>
            <p className="text-xl mb-8">Download our app for instant bookings, exclusive deals, and seamless experience</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://apps.apple.com/in/app/fc-marina-bookings/id6473527191"
                className="bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center space-x-3 hover:bg-gray-800 transition-colors duration-300 shadow-lg justify-center"
                aria-label="Download on the App Store"
                title="Download on the App Store"
              >
                <svg className="w-6 sm:w-8 h-6 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs sm:text-sm">Download on the</div>
                  <div className="text-sm sm:text-lg font-semibold">App Store</div>
                </div>
              </a>
              
              <a
                href="https://play.google.com/store/apps/details?id=com.ifcmarina&hl=en_IN"
                className="bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center space-x-3 hover:bg-green-700 transition-colors duration-300 shadow-lg justify-center"
                aria-label="Get it on Google Play"
                title="Get it on Google Play"
              >
                <svg className="w-6 sm:w-8 h-6 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs sm:text-sm">Get it on</div>
                  <div className="text-sm sm:text-lg font-semibold">Google Play</div>
                </div>
              </a>
              
              
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Bookings;