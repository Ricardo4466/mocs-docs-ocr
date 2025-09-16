  import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import answerQuestionRAG from "../services/ragService.js";

const prisma = new PrismaClient();

export async function askQuestion(req: Request, res: Response) {
  try {
    const { documentId, question } = req.body;

    if (!documentId || !question) {
      return res.status(400).json({ message: "documentId and question are required" });
    }

    // Busca documento no banco
    const doc = await prisma.document.findUnique({
      where: { id: documentId },
    });

    if (!doc) {
      return res.status(404).json({ message: "Document not found" });
    }

    // Responde usando RAG
    const answer = await answerQuestionRAG(doc.text_content, question);

    res.json({ answer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error generating answer" });
  }
}
