const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");

// Route to handle contact form submission
router.post("/", loginController.login);

module.exports = router;
