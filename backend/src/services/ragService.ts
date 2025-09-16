import OpenAI from "openai";
import { loadQAChain } from "langchain/chains";
import { Document } from "@langchain/core/documents";
import dotenv from "dotenv";

dotenv.config();

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
// Inicializa OpenAI client
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function answerQuestionRAG(
  documentText: string,
  question: string
) {
  const docs = [new Document({ pageContent: documentText })];

  // Cria uma chain simples de QA
  const chain = loadQAChain(client as any); // cast para any pois LangChain espera LLM compatível

  const response = await chain.call({
    input_documents: docs,
    question: question,
  });

  return response.text;
}
