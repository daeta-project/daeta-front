import styled from "@emotion/styled";
import WarningIcon from "../assets/WarningIcon.svg";

interface WarningProps {
  text: string;
}

export default function Warning({ text }: WarningProps) {
  return (
    <Wrapper>
      <Content>
        <WarningIcon />
        {text}
      </Content>
    </Wrapper>
  );
}

// 가운데 정렬해야하믐데 우우,,
const Wrapper = styled.div`
  background-color: #ed2b2b;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  height: 44px;
  padding: 0 10px;
  border-radius: 16px;
  position: absolute !important;
  display: flex;
  justify-content: center;
  top: calc(15px+env(safe-area-inset-top));
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  svg {
    margin: 2.5px;
    overflow: visible !important;
  }
`;
