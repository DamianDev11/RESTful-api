import express from "express";
import bodyParser from "body-parser";
import { v4 as uuidv4 } from "uuid";

const app = express();
const PORT = 5000;

let notes = [];

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/v2/notes", (req, res) => {
  res.send(notes);
});

app.get("/v1/notes", (req, res) => {
  res.send(notes);
});

app.post("/v1/notes", (req, res) => {
  const note = req.body;
  notes.push({ ...note, id: uuidv4() });
  res.send(`Created A note of title:${note.title}`);
});
app.get("/v1/notes/:id", (req, res) => {
  const { id } = req.params;

  const note = notes.find((note) => note.id === id);

  res.send(note);
});

app.delete("/v1/notes/:id", (req, res) => {
  const { id } = req.params;
  notes = notes.filter((note) => note.id !== id);
  res.send(`A note ${id} was deleted`);
});

app.patch("/v1/notes/:id", (req, res) => {
  const { id } = req.params;
  const { name, Role, Salary } = req.body;
  const note = notes.find((note) => note.id === id);
  if (name) {
    note.title = title;
  }
  if (Role) {
    note.Role = Role;
  }
  if (Salary) {
    note.Salary = Salary;
  }
  res.send(`Updated ${id}`);
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
