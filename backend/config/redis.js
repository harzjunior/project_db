// redis.js

const redis = require("redis");

// Create Redis client
const client = redis.createClient();

// Handle Redis connection errors
client.on("error", (err) => {
  console.error("Redis error:", err);
});

module.exports = client;
