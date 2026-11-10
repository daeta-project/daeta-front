import Choice from "./Choice";
import styled from "@emotion/styled";

export default function Choices() {
  return (
    <Wrap>
      <Choice number={5} $size={60} />
      <Choice number={4} $size={50} />
      <Choice number={3} $size={50} />
      <Choice number={2} $size={50} />
      <Choice number={1} $size={60} />
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  align-items: center;
`;
