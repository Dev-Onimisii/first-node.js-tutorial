// My Assignment
// http_server.js

const http = require("http"); // 1

const hostname = "127.0.0.1"; // 2
const port = 3000; // 3

// 4
const server = http.createServer((req, res) => {
  // 5
  if (req.url === "/") {
    // 6
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html"); // 7
    res.end("<h1>Welcome to (http-server.js) homepage</h1>"); // 8
  } else if (req.url === "/login") {
    // 9
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>This is the login page of (http-server.js)</h1>");
  } else {
    // 10
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>This is an Error</h1>");
  }
});

// 11
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// https://github.com/Dev-Onimisii/first-node.js-tutorial.git
