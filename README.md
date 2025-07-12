# FC Marina Turfs Chennai

A modern, responsive website for FC Marina football turfs in Chennai with admin panel for content management.

## Features

- **Modern Design**: Beautiful, responsive design with smooth animations
- **Admin Panel**: Complete backend system for managing images, venues, and settings
- **Image Management**: Upload and manage gallery images, venue photos, and logos
- **Venue Management**: Add, edit, and delete venue information
- **Contact System**: Contact form with backend integration
- **Mobile App Integration**: Download buttons for iOS and Android apps
- **Interactive Maps**: Google Maps integration for venue locations
- **WhatsApp Integration**: Floating WhatsApp chat button
- **Discount System**: Animated discount sidebar
- **SEO Optimized**: Proper meta tags and structured content

## Tech Stack

### Frontend
- React 18 with TypeScript
- Tailwind CSS for styling
- Framer Motion for animations
- React Router for navigation
- Lucide React for icons

### Backend
- Node.js with Express
- Multer for file uploads
- CORS for cross-origin requests
- File system storage (can be extended to cloud storage)

## Installation

### Frontend Setup
```bash
npm install
npm run dev
```

### Backend Setup
```bash
cd server
npm install
npm run dev
```

## Environment Variables

Copy `.env.example` to `.env` and configure:

```env
PORT=5000
WHATSAPP_NUMBER=+919876543210
# Add other configuration as needed
```

## Admin Panel

Access the admin panel at `/admin` to:

- Upload and manage images for gallery and venues
- Update logo
- Add/edit venue information
- Configure website settings
- View contact form submissions

## API Endpoints

### Images
- `POST /api/upload` - Upload images
- `GET /api/images` - Get all images
- `DELETE /api/images/:id` - Delete image

### Venues
- `GET /api/venues` - Get all venues
- `POST /api/venues` - Create venue
- `PUT /api/venues/:id` - Update venue
- `DELETE /api/venues/:id` - Delete venue

### Settings
- `GET /api/settings` - Get settings
- `PUT /api/settings` - Update settings

### Contact
- `POST /api/contact` - Submit contact form

## Deployment

### Frontend
Build the frontend:
```bash
npm run build
```

Deploy the `dist` folder to your hosting provider.

### Backend
Deploy the server folder to your hosting provider with Node.js support.

## Features Overview

### Home Page
- Hero section with app download buttons
- Feature highlights
- Customer testimonials
- Statistics display

### Bookings Page
- Venue listings with details
- Map integration for directions
- Phone call integration
- App download promotion

### Gallery Page
- Image carousel
- Grid layout with modal view
- Category filtering

### Contact Page
- Contact form
- Multiple location information
- Embedded Google Maps
- Direct calling and directions

### Admin Panel
- Image upload and management
- Venue CRUD operations
- Settings management
- Logo updates

## Customization

### Colors
The website uses a maroon and gold color scheme defined in `tailwind.config.js`. You can customize colors by modifying the color palette.

### Content
All content can be managed through the admin panel or by editing the respective component files.

### Images
Upload images through the admin panel or replace the default Pexels images with your own.

## Support

For support and customization requests, contact the development team.

## License

This project is proprietary software for FC Marina Turfs Chennai.