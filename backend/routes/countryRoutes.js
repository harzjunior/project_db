// routes/countryRoutes.js
const express = require("express");
const countryController = require("../controllers/countryController");

const router = express.Router();

// Route to get all countries
router.get("/", countryController.getAllCountries);

// Route to get country by ID
router.get("/:id", countryController.getCountryById);

// Route to create a new country
router.post("/", countryController.createCountry);

module.exports = router;
