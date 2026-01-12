# ThinkBoard - Note Taking Application 🌼

<div align="center">

![ThinkBoard](https://img.shields.io/badge/ThinkBoard-Note_Taking-00FF9D?style=for-the-badge)
![MERN Stack](https://img.shields.io/badge/Stack-MERN-61DAFB?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

**A modern, full-stack note-taking application built with the MERN stack**

*Organize your thoughts, tasks, and ideas in one beautiful, secure place*

[Live Demo](https://note-taking-app-three-gold.vercel.app) • [Report Bug](https://github.com/mithun24112005/note_taking_app/issues) • [Request Feature](https://github.com/mithun24112005/note_taking_app/issues)

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Architecture](#-architecture)
- [Getting Started](#-getting-started)
- [API Documentation](#-api-documentation)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Overview

**ThinkBoard** is a production-ready, full-stack note-taking application designed with modern web development best practices. Built using the MERN (MongoDB, Express, React, Node.js) stack, it offers a seamless experience for creating, managing, and organizing notes with enterprise-grade security and performance.

### Why ThinkBoard?

- 🚀 **Lightning Fast**: Powered by Vite for instant hot module replacement and optimized builds
- 🔒 **Secure by Design**: JWT authentication, bcrypt password hashing, and rate limiting
- 💾 **Never Lose Work**: WhatsApp-style auto-save drafts with LocalStorage
- 🎨 **Beautiful UI**: Modern, responsive design with TailwindCSS and DaisyUI
- ⚡ **Real-time Performance**: Optimized API queries and efficient state management
- 🌐 **Production Ready**: Deployed on Vercel with proper CORS and environment configuration

---

## ✨ Features

### Core Functionality
- **📝 Full CRUD Operations**: Create, read, update, and delete notes with a smooth, intuitive interface
- **🔍 Rich Note Content**: Support for titles and content with proper formatting
- **⏰ Timestamps**: Automatic tracking of creation and update times for all notes
- **🗂️ User Isolation**: Each user can only access their own notes (secure multi-tenancy)

### Advanced Features

#### 💾 WhatsApp-Style Draft Auto-Save
- **Real-time Auto-save**: Your work is saved to LocalStorage as you type
- **Works Everywhere**: Auto-save for both new notes and existing note edits
- **Smart Restoration**: Drafts are automatically restored when you return to the page
- **Intelligent Cleanup**: Drafts automatically clear after successful save
- **Visual Feedback**: Draft indicator shows when unsaved changes exist

#### 🔐 Dual Authentication System
- **Google OAuth 2.0**: One-click secure login with your Google account
  - Server-side token verification
  - Automatic user profile creation
  - Seamless authentication flow
- **Traditional Auth**: Email and password registration/login
  - Bcrypt password hashing (industry-standard security)
  - JWT token-based sessions
  - Secure password validation

#### 🛡️ Security & Performance
- **Rate Limiting**: Redis-backed rate limiter to prevent API abuse (100 requests/minute)
- **JWT Authentication**: Secure, stateless authentication with configurable expiration
- **CORS Protection**: Configured to only allow trusted origins
- **Password Security**: Bcrypt hashing with salt rounds for maximum security
- **Error Handling**: Comprehensive error handling with user-friendly messages

#### 🎨 Modern UI/UX
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark Mode Support**: Theme switching with DaisyUI
- **Toast Notifications**: Real-time feedback with React Hot Toast
- **Loading States**: Smooth loading indicators for better UX
- **Empty States**: Beautiful empty state designs with call-to-action
- **Glassmorphism**: Modern gradient backgrounds with depth

---

## 🛠️ Tech Stack

### Frontend Architecture

| Technology | Purpose | Version |
|------------|---------|---------|
| **React 19** | UI Library | ^19.1.0 |
| **Vite** | Build Tool & Dev Server | ^6.3.5 |
| **React Router DOM** | Client-side Routing | ^7.10.1 |
| **Axios** | HTTP Client | ^1.13.2 |
| **TailwindCSS** | Utility-first CSS Framework | ^3.4.17 |
| **DaisyUI** | Component Library | ^4.12.24 |
| **React Hot Toast** | Toast Notifications | ^2.5.2 |
| **@react-oauth/google** | Google OAuth Integration | ^0.12.2 |
| **Lucide React** | Icon Library | ^0.510.0 |

### Backend Architecture

| Technology | Purpose | Version |
|------------|---------|---------|
| **Node.js** | JavaScript Runtime | - |
| **Express.js** | Web Framework | ^4.22.1 |
| **MongoDB** | NoSQL Database | - |
| **Mongoose** | ODM for MongoDB | ^8.14.3 |
| **JWT** | Authentication Tokens | ^9.0.3 |
| **Bcrypt** | Password Hashing | ^6.0.0 |
| **Google APIs** | OAuth Integration | ^167.0.0 |
| **Redis** | Caching & Rate Limiting | ^5.10.0 |
| **@upstash/redis** | Serverless Redis Client | ^1.34.9 |
| **@upstash/ratelimit** | Rate Limiting | ^2.0.5 |
| **Express Rate Limit** | API Rate Limiting Middleware | ^8.2.1 |

### Development Tools

- **ESLint**: Code linting and quality checks
- **Nodemon**: Auto-restart development server
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

---

## 🏗️ Architecture

### Project Structure

```
note_taking_daisy/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── GoogleLoginButton.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── NoteCard.jsx
│   │   │   ├── NotesNotFound.jsx
│   │   │   ├── RateLimitedUI.jsx
│   │   │   └── ThemeSelector.jsx
│   │   ├── pages/          # Page components
│   │   │   ├── HomePage.jsx
│   │   │   ├── CreatePage.jsx
│   │   │   ├── NoteDetailPage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   └── RegisterPage.jsx
│   │   ├── hooks/          # Custom React hooks
│   │   │   └── useDraft.js  # Draft auto-save logic
│   │   ├── lib/            # Utilities & configurations
│   │   │   ├── axios.js     # Axios instance with interceptors
│   │   │   └── utils.js
│   │   ├── App.jsx         # Main app component with routing
│   │   ├── main.jsx        # React entry point
│   │   └── index.css       # Global styles
│   ├── public/             # Static assets
│   ├── tailwind.config.js  # Tailwind configuration
│   ├── vite.config.js      # Vite configuration
│   └── package.json
│
├── backend/                # Express backend application
│   ├── src/
│   │   ├── config/         # Configuration files
│   │   │   ├── db.js        # MongoDB connection
│   │   │   └── redisClient.js  # Redis connection
│   │   ├── controllers/    # Route controllers
│   │   │   ├── authController.js  # Google OAuth logic
│   │   │   └── notesController.js # Note CRUD operations
│   │   ├── middleware/     # Express middleware
│   │   │   ├── auth.js      # JWT authentication middleware
│   │   │   └── rateLimiter.js  # Rate limiting middleware
│   │   ├── models/         # Mongoose schemas
│   │   │   ├── User.js
│   │   │   └── Note.js
│   │   ├── routes/         # API routes
│   │   │   ├── auth.js      # Traditional auth routes
│   │   │   ├── authRouter.js  # Google OAuth routes
│   │   │   └── notesRoutes.js # Notes CRUD routes
│   │   ├── utils/          # Utility functions
│   │   │   ├── googleConfig.js  # Google OAuth config
│   │   │   └── jwt.js       # JWT utilities
│   │   └── server.js       # Express server setup
│   └── package.json
│
├── api/                    # Vercel serverless function
├── vercel.json            # Vercel deployment config
├── package.json           # Root package.json for deployment
└── README.md              # Project documentation
```

### Data Models

#### User Model
```javascript
{
  googleId: String,           // Google OAuth ID (optional)
  email: String,             // User email (unique, required)
  name: String,              // User display name
  passwordHash: String,      // Hashed password for local auth
  authProvider: String       // "google" or "local"
}
```

#### Note Model
```javascript
{
  title: String,             // Note title (required)
  content: String,           // Note content (required)
  userId: ObjectId,          // Reference to User (required)
  createdAt: Date,          // Auto-generated
  updatedAt: Date           // Auto-generated
}
```

### Application Flow

#### Authentication Flow
1. **Google OAuth**:
   - User clicks "Login with Google"
   - Frontend redirects to Google OAuth consent screen
   - Google returns authorization code
   - Backend exchanges code for access token
   - Backend fetches user profile from Google
   - User is created/found in MongoDB
   - JWT token is generated and sent to frontend
   - Token is stored in LocalStorage

2. **Local Authentication**:
   - User registers with email/password
   - Password is hashed with bcrypt
   - User document is created in MongoDB
   - User logs in with credentials
   - Backend verifies password hash
   - JWT token is generated and sent to frontend

#### Note Management Flow
1. User authenticates and receives JWT token
2. Frontend includes JWT in Authorization header for all requests
3. Backend middleware verifies JWT and extracts userId
4. CRUD operations are performed with userId filter
5. Only authenticated user's notes are accessible
6. Drafts are saved to LocalStorage for offline persistence

#### Rate Limiting Flow
1. Every API request passes through rate limiter middleware
2. Redis tracks request count per IP address
3. Limit: 100 requests per 60-second window
4. Exceeded limit returns 429 status code
5. Frontend displays user-friendly rate limit message

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js
- **MongoDB** - Local installation or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account
- **Google Cloud Console** - For OAuth credentials

### Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/mithun24112005/note_taking_app.git
cd note_taking_app
```

#### 2. Backend Setup

Navigate to the backend directory:
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory:
```env
# Server Configuration
PORT=5001

# Database
MONGO_URI=mongodb://localhost:27017/notes-app
# or for MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/notes-app

# JWT Configuration
JWT_SECRET=your_super_secret_key_change_this_in_production
JWT_EXPIRES_IN=7d

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Redis (for rate limiting)
# If using Upstash Redis:
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
```

Start the backend development server:
```bash
npm run dev
```

The backend will run on `http://localhost:5001`

#### 3. Frontend Setup

Open a new terminal and navigate to the frontend directory:
```bash
cd frontend
npm install
```

Start the frontend development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

#### 4. Google OAuth Configuration

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Google People API**:
   - Navigate to "APIs & Services" > "Library"
   - Search for "Google People API"
   - Click "Enable"
4. Configure OAuth Consent Screen:
   - Go to "APIs & Services" > "OAuth consent screen"
   - Select "External" user type
   - Fill in required fields (App name, support email, etc.)
   - Add scopes: `email`, `profile`, `openid`
5. Create OAuth Credentials:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "OAuth Client ID"
   - Select "Web application"
   - Add **Authorized JavaScript origins**:
     - `http://localhost:5173` (for local development)
     - `https://your-production-url.com` (for production)
   - Add **Authorized redirect URIs**:
     - `http://localhost:5173` (for local development)
6. Copy the **Client ID** and **Client Secret**
7. Add them to your backend `.env` file
8. **Important**: Also update the Client ID in `frontend/src/App.jsx`:
   ```javascript
   <GoogleOAuthProvider clientId="YOUR_CLIENT_ID_HERE">
   ```

#### 5. Redis Setup (Optional but Recommended)

For rate limiting, you need a Redis instance:

**Option A: Local Redis**
```bash
# Install Redis locally
# On macOS:
brew install redis
brew services start redis

# On Ubuntu:
sudo apt-get install redis-server
sudo service redis-server start

# On Windows:
# Use WSL or download from https://github.com/microsoftarchive/redis/releases
```

**Option B: Upstash Redis (Serverless)**
1. Sign up at [Upstash](https://upstash.com/)
2. Create a new Redis database
3. Copy the REST URL and Token
4. Add to your `.env` file

### Running the Application

1. Start MongoDB (if running locally):
   ```bash
   mongod
   ```

2. Start the backend server:
   ```bash
   cd backend
   npm run dev
   ```

3. Start the frontend:
   ```bash
   cd frontend
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

### Building for Production

#### Frontend
```bash
cd frontend
npm run build
```
This creates an optimized production build in the `dist` folder.

#### Backend
```bash
cd backend
npm start
```
This runs the server without nodemon for production.

---

## 📡 API Documentation

### Base URL
- **Development**: `http://localhost:5001/api`
- **Production**: `https://your-backend-url.com/api`

### Authentication

All note-related endpoints require authentication. Include the JWT token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

### Endpoints

#### Authentication Endpoints

##### Register User (Local Auth)
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123"
}

Response (200 OK):
{
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "authProvider": "local"
  }
}
```

##### Login User (Local Auth)
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securePassword123"
}

Response (200 OK):
{
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

##### Google OAuth Login
```http
POST /api/auth/google
Content-Type: application/json

{
  "code": "google_authorization_code"
}

Response (200 OK):
{
  "message": "success",
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "authProvider": "google"
  }
}
```

#### Notes Endpoints

##### Get All Notes (User's Notes)
```http
GET /api/notes
Authorization: Bearer <token>

Response (200 OK):
[
  {
    "_id": "note_id",
    "title": "My First Note",
    "content": "This is the content of my note",
    "userId": "user_id",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
]
```

##### Get Single Note
```http
GET /api/notes/:id
Authorization: Bearer <token>

Response (200 OK):
{
  "_id": "note_id",
  "title": "My First Note",
  "content": "This is the content of my note",
  "userId": "user_id",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

##### Create Note
```http
POST /api/notes
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "New Note",
  "content": "This is a new note"
}

Response (201 Created):
{
  "_id": "note_id",
  "title": "New Note",
  "content": "This is a new note",
  "userId": "user_id",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

##### Update Note
```http
PUT /api/notes/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Updated Title",
  "content": "Updated content"
}

Response (200 OK):
{
  "_id": "note_id",
  "title": "Updated Title",
  "content": "Updated content",
  "userId": "user_id",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T12:00:00.000Z"
}
```

##### Delete Note
```http
DELETE /api/notes/:id
Authorization: Bearer <token>

Response (200 OK):
{
  "message": "Note deleted successfully"
}
```

### Error Responses

#### 400 Bad Request
```json
{
  "error": "Invalid request body"
}
```

#### 401 Unauthorized
```json
{
  "error": "Authentication required"
}
```

#### 403 Forbidden
```json
{
  "error": "You don't have permission to access this resource"
}
```

#### 404 Not Found
```json
{
  "error": "Note not found"
}
```

#### 429 Too Many Requests
```json
{
  "error": "Too many requests, please try again later"
}
```

#### 500 Internal Server Error
```json
{
  "error": "Internal server error"
}
```

---

## 🚢 Deployment

### Deploying to Vercel

This project is configured for easy deployment to Vercel.

#### Backend + Frontend (Monorepo)

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Configure Environment Variables** in Vercel Dashboard:
   - `MONGO_URI`
   - `JWT_SECRET`
   - `JWT_EXPIRES_IN`
   - `GOOGLE_CLIENT_ID`
   - `GOOGLE_CLIENT_SECRET`
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`

5. **Update CORS Origins**:
   - Update `backend/src/server.js` to include your Vercel frontend URL
   - Update Google OAuth allowed origins in Google Cloud Console

#### Configuration Files

The project includes:
- `vercel.json` - Vercel routing configuration
- `api/index.js` - Serverless function handler (if needed)

### Alternative Deployment Options

#### Frontend (Netlify/Vercel)
- Build command: `npm run build`
- Output directory: `dist`
- Environment variables: None required (API URL is configured in code)

#### Backend (Heroku/Railway/Render)
- Build command: `npm install`
- Start command: `npm start`
- Environment variables: All `.env` variables

---

## 🔧 Configuration

### Environment Variables

#### Backend (.env)
```env
# Required
PORT=5001
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_secret_key>
GOOGLE_CLIENT_ID=<your_google_client_id>
GOOGLE_CLIENT_SECRET=<your_google_client_secret>

# Optional
JWT_EXPIRES_IN=7d
NODE_ENV=development

# For production rate limiting
UPSTASH_REDIS_REST_URL=<your_upstash_url>
UPSTASH_REDIS_REST_TOKEN=<your_upstash_token>
```

#### Frontend
Update the following in code:
- `frontend/src/App.jsx`: Google OAuth Client ID
- `frontend/src/lib/axios.js`: Backend API URL (if different from localhost)

---

## 👨‍💻 Author

**Mithun**

- GitHub: [@mithun24112005](https://github.com/mithun24112005)
- Project Link: [https://github.com/mithun24112005/note_taking_app](https://github.com/mithun24112005/note_taking_app)

---
