const express = require("express");
const router = express.Router();
const registerController = require("../controllers/registerController");

// Route to handle user registration
router.post("/", registerController.register);

// Route to get all registered users
router.get("/", registerController.getAllUsers);

module.exports = router;
