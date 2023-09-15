import express from "express";
import {
  getNotes,
  createNotes,
  byId,
  deleteNote,
  updateNote,
} from "../../controllers/v1/notes.js";
import validator from "express-validator";

const router = express.Router();

const { body } = validator;
router.get("/", getNotes);

router.post(
  //sent to index.js
  // field validator
  "/",
  body("name").exists(),
  body("Role").exists(),
  body("Salary").exists(),
  createNotes
);

router.get("/", byId); //sent to index.js

router.delete("/:id", deleteNote); //sent to index.js

router.patch("/:id", updateNote); //sent to index.js

export default router;
