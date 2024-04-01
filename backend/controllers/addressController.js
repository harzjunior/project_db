const mongoose = require("mongoose");

// controllers/addressController.js
const Address = require("../models/addressModel.js");

// Controller to get all addresses
const getAllAddresses = async (req, res) => {
  try {
    const addresses = await Address.find();
    res.json(addresses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to get address by ID
const getAddressById = async (req, res) => {
  const { id } = req.params;

  try {
    // Check if the id is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid address ID" });
    }

    // Query the database for the address with the provided ID
    const address = await Address.findById(id);

    // Check if the address exists
    if (!address) {
      return res.status(404).json({ message: "Address not found" });
    }

    // Return the address
    res.json(address);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to create a new address
const createAddress = async (req, res) => {
  try {
    const { street_address, city_id, postal_code } = req.body;

    // Check if required fields are provided
    if (!street_address || !city_id || !postal_code) {
      return res.status(400).json({
        message: "Street address, city ID, and postal code are required",
      });
    }

    // Create a new address document with the provided data
    const newAddress = new Address({
      street_address,
      city: city_id,
      postal_code,
    }); // Assuming city_id corresponds to the city field

    // Save the new address document to the database
    const savedAddress = await newAddress.save();

    res.status(201).json(savedAddress);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Export controllers
module.exports = {
  getAllAddresses,
  getAddressById,
  createAddress,
};
