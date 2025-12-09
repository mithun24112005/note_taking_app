import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import authRoutes from "./routes/auth.js"
import authRouter from "./routes/authRouter.js";

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

// middleware
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
}
app.use(express.json()); // this middleware will parse JSON bodies: req.body
app.use(rateLimiter);


// our simple custom middleware
// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//   next();
// });

app.use("/api/auth", authRoutes);
app.use("/api/notes", notesRoutes);
app.use("/api/auth", authRouter);

// Removed static serving for Vercel deployment; Vercel handles frontend separately.

connectDB().then(() => {
  // Only listen if not running in a serverless environment (e.g. local dev)
  if (process.env.NODE_ENV !== "production") {
    app.listen(PORT, () => {
      console.log("Server started on PORT:", PORT);
    });
  }
});

export default app;
