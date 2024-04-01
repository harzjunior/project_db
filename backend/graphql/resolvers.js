const Address = require('../models/addressModel');
const City = require('../models/cityModel');
const Country = require('../models/countryModel');
const User = require('../models/userModel');
const Comment = require('../models/commentModel');
const Contact = require('../models/contactModel');

const resolvers = {
  Query: {
    addresses: () => Address.find(),
    address: (_, { id }) => Address.findById(id),
    cities: () => City.find(),
    city: (_, { id }) => City.findById(id),
    countries: () => Country.find(),
    country: (_, { id }) => Country.findById(id),
    users: () => User.find(),
    user: (_, { id }) => User.findById(id),
    comments: () => Comment.find(),
    comment: (_, { id }) => Comment.findById(id),
    contacts: () => Contact.find(),
    contact: (_, { id }) => Contact.findById(id),
  },
  Address: {
    city: (address) => City.findById(address.city)
  },
  City: {
    country: (city) => Country.findById(city.country)
  },
  Comment: {
    user: (comment) => User.findById(comment.user)
  }
};

module.exports = resolvers;
