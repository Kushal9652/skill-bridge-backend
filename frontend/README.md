# SkillBridge Frontend

A modern, responsive frontend for the SkillBridge platform built with vanilla HTML, CSS, and JavaScript (no bundlers).

## Features

- **Beautiful UI**: Modern design with smooth animations and a cohesive color scheme
- **No Bundlers**: Pure HTML/CSS/JS for simplicity
- **Responsive**: Works on all device sizes
- **Role-based Dashboards**: Separate interfaces for students and clients
- **Real-time Feedback**: Instant alerts and loading states
- **Smooth Animations**: CSS animations for a polished user experience

## Pages

- `index.html` - Landing page
- `login.html` - User login
- `register.html` - User registration (student/client)
- `projects.html` - Browse and filter projects
- `project-detail.html` - View project details and apply
- `dashboard-student.html` - Student dashboard with applications
- `dashboard-client.html` - Client dashboard with projects
- `profile.html` - View and edit user profile

## Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Start the development server:
   ```bash
   npm start
   ```
   
   Or use Python's HTTP server directly:
   ```bash
   python3 -m http.server 3000
   ```

3. Open your browser and go to:
   ```
   http://localhost:3000
   ```

## Backend Configuration

Make sure the backend is running on `http://localhost:8000` before using the frontend.

To change the API URL, edit `/js/api.js` and update the `API_BASE_URL` constant.

## Color Scheme

- Primary: Indigo (#6366f1)
- Secondary: Purple (#8b5cf6)
- Accent: Pink (#ec4899)
- Background: Dark slate (#0f172a)
- Success: Green (#10b981)
- Error: Red (#ef4444)

## Structure

```
frontend/
├── index.html              # Landing page
├── login.html              # Login page
├── register.html           # Registration page
├── projects.html           # Browse projects
├── project-detail.html     # Project details
├── dashboard-student.html  # Student dashboard
├── dashboard-client.html   # Client dashboard
├── profile.html            # User profile
├── css/
│   └── main.css            # Main stylesheet
├── js/
│   ├── api.js              # API client
│   ├── auth.js             # Authentication utilities
│   └── utils.js            # UI utilities
└── package.json
```

## Usage

### For Students

1. Register as a student with your skills and portfolio
2. Browse available projects
3. Apply to projects with your resume
4. Track application status in your dashboard
5. View and edit your profile

### For Clients

1. Register as a client with your organization details
2. Create new projects with requirements and budget
3. Review applications from students
4. Manage project status
5. View and edit your organization profile

## No Build Process

This frontend uses vanilla JavaScript modules and requires no build process or bundlers. All files are served directly to the browser.

## Browser Compatibility

Works on all modern browsers that support:
- ES6+ JavaScript
- CSS Grid and Flexbox
- CSS Custom Properties (Variables)
- Fetch API
