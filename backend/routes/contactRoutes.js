// routes/contactRoutes.js
const express = require("express");
const contactController = require("../controllers/contactController");

const router = express.Router();

// Route to create a new contact
router.post("/", contactController.createContact);

// Route to get all contacts
router.get("/", contactController.getAllContacts);

// Route to get contact by ID
router.get("/:id", contactController.getContactById);

module.exports = router;
