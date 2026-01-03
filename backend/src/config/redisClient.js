import { createClient } from "redis";

const client = createClient({
  username: "default",
  password: process.env.REDIS_PASSWORD, 
  socket: {
    host: "redis-14594.crce217.ap-south-1-1.ec2.cloud.redislabs.com",
    port: 14594,
  },
});

// Event listeners for connection status
client.on("error", (err) => {
  console.log("Redis Client Error:", err);
});

client.on("connect", () => {
  console.log("Connecting to Redis...");
});

client.on("ready", () => {
  console.log("Redis connected successfully!");
});

// Connect to Redis when the application starts
client.connect().catch((err) => {
  console.error("Failed to connect to Redis:", err);
});

export default client;
