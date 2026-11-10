import styled from "@emotion/styled";
import Logoimg from "../assets/Logo.svg";

export default function Landing() {
  return (
    <Wrapper>
      <Logoimg />
      <Text>놀면서 배우는</Text>
      <Text>AI 챗봇 플랫폼</Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 6px;
`;

const Text = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #fff;
`;
