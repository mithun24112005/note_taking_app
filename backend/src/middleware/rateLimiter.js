import rateLimit from "express-rate-limit";
import RedisStore from "rate-limit-redis";
import client from "../config/redisClient.js";

// Configure rate limiter to limit API requests
export const apiRateLimiter = rateLimit({
  // Use Redis to store rate limit data (counts of requests per user)
  store: new RedisStore({
    sendCommand: (...args) => client.sendCommand(args), // Send commands to Redis
  }),
  
  // Time window: 1 minute (60 seconds)
  windowMs: 1 * 60 * 1000,
  
  // Maximum requests allowed per time window: 10 requests
  max: 100,
  
  // Include standard rate limit headers in the response
  standardHeaders: true, // Return 'RateLimit-*' headers
  legacyHeaders: false,  // Don't use old 'X-RateLimit-*' headers
  
  // Error message when limit is exceeded
  message: {
    error: "Too many requests, please try again later",
  },
});
