import express from "express";
import { PrismaClient } from "@prisma/client";
import { askGroq } from "../services/groqService.js";

const prisma = new PrismaClient();
const router = express.Router();

router.post("/question", async (req, res) => {
  const { documentId, question } = req.body;

  if (!documentId || !question) {
    return res.status(400).json({ error: "documentId e question são obrigatórios." });
  }

  try {
    // Busca o documento no banco
    const document = await prisma.document.findUnique({
      where: { id: Number(documentId) },
    });

    if (!document) {
      return res.status(404).json({ error: "Documento não encontrado." });
    }

    const context = document.text_content || "";

    // Chama a IA via service
    const answer = await askGroq(context, question);

    res.json({ answer });
  } catch (err) {
    console.error("Erro IA:", err);
    res.status(500).json({ error: "Erro ao consultar IA." });
  }
});

export default router;
