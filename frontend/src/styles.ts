import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;  
  align-items: center;
  justify-content: center;

  font-family: 'Arial', sans-serif;
`;


export const Content = styled.div`
  width: 408px;
  height: 430px;
  background: #fff;
  border-radius: 10px;
  padding: 40px 30px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const Title = styled.h1`
  color: #fff;
  font-size: 28px;
  margin-bottom: 40px; 
`;


export const CardTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
`;
