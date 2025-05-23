// My Assignment
// express.js

const express = require("express"); // 1
const mainExpress = express(); // 2
const port = 3000; // 3

// 4
mainExpress.get("/", (req, res) => {
  res.send("<h1>Welcome to (express.js) homeage</h1>"); // 5
});

// 6
mainExpress.get("/login", (req, res) => {
  res.send("<h1> This is the login page of (express.js)");
});

// 7
mainExpress.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`);
});
