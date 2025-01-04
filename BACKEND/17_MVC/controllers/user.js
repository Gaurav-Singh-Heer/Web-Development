const User = require("../models/user");

// Controller for fetching all users
async function handleGetAllUsers(req, res) {
    try {
        const allDbUsers = await User.find({});
        return res.status(200).json(allDbUsers);
    } catch (err) {
        console.error("Error fetching users:", err);
        return res.status(500).json({ msg: "Internal Server Error", error: err });
    }
}

// Controller for fetching a user by ID
async function handleGetUserById(req, res) {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        return res.status(200).json(user);
    } catch (err) {
        console.error("Error fetching user by ID:", err);
        return res.status(500).json({ msg: "Internal Server Error", error: err });
    }
}

// Controller for updating a user by ID
async function handleUpdateUserById(req, res) {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true } // Return updated user and validate fields
        );

        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }

        return res.status(200).json({ status: "success", user: updatedUser });
    } catch (err) {
        console.error("Error updating user by ID:", err);
        return res.status(500).json({ msg: "Internal Server Error", error: err });
    }
}

// Controller for deleting a user by ID
async function handleDeleteUserById(req, res) {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);

        if (!deletedUser) {
            return res.status(404).json({ error: "User not found" });
        }

        return res.status(200).json({ status: "success", message: "User deleted successfully" });
    } catch (err) {
        console.error("Error deleting user by ID:", err);
        return res.status(500).json({ msg: "Internal Server Error", error: err });
    }
}

// Controller for creating a new user
async function handleCreateNewUser(req, res) {
    const body = req.body;

    // Validate required fields
    if (!body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
        return res.status(400).json({ msg: "All fields are required" });
    }

    try {
        const result = await User.create({
            first_name: body.first_name,
            last_name: body.last_name,
            email: body.email,
            gender: body.gender,
            job_title: body.job_title,
        });

        return res.status(201).json({ msg: "User created successfully", user: result, id: result._id });
    } catch (err) {
        console.error("Error creating user:", err);
        return res.status(500).json({ msg: "Internal Server Error", error: err });
    }
}

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser,
};
