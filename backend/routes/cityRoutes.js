// routes/cityRoutes.js
const express = require("express");
const cityController = require("../controllers/cityController");

const router = express.Router();

// Route to get all cities
router.get("/", cityController.getAllCities);

// Route to get city by ID
router.get("/:id", cityController.getCityById);

// Route to create a new city
router.post("/", cityController.createCity);

module.exports = router;
