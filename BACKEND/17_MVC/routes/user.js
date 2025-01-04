const express = require("express");
const {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser,
} = require("../controllers/user");

const router = express.Router();

// Grouped REST API routes
router
    .route("/") // For base `/user` endpoint
    .get(handleGetAllUsers) // Get all users
    .post(handleCreateNewUser); // Create a new user

router
    .route("/:id") // For `/user/:id` endpoint
    .get(handleGetUserById) // Get user by ID
    .patch(handleUpdateUserById) // Update user by ID
    .delete(handleDeleteUserById); // Delete user by ID

module.exports = router;
