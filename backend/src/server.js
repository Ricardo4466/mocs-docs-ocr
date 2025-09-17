import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import uploadRoutes from "./routes/uploadRouter.js";
import path from "path";

dotenv.config();
const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// 🔥 Servir a pasta uploads como estática
app.use("/uploads", express.static(path.resolve("uploads")));


app.use("/api/documents", uploadRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => console.log(`Backend rodando na porta ${PORT}`));
