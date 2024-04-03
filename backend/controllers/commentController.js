const mongoose = require("mongoose");
const Comment = require("../models/commentModel.js");

// Controller to get all comments
const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to get comment by ID
const getCommentById = async (req, res) => {
  const { id } = req.params;

  try {
    // Check if the id is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid country ID" });
    }

    const comment = await Comment.findById(id);
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    res.json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to create a new comment
const createComment = async (req, res) => {
  try {
    const { guest_name, guest_email, comment_text } = req.body;
    const newComment = new Comment({
      // user_id,
      guest_name,
      guest_email,
      comment_text,
    });
    const savedComment = await newComment.save();
    res.status(201).json(savedComment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Export controllers
module.exports = {
  getAllComments,
  getCommentById,
  createComment,
};
