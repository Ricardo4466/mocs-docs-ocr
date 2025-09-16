import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function answerQuestionRAG(documentText, question) {
  // Cria prompt usando o texto do documento
  const prompt = `
Você é um assistente inteligente. Responda à pergunta abaixo com base no documento fornecido.

Documento:
${documentText}

Pergunta:
${question}
`;

  // Chama o OpenAI Chat
  const response = await client.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });

  return response.choices[0].message.content;
}
