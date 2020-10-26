const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// access to the users file of the route folder
const users = require("./routes/users");

const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(users);

app.get("/", (req, res) => res.send("default route"));

app.listen(port, () => {
  console.log("app is listening on:", port);
});
