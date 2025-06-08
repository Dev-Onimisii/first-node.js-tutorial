// My Assignment
// express.js

const express = require("express");
const mainExpress = express();
const portName = 6000;

mainExpress.get("/", (req, res) => {
  res.send("<h1>Welcome to (express.js) homeage</h1>");
});

mainExpress.get("/login", (req, res) => {
  res.send("<h1>This is the login page of (express.js)");
});

mainExpress.get("/admin", (req, res) => {
  res.send("<h1>This is the admin page of (express.js)");
});

mainExpress.listen(portName, () => {
  console.log(`Express server listening at http://localhost:${portName}`);
});
