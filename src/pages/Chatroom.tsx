import ChatHeader from "../components/Header/ChatHeader";
import styled from "@emotion/styled";
import MessageBar from "../components/Message/MessageBar";
import AIText from "../components/Message/AIText";
import UserText from "../components/Message/UserText";

export default function Chatroom() {
  return (
    <>
      <Wrap>
        <Header>
          <ChatHeader />
        </Header>
        <Main>
          <AIText
            ImgSrc="/src/assets/Logo.svg"
            content="안녕하세요우와아아아아아긴글근데 긴글을 어떻게 처리해야되지"
          />
          <UserText ImgSrc="/src/assets/Logo.svg" content="넹" />
        </Main>
        <Footer>
          <MessageBar />
        </Footer>
      </Wrap>
    </>
  );
}

const Header = styled.div`
  position: sticky;
  justify-content: center;
  align-items: start;
`;

const Footer = styled.div`
  position: fixed;
  justify-content: center;
  bottom: 0dvh;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #3f3f3f;
  height: 100dvh;
  row-gap: 8px;
`;

const Main = styled.div`
  margin: 70px 6px 0;
  gap: 22px;
  display: flex;
  flex-direction: column;
`;
