import styled from "@emotion/styled";
import TestHeader from "../components/Header/TestHeader";
import Question from "../components/Question";
import Option from "../components/Option";

export default function Test() {
  return (
    <Wrap>
      <TestHeader />
      <Main>
        <Question title={"질문"} content={"부가설명"} />
        <Option />
      </Main>
    </Wrap>
  );
}

const Wrap = styled.div`
  height: 100dvh;
  background-color: #3f3f3f;
`;

const Main = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
