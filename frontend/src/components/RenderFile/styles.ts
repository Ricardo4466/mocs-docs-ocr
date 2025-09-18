import styled from "styled-components";

export const Container = styled.ul`

  margin-top: 20px;

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0;
      color: #444;
      & + li {
         margin-top: 15px;
      }
    }
`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    margin-left: 10px;

    strong {
      font-weight: bold;
    }

    span {
      display: flex;
      font-size: 12px;
      color: #999;
      gap: 5px;
      margin-top: 5px;
      align-items: center;
    }

    button {
      border: 0;
      background: transparent;
      color: #e57878;
      margin-left: 10px;
      cursor: pointer;
    }
}    
`;

interface PreviewProps {
  src: string;
}

export const Preview = styled.div<PreviewProps>`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  margin-right: 10px;
`;
