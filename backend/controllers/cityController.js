const mongoose = require("mongoose");

// controllers/cityController.js
const City = require("../models/cityModel.js");

// Controller to get all cities
const getAllCities = async (req, res) => {
  try {
    const cities = await City.find();
    res.json(cities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to get city by ID
const getCityById = async (req, res) => {
  const { id } = req.params;

  try {
    // Check if the id is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid city ID" });
    }

    const city = await City.findById(id);
    if (!city) {
      return res.status(404).json({ message: "City not found" });
    }

    res.status(200).json(city);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Controller to create a new city
const createCity = async (req, res) => {
  try {
    const { city_name, country_id } = req.body;

    // Check if country_id is provided
    if (!country_id) {
      return res.status(400).json({ message: "Country ID is required" });
    }

    // Create a new city document with the provided data
    const newCity = new City({ city_name, country: country_id });

    // Save the new city document to the database
    const savedCity = await newCity.save();

    res.status(201).json(savedCity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Export controllers
module.exports = {
  getAllCities,
  getCityById,
  createCity,
};
