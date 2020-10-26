const express = require("express");

// We need to retrieve the users by accessing the index file in the data folder
const users = require("..data/index");

// We will create five controller functions. These will correspond to the routes.
// ALL LOGIC for retrieving or updating the "data" should be done here.
// After that is complete we will import these controller functions into the routes.

// listUsers should retrieve the entire array from data/index
const listUsers = (req, res) => {};

// showUser should retrieve just the user that matches the passed-in id
const showUser = (req, res) => {};

// createUser should add a user to the array
const createUser = (req, res) => {};

// updateUser should update a user from the array based on its id
const updateUser = (req, res) => {};

// deleteUser should delete a user from the array based on its id
const deleteUser = (req, res) => {};

module.exports("controllers");
