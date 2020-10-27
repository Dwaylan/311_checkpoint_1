// We need to retrieve the users by accessing the index file in the data folder
const users = require("../data/index");

// We will create five controller functions. These will correspond to the routes.
// ALL LOGIC for retrieving or updating the "data" should be done here.
// After that is complete we will import these controller functions into the routes.
// *** We have done something very similar before. Think week 2***

// listUsers should retrieve the entire array from data/index
const listUsers = (req, res) => {
  res.json(users);
  if (!users) {
    res.status(404).send("user not found");
    return;
  }
};

// showUser should retrieve just the user that matches the passed-in id
const showUser = (req, res) => {
  let userId = parseInt(req.params.userId);
  let user = users.find((user) => user._id === userId);
  //  If there is no user to be found, throw up erro code 404
  if (!user) {
    res.status(404).send("users not found");
    return;
  } else {
    res.send(user);
  }
};

// createUser should add a user to the array
const createUser = (req, res) => {
  let payload = req.body;

  if (payload.id == undefined || payload.id == false) {
    res.status(404).send("error");
    return;
  }
  payload.id = users.length + 1;
  users.push(payload);
  res.send(users);
};

// updateUser should update a user from the array based on its id
const updateUser = (req, res) => {
  let userId = parseInt(req.params.id) - 1;
  let user = users.find((user) => user.id === userId);
  let payload = req.body;
  if (user.length < userId) {
    res.status(404).send("bad request here");
    return;
  } else {
    Object.keys(payload).map((key) => {
      user[key] = payload[key];
    });
    payload.id = user[id].id - 1;
    res.send(user);
  }
};

// deleteUser should delete a user from the array based on its id
const deleteUser = (req, res) => {
  let userId = parseInt(req.params.id) - 1;
  let user = users.find((user) => user.id === userId);

  if (!user) {
    res.status(404).send("bad request here");
    return;
  } else {
    users.splice(user.id, 1);
    users.forEach((element) => {
      if (element.id > user.id) {
        element.id -= 1;
      }
    });
    res.send(users);
  }
};

module.exports = { listUsers, showUser, createUser, updateUser, deleteUser };
