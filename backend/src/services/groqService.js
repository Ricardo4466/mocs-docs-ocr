import { ChatGroq } from "@langchain/groq";

const llm = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: "llama-3.3-70b-versatile",
});


export async function askGroq(context, question) {
  const prompt = `
    Conteúdo do documento:
    ${context}

    Pergunta:
    ${question}

    Responda de forma clara e objetiva com base no conteúdo acima.
    Se a resposta não puder ser encontrada no documento, informe que o documento não contém essa informação.
  `;

  const response = await llm.invoke(prompt);

  return response.content;
}
