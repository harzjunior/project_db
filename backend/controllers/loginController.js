const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { getUserByUsername } = require("../models/loginModel");

// Controller function to handle user login
const login = async (req, res) => {
  const { loginUsername, loginPassword } = req.body;

  try {
    // Retrieve user from the database by their username
    const user = await getUserByUsername(loginUsername);

    // Check if the user exists
    if (user) {
      // Compare the provided password with the hashed password stored in the database
      const isPasswordValid = bcrypt.compareSync(loginPassword, user.password);

      if (isPasswordValid) {
        // Password is correct, generate and return a JWT token
        const token = jwt.sign({ userId: user.id }, "sauce", {
          expiresIn: "1h", // You can adjust the expiration time
        });
        res.json({ token, username: user.username }); // Send token and username to the client
      } else {
        // Password is incorrect
        res.status(401).json({ error: "Invalid credentials" });
      }
    } else {
      // User not found
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error querying user in MongoDB:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }

  // Error handling for bcrypt
  try {
    const hashedPassword = bcrypt.hashSync(loginPassword, 10);
  } catch (error) {
    console.error("Error hashing password:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  login,
};
