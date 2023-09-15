import express from "express";
import { getNotes2, createNotes2 } from "../../controllers/v2/notes.js";

const router = express.Router();

router.get("/", getNotes2);
router.post("/", createNotes2);

export default router;
