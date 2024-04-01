// models/country.js
const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema(
  {
    country_name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Country = mongoose.model("Country", countrySchema);

module.exports = Country;
