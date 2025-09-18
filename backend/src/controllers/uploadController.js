import { PrismaClient } from "@prisma/client";
import path from "path";
import extractText from "../services/ocrService.js";

const prisma = new PrismaClient();

export async function uploadDocument(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Nenhum arquivo enviado" });
    }

    const filePath = path.resolve("uploads", req.file.filename);

    const text = await extractText(filePath);


    const doc = await prisma.document.create({
      data: {
        file_name: req.file.originalname,
        text_content: text,
        file_path: filePath,
      },
    });

    const fileUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;

    return res.status(201).json({
      message: "Documento salvo com sucesso",
      document: doc,
      url: fileUrl,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Erro ao processar documento" });
  }
}
