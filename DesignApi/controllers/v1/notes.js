import { v4 as uuidv4 } from "uuid";
import validator from "express-validator";

const { validationResult } = validator;

let notes = [];

export const getNotes = (req, res) => {
  //sent to routes
  res.send(notes);
};

export const createNotes = (req, res) => {
  //sent to routes
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const note = req.body;
  notes.push({ ...note, id: uuidv4() });
  res.send(`Created A note of title:${note.Salary}`);
};

export const byId = (req, res) => {
  // sent to routes
  const { id } = req.params;
  const note = notes.find((note) => note.id === id);
  res.send(note);
};

export const deleteNote = (req, res) => {
  //sent to routes
  const { id } = req.params;
  notes = notes.filter((note) => note.id !== id);
  res.send(`A note ${id} was deleted`);
};

export const updateNote = (req, res) => {
  //sent to routes
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
};
