import styled from "@emotion/styled";

export default function TestHeader() {
  return (
    <Wrapper>
      <img src="/src/assets/Test_left.svg" alt="" />
      <Title>전공 성향 테스트</Title>
      <img src="/src/assets/right.svg" alt="" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 72px;
  border-radius: 10px;
  background-color: #3f3f3f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  img {
    width: 48px;
    height: 48px;
  }
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: white;
`;
