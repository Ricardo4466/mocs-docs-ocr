import express from "express";
import questionRoutes from "./routes/questionRouter.js";
import uploadRoutes from "./routes/uploadDocumentRouter.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json()); // necessário para JSON

// Rotas
app.use("/api/questions", questionRoutes);
app.use("/api/documents", uploadRoutes);

// Teste simples
app.get("/", (req, res) => res.send("Backend rodando!"));

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
