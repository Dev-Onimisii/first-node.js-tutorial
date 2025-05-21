// My Assignment
// express.js

const express = require("express"); // 1
const app = express(); // 2
const port = 8000; // 3

// 4
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Home Page (Express)!</h1>"); // 5
});

// 6
app.get("/login", (req, res) => {
  res.send(
    '<h1>Login Page (Express)</h1><form><input type="text" placeholder="Username"><br><input type="password" placeholder="Password"><br><button type="submit">Login</button></form>'
  );
});

// 7
app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`);
});
