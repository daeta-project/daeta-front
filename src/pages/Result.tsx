import styled from "@emotion/styled";
import TestHeader from "../components/Header/TestHeader";
import CharProfileFrame from "../components/CharProfileFrame";
import Ranking from "../components/Ranking";

export default function Result() {
  return (
    <Wrap>
      <TestHeader />
      <Main>
        <Ranking />
        <List>
          <First>
            <Crown src="/src/assets/crown.svg" alt="" />
            <CharProfileFrame
              ImgSrc=" "
              name="ㅇㅇㅇ 선생님"
              Content="ㄱㄴㄷ"
            />
          </First>
          <CharProfileFrame ImgSrc=" " name="ㅇㅇㅇ 선생님" Content="ㄱㄴㄷ" />
        </List>
      </Main>
    </Wrap>
  );
}

const Wrap = styled.div`
  height: 100dvh;
  background-color: #3f3f3f;
  display: flex;
`;

const Main = styled.div`
  height: 100dvh;
  padding-top: 72px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const First = styled.div``;

const Crown = styled.img`
  width: 16px;
  height: 13px;
  position: absolute;
  display: flex;
  margin: 10px 47px;
`;
