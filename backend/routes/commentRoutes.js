// routes/commentRoutes.js
const express = require("express");
const commentController = require("../controllers/commentController");

const router = express.Router();

// Route to get all comments
router.get("/", commentController.getAllComments);

// Route to get comment by ID
router.get("/:id", commentController.getCommentById);

// Route to create a new comment
router.post("/", commentController.createComment);

module.exports = router;
