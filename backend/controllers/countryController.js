const mongoose = require("mongoose");

// controllers/countryController.js
const Country = require("../models/countryModel.js");

// Controller to get all countries
const getAllCountries = async (req, res) => {
  try {
    const countries = await Country.find();
    res.json(countries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to get country by ID
const getCountryById = async (req, res) => {
  const { id } = req.params;

  try {
    // Check if the id is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid country ID" });
    }

    const country = await Country.findById(id);
    if (!country) {
      return res.status(404).json({ message: "Country not found" });
    }

    res.json(country);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to create a new country
const createCountry = async (req, res) => {
  try {
    const { country_name } = req.body;
    const newCountry = new Country({ country_name });
    const savedCountry = await newCountry.save();
    res.status(201).json(savedCountry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Export controllers
module.exports = {
  getAllCountries,
  getCountryById,
  createCountry,
};
