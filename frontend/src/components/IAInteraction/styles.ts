import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  height: 430px;
  width: 400px;
`;

export const Header = styled.div`
  padding: 16px;
  font-size: 1.2rem;
  font-weight: bold;
  background: #222;
  border-bottom: 1px solid #eee;
  border-radius: 12px 12px 0 0;
`;

export const MessagesContainer = styled.div`
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const MessageBubble = styled.div<{ sender: "user" | "ai" }>`
  align-self: ${({ sender }) => (sender === "user" ? "flex-end" : "flex-start")};
  background: ${({ sender }) => (sender === "user" ? "#d1e7dd" : "#e2e3e5")};
  color: #222;
  padding: 10px 16px;
  border-radius: 18px;
  max-width: 80%;
  font-size: 1rem;
`;

export const InputArea = styled.div`
  display: flex;
  padding: 12px;
  border-top: 1px solid #eee;
  background: #fafafa;
  border-radius: 0 0 12px 12px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
`;

export const SendButton = styled.button`
  margin-left: 8px;
  padding: 0 18px;
  background: #0d6efd;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #0b5ed7;
  }
`;