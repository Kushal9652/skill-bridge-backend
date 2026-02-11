# SkillBridge

> Connect talented students with exciting client projects

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## 🌟 Overview

SkillBridge is a modern platform that bridges the gap between skilled students looking for real-world experience and clients seeking talented developers for their projects. Built with a clean architecture separating backend and frontend concerns.

![Landing Page](https://github.com/user-attachments/assets/02835118-8d1a-40b8-b1f7-e235b0b9b736)

## ✨ Features

### For Students 🎓
- Create detailed profiles showcasing skills and portfolios
- Browse and filter available projects
- Apply to projects with resume uploads
- Track application status in real-time
- Build reputation through client reviews

### For Clients 💼
- Post projects with detailed requirements
- Review applications from talented students
- Manage project lifecycle (open, in-progress, completed)
- Rate and review student work
- Track all your projects in one dashboard

### Technical Highlights 🚀
- **Modern UI**: Beautiful dark theme with smooth animations
- **No Bundlers**: Frontend uses vanilla JavaScript - no build process required
- **Secure**: JWT authentication and role-based access control
- **Responsive**: Works seamlessly on all device sizes
- **RESTful API**: Well-documented Express.js backend
- **Cloud Storage**: Integrated with Cloudinary for file uploads

## 🎨 Screenshots

### Landing Page
![Landing Page](https://github.com/user-attachments/assets/02835118-8d1a-40b8-b1f7-e235b0b9b736)

### Login Page
![Login Page](https://github.com/user-attachments/assets/08ecad80-d8ee-4f10-9019-90678f3bd1b3)

### Registration Page
![Register Page](https://github.com/user-attachments/assets/3bccebd5-5cc5-42f1-a13e-3d2a2426eb87)

### Browse Projects
![Projects Page](https://github.com/user-attachments/assets/968c1601-7a1d-4ebe-8d87-87627cd5ce3e)

## 🚀 Quick Start

### Prerequisites
- Node.js (v14+)
- MongoDB
- Python 3 (for frontend server)

### Backend Setup
```bash
cd backend
npm install
# Create .env file with required variables (see SETUP.md)
npm run dev
```

Backend runs on `http://localhost:8000`

### Frontend Setup
```bash
cd frontend
npm start
```

Frontend runs on `http://localhost:3000`

📖 **Full setup instructions**: See [SETUP.md](SETUP.md)

## 🏗️ Architecture

```
┌─────────────────┐
│   Frontend      │  Vanilla HTML/CSS/JS
│   (Port 3000)   │  No build process
└────────┬────────┘
         │ REST API
         │ (JSON)
┌────────▼────────┐
│   Backend       │  Express.js
│   (Port 8000)   │  JWT Auth
└────────┬────────┘
         │
┌────────▼────────┐
│   MongoDB       │  User data
│   Database      │  Projects, Apps
└─────────────────┘
```

## 📦 Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (jsonwebtoken)
- **File Upload**: Multer + Cloudinary
- **Security**: Bcrypt, CORS

### Frontend
- **Core**: HTML5, CSS3, JavaScript (ES6+)
- **No Framework**: Vanilla JS for simplicity
- **No Build Tools**: Direct browser execution
- **Storage**: LocalStorage for auth tokens
- **HTTP**: Fetch API

## 📚 API Documentation

Comprehensive API documentation is available in [apiDocumentation.md](apiDocumentation.md)

Key endpoints:
- `POST /api/users/register` - User registration
- `POST /api/users/login` - User authentication
- `GET /api/projects` - Browse projects (with filters)
- `POST /api/applications` - Apply to projects
- `POST /api/reviews` - Submit reviews

## 🎨 Design System

### Color Palette
- **Primary**: Indigo (#6366f1)
- **Secondary**: Purple (#8b5cf6)
- **Accent**: Pink (#ec4899)
- **Background**: Dark Slate (#0f172a)
- **Success**: Green (#10b981)
- **Error**: Red (#ef4444)

### Key Features
- Gradient text effects
- Smooth CSS transitions
- Card-based layouts
- Glassmorphism effects
- Responsive grid system

## 📁 Project Structure

```
skill-bridge-backend/
├── backend/              # Express.js API
│   ├── controllers/      # Request handlers
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API routes
│   ├── middlewares/     # Auth, validation
│   └── index.js         # Entry point
├── frontend/            # Vanilla JS app
│   ├── css/            # Stylesheets
│   ├── js/             # JavaScript modules
│   └── *.html          # HTML pages
└── apiDocumentation.md  # API docs
```

## 🔐 Security Features

- JWT token-based authentication
- Password hashing with bcrypt
- Role-based access control (Student/Client/Admin)
- Input validation and sanitization
- CORS configuration
- Secure file upload handling

## 🛠️ Development

### Running in Development Mode

**Backend** (with auto-reload):
```bash
cd backend
npm run dev
```

**Frontend** (with Python server):
```bash
cd frontend
npm start
```

### Testing the Application

1. Register as a student or client
2. Login with your credentials
3. Students: Browse projects and apply
4. Clients: Create projects and review applications

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

ISC License - see LICENSE file for details

## 👨‍💻 Author

Created with ❤️ for connecting students with opportunities

## 🙏 Acknowledgments

- Built without any bundlers for simplicity
- Uses modern CSS features for smooth animations
- Follows REST API best practices
- Implements secure authentication patterns

---

**Note**: This is a full-stack application designed for educational purposes and can be extended for production use with additional security measures and optimizations.
