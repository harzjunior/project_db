const Address = require("../models/addressModel");
const City = require("../models/cityModel");
const Country = require("../models/countryModel");
const User = require("../models/userModel");
const Comment = require("../models/commentModel");
const Contact = require("../models/contactModel");

const resolvers = {
  Query: {
    countries: async () => {
      try {
        const countries = await Country.find();
        return countries;
      } catch (error) {
        console.error("Error fetching countries:", error);
        throw new Error("Failed to fetch countries");
      }
    },

    country: async (_, { id }) => {
      try {
        const country = await Country.findById(id);
        return country;
      } catch (error) {
        console.error("Error fetching country:", error);
        throw new Error("Failed to fetch country");
      }
    },
    addresses: async () => {
      try {
        const addresses = await Address.find();
        return addresses;
      } catch (error) {
        console.error("Error fetching addresses:", error);
        throw new Error("Failed to fetch addresses");
      }
    },

    address: async (_, { id }) => {
      try {
        const address = await Address.findById(id);
        return address;
      } catch (error) {
        console.error("Error fetching address:", error);
        throw new Error("Failed to fetch address");
      }
    },

    cities: async () => {
      try {
        const cities = await City.find();
        return cities;
      } catch (error) {
        console.error("Error fetching cities:", error);
        throw new Error("Failed to fetch cities");
      }
    },

    city: async (_, { id }) => {
      try {
        const city = await City.findById(id);
        return city;
      } catch (error) {
        console.error("Error fetching city:", error);
        throw new Error("Failed to fetch city");
      }
    },

    users: async () => {
      try {
        const users = await User.find();
        return users;
      } catch (error) {
        console.error("Error fetching users:", error);
        throw new Error("Failed to fetch users");
      }
    },

    user: async (_, { id }) => {
      try {
        const user = await User.findById(id);
        return user;
      } catch (error) {
        console.error("Error fetching user:", error);
        throw new Error("Failed to fetch user");
      }
    },

    comments: async () => {
      try {
        const comments = await Comment.find();
        return comments;
      } catch (error) {
        console.error("Error fetching comments:", error);
        throw new Error("Failed to fetch comments");
      }
    },

    comment: async (_, { id }) => {
      try {
        const comment = await Comment.findById(id);
        return comment;
      } catch (error) {
        console.error("Error fetching comment:", error);
        throw new Error("Failed to fetch comment");
      }
    },

    contacts: async () => {
      try {
        const contacts = await Contact.find();
        return contacts;
      } catch (error) {
        console.error("Error fetching contacts:", error);
        throw new Error("Failed to fetch contacts");
      }
    },

    contact: async (_, { id }) => {
      try {
        const contact = await Contact.findById(id);
        return contact;
      } catch (error) {
        console.error("Error fetching contact:", error);
        throw new Error("Failed to fetch contact");
      }
    },
  },

  Address: {
    city: (address) => City.findById(address.city),
  },

  City: {
    country: (city) => Country.findById(city.country),
  },

  Comment: {
    user: (comment) => User.findById(comment.user),
  },
};

module.exports = resolvers;
