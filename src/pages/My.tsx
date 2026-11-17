import styled from "@emotion/styled";
import MyHeader from "../components/Header/MyHeader";
import UserInfo from "../components/UserInfo";

export default function My() {
  return (
    <Wrap>
      <MyHeader />
      <Main>
        <UserInfo ImgSrc="/src/assets/Logo.svg" email="ganada@gmail.com" />
      </Main>
    </Wrap>
  );
}

const Wrap = styled.div`
  height: 100dvh;
  background-color: #3f3f3f;
`;

const Main = styled.div`
  padding-top: 62px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
