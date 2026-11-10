import styled from "@emotion/styled";
interface ChoiceProps {
  number: number;
  $size?: number;
}
interface StyleProps {
  $size?: number;
}
export default function Choice({ number, $size }: ChoiceProps) {
  return <Button $size={$size}>{number}</Button>;
}

const Button = styled.button<StyleProps>`
  outline: none;
  border: solid 3px #02fd80;
  border-radius: 50%;
  background-color: #838383;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.25);
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  :active {
    background-color: #02fd80;
    border: none;
  }
`;
