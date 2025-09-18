# mocs-docs-ocr

Projeto de teste prático para Desenvolvedor Full Stack Pleno. O objetivo é construir uma aplicação de **OCR (Optical Character Recognition)** integrada a um sistema de **RAG (Retrieval-Augmented Generation)** para consulta de documentos usando **Groq AI**.

---

## 📌 Funcionalidades

- **OCR**: Processamento de documentos em imagem ou PDF para extração de texto.
- **RAG com Groq**: Permite fazer perguntas diretamente ao conteúdo dos documentos.
- **Banco de Dados**: Armazenamento dos documentos processados e consultas feitas.
- **Frontend React + Vite**: Interface para upload de documentos e realização de perguntas.
- **Backend Node.js + Express**: API para processar OCR, armazenar dados e responder perguntas via LLM.

---

## 🛠 Tecnologias e Bibliotecas

- **Node.js + Express**: Servidor backend e rotas de API.
- **React + Vite**: Frontend moderno e leve.
- **Docker + Docker Compose**: Ambiente isolado para backend, frontend e banco de dados.
- **Prisma ORM**: Conexão e manipulação do banco de dados PostgreSQL.
- **Groq AI (ChatGroq)**: LLM para RAG, respondendo perguntas com base no conteúdo dos documentos.
- **Tesseract.js**: Extração de texto (OCR) de documentos.
- **PostgreSQL**: Banco de dados relacional.

---

## 🚀 Estrutura do Projeto
mocs-docs-ocr/
├─ backend/ # Servidor Node.js + Express
│ ├─ prisma/ # Modelos e migrations do Prisma
│ ├─ services/ # Lógica de OCR e integração com LLM (Groq)
│ └─ routes/ # Rotas do backend
├─ frontend/ # Aplicação React + Vite
│ └─ src/
├─ docker-compose.yml # Configuração dos containers
└─ README.md


---

## ⚡ Instruções para subir a aplicação

### 1. Configurar variáveis de ambiente

No backend, crie um arquivo `.env.copy` com:



## Verificar dados salvos no Banco 
cd backend

docker compose exec backend npx prisma studio --port 5555