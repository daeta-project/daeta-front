import styled from "@emotion/styled";

interface ChatButtonProps {
  text: string;
}

export default function ChatButton({ text }: ChatButtonProps) {
  return <Btn>{text}</Btn>;
}

const Btn = styled.button`
  background-color: #02fd80;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  height: 46px;
  width: 211px;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 500;
  outline: none;
  border: none;
`;
