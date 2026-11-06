import styled from "@emotion/styled";
import SentButton from "../Button/SentButton";
import InputField from "./InputField";

export default function MessageBar() {
  return (
    <Wrap>
      <Inner>
        <InputField />
        <SentButton />
      </Inner>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3f3f3f;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.25);
  padding: 12px 0;
  width: 100dvw;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  width: calc(100% - 39px);
`;
