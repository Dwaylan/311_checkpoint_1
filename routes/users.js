const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users");

// "Routes" to forward the supported HTTP requests to the appropriate controller functions.

// Return all users
router.get("/users, usersController.listUsers");

// Return just the user that matches the path param (id)
router.get("/users, usersController.showUser");

// Create a new user (sampleUser). Find a way to increment the id so that we always insert the next available id in the list.
//  Currently we have users 1-10 (data/index). The next user should be 11
router.post("/users, usersController.createUser");

// Update one user matching the path param (id).
//  You may again use the sampleUser code as your "body" for this request
router.put("/users/:id, usersController.updateUser");

// Delete one user by it's id
router.delete("/users/:id, usersController.deleteUser");

// Export router to main index
module.exports = router;
