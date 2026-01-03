import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/auth.js"
import authRouter from "./routes/authRouter.js";
import { apiRateLimiter } from "./middleware/rateLimiter.js";

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

// middleware
const allowedOrigins = [
  "http://localhost:5173",
  "https://note-taking-app-three-gold.vercel.app"
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      
      if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true
  })
);
app.use(express.json()); // this middleware will parse JSON bodies: req.body
app.use(apiRateLimiter);

app.use("/api/auth", authRoutes);
app.use("/api/notes", notesRoutes);
app.use("/api/auth", authRouter);


connectDB().then(() => {
  // Only listen if not running in a serverless environment (e.g. local dev)
  if (process.env.NODE_ENV !== "production") {
    app.listen(PORT, () => {
      console.log("Server started on PORT:", PORT);
    });
  }
});

export default app;
