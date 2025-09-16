import { PrismaClient } from "@prisma/client";
import extractText from "../services/ocrService.js";
import path from "path";
import fs from "fs";

const prisma = new PrismaClient();

export async function uploadDocument(req, res) {
  try {
    // Verifica se o arquivo foi enviado
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Caminho completo do arquivo
    const filePath = path.resolve("uploads", req.file.filename);

    // Extrai texto usando OCR
    const text = await extractText(filePath);

    // Salva no banco via Prisma
    const doc = await prisma.document.create({
      data: {
        file_name: req.file.originalname,
        text_content: text,
      },
    });

    // Retorna o documento criado
    res.json(doc);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error processing document" });
  }
}
