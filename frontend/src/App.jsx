import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for token to determine authentication state
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <GoogleOAuthProvider clientId="281947354784-lcdtffhdb2dfssql60nctj030ksiohvr.apps.googleusercontent.com">
      <div className="relative h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" />
        <Routes>
          <Route path="/" element={<HomePage setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/note/:id" element={<NoteDetailPage />} />

          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/" /> : <LoginPage setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path="/register"
            element={isAuthenticated ? <Navigate to="/" /> : <RegisterPage setIsAuthenticated={setIsAuthenticated} />}
          />
        </Routes>
      </div>
    </GoogleOAuthProvider>
  );
};
export default App;
