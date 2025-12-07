import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET || "dev_secret";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1d";

export function generateToken(user) {
  return jwt.sign(
    {
      _id: user._id.toString(),
      email: user.email,
      provider: user.authProvider || "local",
    },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );
}

