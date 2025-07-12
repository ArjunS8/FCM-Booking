const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Create uploads directory if it doesn't exist
const uploadsDir = 'uploads';
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const category = req.body.category || 'general';
    const categoryDir = path.join(uploadsDir, category);
    
    if (!fs.existsSync(categoryDir)) {
      fs.mkdirSync(categoryDir, { recursive: true });
    }
    
    cb(null, categoryDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'));
    }
  }
});

// In-memory storage for demo (use database in production)
let venues = [
  {
    id: 1,
    name: "FC Marina Adyar",
    address: "123 Marina Beach Road, Adyar, Chennai - 600020",
    rating: 4.8,
    price: "₹1,500/hour",
    image: "https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg",
    facilities: ["Floodlights", "Parking", "Changing Rooms", "Cafeteria"],
    mapUrl: "https://maps.google.com/?q=Marina+Beach+Chennai",
    phone: "+91 9876543210"
  },
  {
    id: 2,
    name: "FC Marina Velachery",
    address: "456 Velachery Main Road, Chennai - 600042",
    rating: 4.9,
    price: "₹1,800/hour",
    image: "https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg",
    facilities: ["Floodlights", "Parking", "Changing Rooms", "Cafeteria", "First Aid"],
    mapUrl: "https://maps.google.com/?q=Velachery+Chennai",
    phone: "+91 9876543211"
  }
];

let images = [];
let settings = {
  websiteTitle: "FC Marina Turfs Chennai",
  contactEmail: "info@fcmarina.com",
  whatsappNumber: "+919876543210",
  logoUrl: "/vite.svg"
};

// Routes

// Upload images
app.post('/api/upload', upload.array('images', 10), (req, res) => {
  try {
    const category = req.body.category || 'general';
    const uploadedFiles = req.files.map(file => ({
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      name: file.originalname,
      url: `/uploads/${category}/${file.filename}`,
      category: category,
      uploadedAt: new Date()
    }));

    images.push(...uploadedFiles);

    res.json({
      success: true,
      files: uploadedFiles
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// Get all images
app.get('/api/images', (req, res) => {
  const category = req.query.category;
  let filteredImages = images;
  
  if (category) {
    filteredImages = images.filter(img => img.category === category);
  }
  
  res.json(filteredImages);
});

// Delete image
app.delete('/api/images/:id', (req, res) => {
  const imageId = req.params.id;
  const imageIndex = images.findIndex(img => img.id === imageId);
  
  if (imageIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'Image not found'
    });
  }

  const image = images[imageIndex];
  const filePath = path.join(__dirname, image.url);
  
  // Delete file from filesystem
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
  
  // Remove from array
  images.splice(imageIndex, 1);
  
  res.json({
    success: true,
    message: 'Image deleted successfully'
  });
});

// Get all venues
app.get('/api/venues', (req, res) => {
  res.json(venues);
});

// Create venue
app.post('/api/venues', (req, res) => {
  const newVenue = {
    id: Date.now(),
    ...req.body
  };
  venues.push(newVenue);
  res.json(newVenue);
});

// Update venue
app.put('/api/venues/:id', (req, res) => {
  const venueId = parseInt(req.params.id);
  const venueIndex = venues.findIndex(v => v.id === venueId);
  
  if (venueIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'Venue not found'
    });
  }
  
  venues[venueIndex] = { ...venues[venueIndex], ...req.body };
  res.json(venues[venueIndex]);
});

// Delete venue
app.delete('/api/venues/:id', (req, res) => {
  const venueId = parseInt(req.params.id);
  const venueIndex = venues.findIndex(v => v.id === venueId);
  
  if (venueIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'Venue not found'
    });
  }
  
  venues.splice(venueIndex, 1);
  res.json({
    success: true,
    message: 'Venue deleted successfully'
  });
});

// Get settings
app.get('/api/settings', (req, res) => {
  res.json(settings);
});

// Update settings
app.put('/api/settings', (req, res) => {
  settings = { ...settings, ...req.body };
  res.json(settings);
});

// Contact form submission
app.post('/api/contact', (req, res) => {
  const { name, email, phone, message } = req.body;
  
  // In a real app, you would save this to a database and/or send an email
  console.log('Contact form submission:', { name, email, phone, message });
  
  res.json({
    success: true,
    message: 'Thank you for your message. We will get back to you soon!'
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({
        success: false,
        message: 'File too large. Maximum size is 5MB.'
      });
    }
  }
  
  res.status(500).json({
    success: false,
    message: error.message || 'Something went wrong!'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});