import React, { useState } from "react";
import { Container, Header, MessagesContainer, MessageBubble,InputArea,Input,SendButton } from "./index";

interface Message {
  id: number;
  sender: "user" | "ai";
  text: string;
}

const IAConversation: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      sender: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulação de resposta da IA
    setTimeout(() => {
      const aiMessage: Message = {
        id: Date.now() + 1,
        sender: "ai",
        text: `🤖 Entendi sua mensagem: "${userMessage.text}"`,
      };
      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);
  };

  return (
    <Container>
      <Header>💬 Chat com IA</Header>

      <MessagesContainer>
        {messages.map((msg) => (
          <MessageBubble key={msg.id} sender={msg.sender}>
            {msg.text}
          </MessageBubble>
        ))}
      </MessagesContainer>

      <InputArea>
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Digite sua mensagem..."
        />
        <SendButton onClick={handleSend}>➤</SendButton>
      </InputArea>
    </Container>
  );
};

export default IAConversation;
