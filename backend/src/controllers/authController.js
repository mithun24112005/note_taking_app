import axios from "axios";
import oauth2Client from "../utils/googleConfig.js";
import UserModel from "../models/User.js";
import jwt from "jsonwebtoken";

const googleLogin = async (req, res) => {
  try {
    const { code } = req.body;
    const googleRes = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(googleRes.tokens);

    const userRes = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`
    );
    const { email, name } = userRes.data;

    let user = await UserModel.findOne({ email });
    if (!user) {
      user = await UserModel.create({ name, email, authProvider: "google" });
    }
    const { _id } = user;
    const token = jwt.sign({ _id, email }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    return res.status(200).json({
      message: "success",
      token,
      user,
    });
  } catch (error) {
    console.error("Error during Google login:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export default googleLogin;
