import { v4 as uuidv4 } from "uuid";

let notes = [];

export const getNotes2 = (req, res) => {
  res.send(notes);
};

export const createNotes2 = (req, res) => {
  const note = req.body;
  notes.push({ ...note, id: uuidv4() });
  res.send(`Created A note of title:${note.Salary}`);
};
