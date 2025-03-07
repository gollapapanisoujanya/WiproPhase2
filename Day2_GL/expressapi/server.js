const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" }
];

// GET /users - Fetch users
app.get("/users", (req, res) => {
  res.json(users);
});

// POST /users - Add a new user
app.post("/users", (req, res) => {
  const newUser = { id: users.length + 1, name: req.body.name };
  users.push(newUser);
  res.json(newUser);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
