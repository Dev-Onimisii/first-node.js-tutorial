// My Assignment
// express.js

const express = require("express"); // 1
const app = express(); // 2
const port = 5000; // 3

// 4
app.get("/", (req, res) => {
  res.send("<h1>Welcome to (express.js) homeage</h1>"); // 5
});

// 6
app.get("/login", (req, res) => {
  res.send("<h1> This is the login page of (express.js)");
});

// 7
app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`);
});
