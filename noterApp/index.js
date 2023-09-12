const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write(JSON.stringify({ message: "Hello World!" }));
    console.log(JSON.parse('{ "message": "Display in console" }'));
    res.end();
  }
});

server.listen(3000);

console.log("Listening on server 3000");
