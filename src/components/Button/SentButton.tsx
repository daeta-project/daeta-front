import styled from "@emotion/styled";
import SentIcon from "/daeta-front/src/assets/sent.svg?react";

export default function SentButton() {
  return (
    <Btn>
      <SentIcon />
    </Btn>
  );
}

const Btn = styled.button`
  background-color: #02fd80;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  border-radius: 100px;
  border: none;
  outline: none;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
`;
