// OCRText.tsx
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Container, Title, Body, EmptyWrapper } from "./styles";

interface OCRTextProps {
  text: string;
}

const OCRText: React.FC<OCRTextProps> = ({ text }) => {
  if (!text || text.trim() === "") {
    return (
      <EmptyWrapper>
        <div style={{ width: 70, height: 70 }}>
          <CircularProgressbar
            value={100}
            text={""}
            styles={buildStyles({
              pathColor: "#5c4de0",
              trailColor: "#e0e0e0",
            })}
          />
        </div>
        <p>Nenhum texto encontrado no documento.</p>
      </EmptyWrapper>
    );
  }

  return (
    <Container>
      <Title>🖋️ Texto Extraído (OCR)</Title>
      <Body>{text}</Body>
    </Container>
  );
};

export default OCRText;
