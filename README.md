# Note Taking Daisy 🌼

A beautiful, responsive, and secure note-taking application built with the MERN stack. Organize your thoughts, tasks, and ideas in one place with a modern user interface.

---

## ✨ Features

- **📝 CRUD Operations**: Create, Read, Update, and Delete notes seamlessly.
- **💾 WhatsApp-Style Draft Auto-Save**: Never lose your work! Your notes are automatically saved as you type:
  - Auto-saves drafts to LocalStorage in real-time
  - Works for both new notes and existing note edits
  - Drafts are restored automatically when you return
  - Smart cleanup - drafts clear after successful save
  - Visual indicator shows when draft is active
- **🔐 Secure Authentication**:
  - **Google OAuth**: Fast and secure login with your Google account.
  - **Local Auth**: Traditional email and password registration/login.
- **🛡️ Rate Limiting**: Protection against API abuse.
- **🎨 Modern UI**: Built with TailwindCSS and DaisyUI for a premium look and feel.
- **📱 Responsive Design**: Works great on desktop, tablet, and mobile.
- **⚡ Fast Performance**: Powered by Vite and optimized backend queries.

---

## 🛠️ Tech Stack

### Frontend
- **React.js** (Vite)
- **TailwindCSS** & **DaisyUI** (Styling)
- **React Router DOM** (Navigation)
- **Axios** (API Communication)
- **React Hot Toast** (Notifications)
- **@react-oauth/google** (Google Auth)

### Backend
- **Node.js** & **Express.js**
- **MongoDB** & **Mongoose** (Database)
- **JWT (JsonWebToken)** (Authentication)
- **Bcrypt** (Password Hashing)
- **Google APIs** (OAuth Integration)

---

## 🚀 Getting Started

### Prerequisites
- Node.js installed on your machine.
- MongoDB connection string (local or Atlas).
- Google Cloud Console Project (for OAuth credentials).

### 1. Clone the Repository
```bash
git clone https://github.com/mithun24112005/note_taking_app.git
cd note_taking_app
```

### 2. Backend Setup
Navigate to the backend folder and install dependencies:
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory with the following variables:
```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
# Optional: JWT_EXPIRES_IN=7d
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

Start the backend server:
```bash
npm run dev
```

### 3. Frontend Setup
Navigate to the frontend folder and install dependencies:
```bash
cd ../frontend
npm install
```

Start the frontend development server:
```bash
npm run dev
```

### 4. Google OAuth Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project.
3. Enable "Google People API".
4. Configure the OAuth Consent Screen (External).
5. Create Credentials > OAuth Client ID (Web Application).
6. Add `http://localhost:5173` to **Authorized JavaScript origins**.
7. Copy the **Client ID** and **Client Secret** to your backend `.env`.
8. *Note*: You also need to paste the Client ID into `frontend/src/App.jsx` inside the `GoogleOAuthProvider`.

---

