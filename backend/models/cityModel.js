const mongoose = require("mongoose");

const citySchema = new mongoose.Schema(
  {
    city_name: {
      type: String,
      required: true,
    },
    country: {
      type: mongoose.Types.ObjectId,
      ref: "Country",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Define a virtual property for categoryId
citySchema.virtual("categoryId").get(function () {
  return this._id; // Return the ObjectId of the city document
});

const City = mongoose.model("City", citySchema);

module.exports = City;
