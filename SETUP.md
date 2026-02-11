# SkillBridge - Complete Setup Guide

This guide will help you set up both the backend and frontend of the SkillBridge platform.

## Overview

SkillBridge is a platform that connects skilled students with clients who need their expertise. The platform consists of:

- **Backend**: Express.js REST API with MongoDB
- **Frontend**: Vanilla HTML/CSS/JavaScript (no bundlers)

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- Python 3 (for running the frontend server)
- Git

## Backend Setup

### 1. Navigate to Backend Directory

```bash
cd backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

```env
# MongoDB Connection
MONGO_URI=mongodb://localhost:27017/skillbridge
# Or use MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/skillbridge

# Server Port
PORT=8000

# JWT Secret (use a strong random string)
JWT_SECRET=your_jwt_secret_key_here

# Cloudinary Configuration (for image uploads)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 4. Start the Backend Server

```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

The backend will run on `http://localhost:8000`

## Frontend Setup

### 1. Navigate to Frontend Directory

```bash
cd frontend
```

### 2. Start the Frontend Server

```bash
npm start
```

Or directly using Python:

```bash
python3 -m http.server 3000
```

The frontend will be available at `http://localhost:3000`

### 3. Configure API URL (if needed)

If your backend is running on a different URL, edit `/frontend/js/api.js` and update the `API_BASE_URL`:

```javascript
const API_BASE_URL = 'http://localhost:8000/api';
```

## Running the Complete Application

1. **Start MongoDB** (if running locally):
   ```bash
   mongod
   ```

2. **Start the Backend** (in one terminal):
   ```bash
   cd backend
   npm run dev
   ```

3. **Start the Frontend** (in another terminal):
   ```bash
   cd frontend
   npm start
   ```

4. **Open your browser** and navigate to:
   ```
   http://localhost:3000
   ```

## Using the Application

### For Students

1. Go to `http://localhost:3000/register.html`
2. Select "Student" as your role
3. Fill in your profile information:
   - Username and email
   - Password
   - Profile image
   - Full name, skills, bio
   - Portfolio links
   - Availability
4. After registration, login with your credentials
5. Browse projects and apply with your resume
6. Track your applications in your dashboard

### For Clients

1. Go to `http://localhost:3000/register.html`
2. Select "Client" as your role
3. Fill in your organization information:
   - Username and email
   - Password
   - Organization logo
   - Organization name and description
   - Social links (optional)
4. After registration, login with your credentials
5. Create projects with requirements and budget
6. Review applications from students
7. Manage your projects from the dashboard

## API Documentation

The complete API documentation is available in `apiDocumentation.md` in the root directory.

Key endpoints:

- **POST** `/api/users/register` - Register a new user
- **POST** `/api/users/login` - Login and get JWT token
- **GET** `/api/projects` - Get all projects (with filters)
- **POST** `/api/projects` - Create a new project (client only)
- **POST** `/api/applications` - Apply to a project (student only)
- **GET** `/api/applications/student` - Get student's applications

## Features

### Frontend Features

- ✨ **Modern UI**: Beautiful dark theme with gradient accents
- 🎨 **Smooth Animations**: CSS animations throughout
- 📱 **Responsive Design**: Works on all device sizes
- 🔐 **Secure Authentication**: JWT-based authentication
- 🎯 **Role-based Access**: Different dashboards for students and clients
- 🔍 **Advanced Filtering**: Filter projects by status, budget, skills
- 📊 **Dashboard Analytics**: View stats and manage activities
- 👤 **Profile Management**: Edit profiles with image uploads
- 📄 **Resume Uploads**: Students can upload resumes (PDF)

### Backend Features

- 🔒 **JWT Authentication**: Secure token-based authentication
- 👥 **Role-based Authorization**: Student, Client, and Admin roles
- 📦 **MongoDB Integration**: Mongoose ODM for database operations
- ☁️ **Cloud Storage**: Cloudinary integration for file uploads
- ✅ **Input Validation**: Comprehensive request validation
- 🔍 **Advanced Queries**: Filter and search capabilities
- ⭐ **Review System**: Clients can review students
- 🚀 **RESTful API**: Clean and well-documented endpoints

## Technology Stack

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Cloudinary for file storage
- Multer for file uploads
- Bcrypt for password hashing

### Frontend
- Vanilla HTML5
- CSS3 with custom properties
- JavaScript (ES6+)
- Fetch API for HTTP requests
- LocalStorage for client-side data

## Project Structure

```
skill-bridge-backend/
├── backend/
│   ├── configs/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── validators/
│   ├── index.js
│   └── package.json
├── frontend/
│   ├── css/
│   │   └── main.css
│   ├── js/
│   │   ├── api.js
│   │   ├── auth.js
│   │   └── utils.js
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── projects.html
│   ├── project-detail.html
│   ├── dashboard-student.html
│   ├── dashboard-client.html
│   ├── profile.html
│   └── package.json
├── apiDocumentation.md
└── SETUP.md (this file)
```

## Troubleshooting

### Backend Issues

**MongoDB connection failed**
- Ensure MongoDB is running
- Check your `MONGO_URI` in `.env`
- Verify network connectivity for cloud databases

**CORS errors**
- Check that the frontend URL matches the CORS configuration in `backend/index.js`
- Default is set to `http://localhost:5173` - update to `http://localhost:3000`

**File upload errors**
- Verify Cloudinary credentials in `.env`
- Check file size limits (5MB for resumes)

### Frontend Issues

**API connection failed**
- Ensure backend is running on `http://localhost:8000`
- Check browser console for detailed errors
- Verify `API_BASE_URL` in `js/api.js`

**Login/Register not working**
- Check that backend is running
- Verify network tab in browser dev tools
- Ensure all required fields are filled

## Security Notes

- Never commit `.env` files to version control
- Use strong JWT secrets in production
- Enable HTTPS in production
- Sanitize all user inputs
- Keep dependencies up to date

## Development Tips

- Use browser dev tools to debug frontend issues
- Check backend logs for API errors
- Use MongoDB Compass for database inspection
- Test API endpoints with Postman or Thunder Client

## Production Deployment

### Backend
1. Set environment variables on your hosting platform
2. Use a production MongoDB instance (MongoDB Atlas recommended)
3. Enable CORS for your frontend domain
4. Use a process manager like PM2
5. Set up SSL/TLS certificates

### Frontend
1. Deploy to a static hosting service (Netlify, Vercel, GitHub Pages)
2. Update `API_BASE_URL` to your production backend URL
3. Configure CORS on backend to allow your frontend domain
4. Enable HTTPS

## License

ISC

## Support

For issues and questions, please open an issue on the GitHub repository.
