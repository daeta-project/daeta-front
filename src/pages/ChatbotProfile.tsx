import styled from "@emotion/styled";
import ChatButton from "../components/Button/ChatButton";
import PlainHeader from "../components/Header/PlainHeader";
import CharCard from "../components/CharCard";

export default function ChatbotProfile() {
  return (
    <Wrapper>
      <PlainHeader />
      <Main>
        <CharCard
          ImgSrc={"/src/assets/Logo.svg"}
          Name={"권현진"}
          Content="머시기,, 설명"
          Progress={10}
        />
      </Main>
      <Footer>
        <ChatButton text={"선생님과 대화 시작하기"} />
        {/* 이거 대화 이력 따라서 다르게 해야되믐 */}
      </Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #3f3f3f;
  height: 100dvh;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 16px;
  gap: 42px;
`; //으아아

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-bottom: 14px;
`;
