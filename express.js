// My Assignment
// express.js

const express = require("express");
const mainExpress = express();
const port = 5000;

mainExpress.get("/", (req, res) => {
  res.send("<h1>Welcome to (express.js) homeage</h1>");
});

mainExpress.get("/login", (req, res) => {
  res.send("<h1> This is the login page of (express.js)");
});

mainExpress.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`);
});
