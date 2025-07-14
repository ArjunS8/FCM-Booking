import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Upload, Save, Image, Settings, Users, MapPin } from 'lucide-react';

interface ImageUpload {
  id: string;
  name: string;
  url: string;
  category: 'gallery' | 'venue' | 'logo';
  uploadedAt: Date;
}

interface VenueData {
  id: number;
  name: string;
  address: string;
  price: string;
  rating: number;
  image: string;
  facilities: string[];
  phone: string;
  mapUrl: string;
}

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('images');
  const [uploadedImages, setUploadedImages] = useState<ImageUpload[]>([]);
  const [venues, setVenues] = useState<VenueData[]>([]);
  const [logoUrl, setLogoUrl] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  // Load initial data
  useEffect(() => {
    loadImages();
    loadVenues();
    loadLogo();
  }, []);

  const loadImages = async () => {
    // In a real app, this would fetch from your backend
    const mockImages: ImageUpload[] = [
      {
        id: '1',
        name: 'turf-1.jpg',
        url: 'https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg',
        category: 'gallery',
        uploadedAt: new Date()
      },
      {
        id: '2',
        name: 'venue-adyar.jpg',
        url: 'https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg',
        category: 'venue',
        uploadedAt: new Date()
      }
    ];
    setUploadedImages(mockImages);
  };

  const loadVenues = async () => {
    // Mock venue data - in real app, fetch from backend
    const mockVenues: VenueData[] = [
      {
        id: 1,
        name: "FC Marina Vanagaram",
        address: "113/77, Chettiyar Agaram Rd, Numbal, Vanagaram, Chennai-600077",
        rating: 4.8,
        price: "₹1,500/hour",
        image: "https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg",
        facilities: ["Floodlights", "Parking", "Changing Rooms", "Cafeteria"],
        mapUrl: "https://maps.google.com/?q=Marina+Beach+Chennai",
        phone: "+91 9962220400"
      }
    ];
    setVenues(mockVenues);
  };

  const loadLogo = async () => {
    // Load current logo URL
    setLogoUrl('Screenshot 2025-07-14 205939.png');
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>, category: 'gallery' | 'venue' | 'logo') => {
    const files = event.target.files;
    if (!files) return;

    setIsUploading(true);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      
      // In a real app, you would upload to your backend/cloud storage
      // For demo purposes, we'll create a mock URL
      const mockUrl = URL.createObjectURL(file);
      
      const newImage: ImageUpload = {
        id: Date.now().toString() + i,
        name: file.name,
        url: mockUrl,
        category,
        uploadedAt: new Date()
      };

      if (category === 'logo') {
        setLogoUrl(mockUrl);
      } else {
        setUploadedImages(prev => [...prev, newImage]);
      }
    }

    setIsUploading(false);
  };

  const deleteImage = (id: string) => {
    setUploadedImages(prev => prev.filter(img => img.id !== id));
  };

  const updateVenue = (venueId: number, updates: Partial<VenueData>) => {
    setVenues(prev => prev.map(venue => 
      venue.id === venueId ? { ...venue, ...updates } : venue
    ));
  };

  const addNewVenue = () => {
    const newVenue: VenueData = {
      id: Date.now(),
      name: "Porur(Keppel)",
      address: "Keppel Software park Pvt Ltd, One Paramount, 110, MOunt Poonamalle Rd, Porur, Chennai-600125",
      rating: 4.5,
      price: "₹1,500/hour",
      image: "https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg",
      facilities: ["Floodlights", "Parking"],
      mapUrl: "https://maps.google.com",
      phone: "+91 9962220400"
    };
    setVenues(prev => [...prev, newVenue]);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-maroon-900 mb-4">
            Admin <span className="gradient-text">Panel</span>
          </h1>
          <p className="text-xl text-gray-600">
            Manage your website content, images, and venue information
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8 bg-white rounded-xl shadow-lg p-2">
          {[
            { id: 'images', label: 'Images', icon: <Image className="w-5 h-5" /> },
            { id: 'venues', label: 'Venues', icon: <MapPin className="w-5 h-5" /> },
            { id: 'settings', label: 'Settings', icon: <Settings className="w-5 h-5" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-maroon-600 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Images Tab */}
        {activeTab === 'images' && (
          <div className="space-y-8">
            {/* Logo Upload */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-maroon-900 mb-4">Logo Management</h2>
              <div className="flex items-center space-x-6">
                <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                  {logoUrl ? (
                    <img src={"Screenshot 2025-07-14 205939.png"} alt="Logo" className="w-full h-full object-contain" />
                  ) : (
                    <Image className="w-8 h-8 text-gray-400" />
                  )}
                </div>
                <div>
                  <label className="bg-maroon-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-maroon-700 transition-colors duration-300 flex items-center space-x-2">
                    <Upload className="w-4 h-4" />
                    <span>Upload New Logo</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e, 'logo')}
                      className="hidden"
                    />
                  </label>
                  <p className="text-sm text-gray-500 mt-2">Recommended: 200x200px, PNG format</p>
                </div>
              </div>
            </div>

            {/* Gallery Images */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-maroon-900">Gallery Images</h2>
                <label className="bg-maroon-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-maroon-700 transition-colors duration-300 flex items-center space-x-2">
                  <Upload className="w-4 h-4" />
                  <span>Upload Images</span>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={(e) => handleImageUpload(e, 'gallery')}
                    className="hidden"
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {uploadedImages.filter(img => img.category === 'gallery').map((image) => (
                  <div key={image.id} className="relative group">
                    <img
                      src={image.url}
                      alt={image.name}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                      <button
                        onClick={() => deleteImage(image.id)}
                        className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </div>
                    <p className="text-sm text-gray-600 mt-2 truncate">{image.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Venue Images */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-maroon-900">Venue Images</h2>
                <label className="bg-maroon-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-maroon-700 transition-colors duration-300 flex items-center space-x-2">
                  <Upload className="w-4 h-4" />
                  <span>Upload Venue Images</span>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={(e) => handleImageUpload(e, 'venue')}
                    className="hidden"
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {uploadedImages.filter(img => img.category === 'venue').map((image) => (
                  <div key={image.id} className="relative group">
                    <img
                      src={image.url}
                      alt={image.name}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                      <button
                        onClick={() => deleteImage(image.id)}
                        className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </div>
                    <p className="text-sm text-gray-600 mt-2 truncate">{image.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Venues Tab */}
        {activeTab === 'venues' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-maroon-900">Venue Management</h2>
              <button
                onClick={addNewVenue}
                className="bg-maroon-600 text-white px-4 py-2 rounded-lg hover:bg-maroon-700 transition-colors duration-300"
              >
                Add New Venue
              </button>
            </div>

            {venues.map((venue) => (
              <div key={venue.id} className="bg-white rounded-xl shadow-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Venue Name</label>
                    <input
                      type="text"
                      value={venue.name}
                      onChange={(e) => updateVenue(venue.id, { name: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500"
                      placeholder="Enter venue name"
                      title="Venue Name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                    <input
                      type="text"
                      value={venue.price}
                      onChange={(e) => updateVenue(venue.id, { price: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500"
                      placeholder="Enter price"
                      title="Venue Price"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                    <textarea
                      value={venue.address}
                      onChange={(e) => updateVenue(venue.id, { address: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500"
                      rows={2}
                      placeholder="Enter venue address"
                      title="Venue Address"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="text"
                      value={venue.phone}
                      onChange={(e) => updateVenue(venue.id, { phone: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500"
                      placeholder="9962220400"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Map URL</label>
                    <input
                      type="url"
                      value={venue.mapUrl}
                      onChange={(e) => updateVenue(venue.id, { mapUrl: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500"
                      placeholder="Enter map URL"
                    />
                  </div>
                </div>
                
                <div className="mt-4 flex justify-end">
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300 flex items-center space-x-2">
                    <Save className="w-4 h-4" />
                    <span>Save Changes</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-maroon-900 mb-6">Website Settings</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Website Title</label>
                <input
                  type="text"
                  defaultValue=" Chennai"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
                <input
                  type="text"
                  defaultValue="contact@fcmbookings.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp Number</label>
                <input
                  type="text"
                  defaultValue="+91 9962220400"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500"
                />
              </div>
              
              <div className="flex justify-end">
                <button className="bg-maroon-600 text-white px-6 py-2 rounded-lg hover:bg-maroon-700 transition-colors duration-300 flex items-center space-x-2">
                  <Save className="w-4 h-4" />
                  <span>Save Settings</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {isUploading && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-maroon-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Uploading images...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;