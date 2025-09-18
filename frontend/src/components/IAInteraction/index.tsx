import React, { useState } from "react";
import api from "../../services/api"; 
import {
  Container,
  Header,
  MessagesContainer,
  MessageBubble,
  InputArea,
  Input,
  SendButton
} from "./styles";

interface IAInteractionProps {
  ocrText: string;
  documentId: number;
}

interface Message {
  id: number;
  sender: "user" | "ai";
  text: string;
}

const IAInteraction: React.FC<IAInteractionProps> = ({ ocrText, documentId }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      sender: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await api.post("/api/ia/question", {
        ocrText,
        documentId,
        question: input
      });
      const aiMessage: Message = {
        id: Date.now() + 1,
        sender: "ai",
        text: response.data.answer,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      console.error(err);
      const aiMessage: Message = {
        id: Date.now() + 1,
        sender: "ai",
        text: "Erro ao consultar a IA.",
      };
      setMessages((prev) => [...prev, aiMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Header>💡 Pergunte sobre o documento</Header>
      <MessagesContainer>
        {messages.map((msg) => (
          <MessageBubble key={msg.id} sender={msg.sender}>
            {msg.text}
          </MessageBubble>
        ))}
        {loading && (
          <MessageBubble sender="ai">Carregando resposta...</MessageBubble>
        )}
      </MessagesContainer>
      <InputArea>
        <Input
          type="text"
          value={input}
          placeholder="Digite sua pergunta..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <SendButton onClick={handleSend}>➤</SendButton>
      </InputArea>
    </Container>
  );
};

export default IAInteraction;
