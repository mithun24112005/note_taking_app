// models/User.js
import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  googleId: { type: String },          // for Google OAuth
  email: { type: String, required: true, unique: true },
  name: { type: String },

  // for normal login
  passwordHash: { type: String },      // hashed password, not plain text
  authProvider: { type: String, enum: ["google", "local"], default: "local" }
});

export default mongoose.model("User", userSchema);
