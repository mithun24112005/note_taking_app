import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import api from "../lib/axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const googleAuth = async (code) => {
    return await api.post("/auth/google", {
        code,
    });
};

const GoogleLoginButton = ({ setIsAuthenticated, text = "Login with Google" }) => {
    const navigate = useNavigate();

    const responseGoogle = async (authResult) => {
        try {
            if (authResult["code"]) {
                const result = await googleAuth(authResult["code"]);

                // Check if the response is valid
                if (result.status === 200) {
                    const { token, user } = result.data;

                    localStorage.setItem("token", token);
                    localStorage.setItem("user", JSON.stringify(user));

                    setIsAuthenticated(true);
                    toast.success("Login successful!");
                    navigate("/");
                }
            } else {
                throw new Error("Google login failed to get auth code");
            }
        } catch (error) {
            console.error("Error during google login:", error);
            if (error.response) {
                console.error("Backend error data:", error.response.data);
                console.error("Backend error status:", error.response.status);
                toast.error(`Login failed: ${error.response.data.message || error.message}`);
            } else {
                toast.error("Google authentication failed. Check console for details.");
            }
        }
    };
    //... existing code ...

    const g_login = useGoogleLogin({
        onSuccess: responseGoogle,
        onError: responseGoogle,
        flow: "auth-code",
    });

    return (
        <button
            onClick={g_login}
            type="button"
            className="btn btn-outline w-full"
        >
            <svg
                className="mr-2 h-4 w-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
            >
                <path
                    fill="currentColor"
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                ></path>
            </svg>
            {text}
        </button>
    );
};

export default GoogleLoginButton;
