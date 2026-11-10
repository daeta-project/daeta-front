import styled from "@emotion/styled";
import Choices from "./Choices";

export default function Option() {
  return (
    <Wrap>
      <Texts>
        <Text>매우 그렇다</Text>
        <Text>매우 아니다</Text>
      </Texts>
      <Choices />
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  margin: 0 16px 12px;
`;

const Text = styled.p`
  color: white;
  font-weight: 500;
  font-size: 16px;
`;

const Texts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
