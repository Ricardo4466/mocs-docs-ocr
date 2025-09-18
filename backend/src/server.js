import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

import uploadRoutes from "./routes/uploadRouter.js";
import iaRoutes from "./routes/iaRouter.js";

dotenv.config();
const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// pasta de uploads
app.use("/uploads", express.static(path.resolve("uploads")));

// rotas
app.use("/api/documents", uploadRoutes);
app.use("/api/ia", iaRoutes); // 👈 nova rota

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => console.log(`Backend rodando na porta ${PORT}`));
