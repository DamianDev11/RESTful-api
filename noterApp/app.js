const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello!, This is my first Web API");
});

app.listen(3000, () => console.log("Server running on PORT:3000"));
