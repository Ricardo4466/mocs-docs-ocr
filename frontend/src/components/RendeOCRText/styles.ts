// styles.ts
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  max-width: 500px;
  height: 430px;

  padding: 24px;
  border-radius: 12px;
  background: #fefefe; /* fundo claro neutro */
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border: 1px solid #e0e0e0;
  font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  margin: 0 0 16px 0;
  font-size: 20px;
  color: #222;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Body = styled.pre`
  margin: 0;
  font-size: 15px;
  line-height: 1.7;
  color: #333;
  white-space: pre-wrap;
  word-break: break-word;
  overflow-y: auto;
  flex: 1; /* ocupa espaço restante para scroll */
`;

export const EmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 40px;
  color: #888;

  p {
    font-size: 15px;
    margin: 0;
    text-align: center;
  }
`;
