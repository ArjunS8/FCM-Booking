import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const galleryImages = [
    {
      src: "/venue-images/184A5381.JPG",
      caption: "FC Marina Vanagaram"
    },
    {
      src: "/venue-images/184A5382.JPG",
      caption: "FC Marina Porur (Keppel)"
    },
    {
      src: "/venue-images/184A5383.JPG",
      caption: "FC Marina Nolambur"
    },
    {
      src: "/venue-images/184A5384.JPG",
      caption: "FC Marina Thalambur"
    },
    {
      src: "/venue-images/2K6A6042.JPG",
      caption: "FC Marina Thiruvanmiyur"
    },
    {
      src: "/venue-images/2K6A6043.JPG",
      caption: "FC Marina Madipakkam"
    },
    {
      src: "/venue-images/2K6A6044.JPG",
      caption: "FC Marina Kovilambakkam"
    },
    {
      src: "/venue-images/2K6A6045.JPG",
      caption: "FC Marina Perumbakkam"
    },
    {
      src: "/venue-images/2K6A6046.JPG",
      caption: "FC Marina West Tambaram"
    },
    {
      src: "/venue-images/2K6A6047.JPG",
      caption: "FC Marina Medavakkam"
    },
    {
      src: "/venue-images/2K6A6048.JPG",
      caption: "FC Marina Mugalivakkam"
    },
    {
      src: "/venue-images/2K6A6049.JPG",
      caption: "FC Marina Pallikaranai"
    },
    
    // Add more images as needed
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const openModal = (index: number) => {
    setCurrentImage(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
            Our <span>Gallery</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto text-shadow px-4">
            Explore our world-class football turf facilities across Chennai. See why we're the preferred choice for football enthusiasts.
          </p>
        </motion.div>

        {/* Featured Image Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative h-64 sm:h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={galleryImages[currentImage].src}
              alt={galleryImages[currentImage].caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-lg sm:text-2xl font-bold text-white mb-2">
                {galleryImages[currentImage].caption}
              </h3>
              <div className="flex items-center space-x-2 text-white/80 text-sm sm:text-base">
                <span>{currentImage + 1} / {galleryImages.length}</span>
              </div>
            </div>
            
            <button
              onClick={prevImage}
              title="Previous image"
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300"
            >
              <ChevronLeft className="w-4 sm:w-6 h-4 sm:h-6 text-white" />
            </button>
            
            <button
              onClick={nextImage}
              title="Next image"
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300"
            >
              <ChevronRight className="w-4 sm:w-6 h-4 sm:h-6 text-white" />
            </button>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer"
              onClick={() => openModal(index)}
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

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300 z-10"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              
              <img
                src={galleryImages[currentImage].src}
                alt={galleryImages[currentImage].caption}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  {galleryImages[currentImage].caption}
                </h3>
                <div className="text-white/80 text-sm sm:text-base">
                  {currentImage + 1} / {galleryImages.length}
                </div>
              </div>
              
              <button
                onClick={prevImage}
                title="Previous image"
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300"
              >
                <ChevronLeft className="w-4 sm:w-6 h-4 sm:h-6 text-white" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300"
              >
                <ChevronRight className="w-4 sm:w-6 h-4 sm:h-6 text-white" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;