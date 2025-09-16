import styled, { keyframes } from "styled-components";



const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  height: 600px;
  margin: 0 auto;
  border: 1px solid #d1d5db;
  border-radius: 16px;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.08);
  background: linear-gradient(to bottom, #f9fafb, #e5e7eb);
  overflow: hidden;
`;

export const Header = styled.div`
  background: #2563eb;
  color: white;
  text-align: center;
  padding: 12px;
  font-weight: 600;
  font-size: 18px;
`;

export const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const MessageBubble = styled.div<{ sender: "user" | "ai" }>`
  max-width: 75%;
  padding: 10px 16px;
  border-radius: 18px;
  font-size: 14px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  animation: ${fadeIn} 0.3s ease forwards;

  align-self: ${(props) => (props.sender === "user" ? "flex-end" : "flex-start")};
  background: ${(props) =>
    props.sender === "user" ? "#2563eb" : "#fff"};
  color: ${(props) => (props.sender === "user" ? "white" : "#1f2937")};

  border-bottom-right-radius: ${(props) =>
    props.sender === "user" ? "0" : "18px"};
  border-bottom-left-radius: ${(props) =>
    props.sender === "ai" ? "0" : "18px"};

  border: ${(props) => (props.sender === "ai" ? "1px solid #e5e7eb" : "none")};
`;

export const InputArea = styled.div`
  display: flex;
  gap: 8px;
  padding: 12px;
  background: white;
  border-top: 1px solid #e5e7eb;
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px 16px;
  font-size: 14px;
  border: 1px solid #d1d5db;
  border-radius: 9999px;
  outline: none;
  transition: border 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.3);
  }
`;

export const SendButton = styled.button`
  padding: 10px 16px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background 0.2s, transform 0.1s;

  &:hover {
    background: #1e40af;
  }

  &:active {
    transform: scale(0.95);
  }
`;