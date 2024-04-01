const mongoose = require("mongoose");

// Set up MongoDB connection
let uri = "mongodb://localhost:27017/address_db"; //from mongodb Compass

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectDB;
