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
        <CharProfileFrame ImgSrc=" " name="ㅇㅇㅇ 선생님" Content="ㄱㄴㄷ" />
      </Main>
    </Wrap>
  );
}

const Wrap = styled.div`
  height: 100dvh;
  background-color: #3f3f3f;
  display: flex;
  gap: 8px;
`;

const Main = styled.div`
  height: 100%;
  padding-top: 72px;
  display: flex;
  flex-direction: column;
`;
