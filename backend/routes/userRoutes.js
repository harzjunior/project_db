// routes/userRoutes.js
const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

// Route to get all users
router.get("/", userController.getAllUsers);

// Route to get user by ID
router.get("/:id", userController.getUserById);

// Route to create a new user
router.post("/", userController.createUser);

module.exports = router;
