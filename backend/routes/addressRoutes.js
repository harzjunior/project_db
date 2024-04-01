// routes/addressRoutes.js
const express = require("express");
const addressController = require("../controllers/addressController");

const router = express.Router();

// Route to get all addresses
router.get("/", addressController.getAllAddresses);

// Route to get address by ID
router.get("/:id", addressController.getAddressById);

// Route to create a new address
router.post("/", addressController.createAddress);

module.exports = router;
