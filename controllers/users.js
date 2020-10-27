// We need to retrieve the users by accessing the index file in the data folder
const users = require("../data/index");

// We will create five controller functions. These will correspond to the routes.
// ALL LOGIC for retrieving or updating the "data" should be done here.
// After that is complete we will import these controller functions into the routes.
// *** We have done something very similar before. Think week 2***

// listUsers should retrieve the entire array from data/index
const listUsers = (req, res) => {
  res.json(users);
};

// showUser should retrieve just the user that matches the passed-in id
const showUser = (req, res) => {
  let userId = parseInt(req.params.userId);
  let user = users.find((user) => user._id === userId);
  res.send(user);
};

// createUser should add a user to the array
const createUser = (req, res) => {
  let payload = req.body;
  payload.id = users.length + 1;
  users.push(payload);
  res.send(users);
};

// updateUser should update a user from the array based on its id
const updateUser = (req, res) => {
  let id = parseInt(req.params.id);
  let payload = req.body;
};

// deleteUser should delete a user from the array based on its id
const deleteUser = (req, res) => {};

module.exports(listUsers, showUser, createUser, updateUser, deleteUser);
