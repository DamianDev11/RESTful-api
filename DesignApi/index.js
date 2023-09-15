import express from "express";
import bodyParser from "body-parser";
import notesRouter1 from "./routes/v1/node.js";
import notesRouter2 from "./routes/v2/node.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/v1/notes", notesRouter1); // received from router /routes/v1
app.use("/v2/notes", notesRouter2); //received from router /routes/v2

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
