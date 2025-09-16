import { Router } from "express";
import multer from "multer";
import { uploadDocument } from "../controllers/controller.js";

const router = Router();
const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("file"), uploadDocument);

export default router;
