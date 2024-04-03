const Login = require("../models/registerModel");

// Define a function to query the database for a user by their username
const getUserByUsername = async (username) => {
  try {
    // Use the Login model to find a user by their username
    const user = await Login.findOne({ username: username });
    return user; // Return the user object if found
  } catch (error) {
    // Throw an error if there's any problem during the database query
    throw new Error("Error finding user by username");
  }
};

// Export the function to query user by username
module.exports = {
  getUserByUsername,
};
