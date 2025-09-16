import { Router } from "express";
import { askQuestion } from "../controllers/questionController.js";

const router = Router();
router.post("/ask", askQuestion);

export default router;
