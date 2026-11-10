import styled from "@emotion/styled";
import MainHeader from "../components/Header/MainHeader";
import CharProfileFrame from "../components/CharProfileFrame";

export default function Home() {
  return (
    <>
      <Wrapper>
        <MainHeader />
        <Main>
          <CharProfileFrame
            ImgSrc=" "
            name="가나다"
            Content="라마바사아자차카타파하"
          />
        </Main>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: #3f3f3f;
  height: 100dvh;
`;

const Main = styled.div`
  padding-top: 44px;
  gap: 8px;
`;
