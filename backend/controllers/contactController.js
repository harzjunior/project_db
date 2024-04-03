const mongoose = require("mongoose");

// controllers/contactController.js
const Contact = require("../models/contactModel.js");

// Controller to get all contacts
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to get contact by ID
const getContactById = async (req, res) => {
  const { id } = req.params;

  try {
    // Check if the id is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid country ID" });
    }

    const contact = await Contact.findById(id);
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to create a new contact
const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch contacts from the backend
// fetch("/api/contacts")
//   .then((response) => response.json())
//   .then((contacts) => {
//     contacts.forEach((contact) => {
//       const contactElement = document.createElement("div");
//       contactElement.innerHTML = `
//         <h3>${contact.name}</h3>
//         <p>Email: ${contact.email}</p>
//         <p>Message: ${contact.message}</p>
//         <p>Created At: ${new Date(contact.createdAt).toLocaleString()}</p>
//       `;
//       document.getElementById("contacts").appendChild(contactElement);
//     });
//   })
//   .catch((error) => console.error("Error fetching contacts:", error));

// Export controllers
module.exports = {
  getAllContacts,
  getContactById,
  createContact,
};
