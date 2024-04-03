const bcrypt = require("bcrypt");
const Register = require("../models/registerModel");

// Controller function to handle user registration
const register = async (req, res) => {
  const { registerUsername, registerPassword, registerEmail } = req.body;

  try {
    const hashedPassword = bcrypt.hashSync(registerPassword, 10); // Hash the password

    // Create a new user document
    const newRegister = await Register.create({
      username: registerUsername,
      password: hashedPassword,
      email: registerEmail,
    });

    const savedRegister = await newRegister.save();
    res.status(201).json(savedRegister);
    // res.json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  register,
};
