import { createGlobalStyle } from "styled-components";
import "react-circular-progressbar/dist/styles.css";

export default createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    font-size: 14px; /* base font-size */
    
    /* Ajusta a fonte para telas pequenas */
    @media (max-width: 768px) {
      font-size: 12px;
    }

    @media (max-width: 480px) {
      font-size: 10px;
    }
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    background: #2455a3;
    color: #fff; /* opcional: contraste para o fundo */
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;
    width: 100%;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  img, svg {
    max-width: 100%;
    height: auto;
    display: block;
  }

  button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
  }
`;
