import styled from "@emotion/styled";

export default function PlainHeader() {
  return (
    <Wrapper>
      <img src="/src/assets/left.svg" alt="" />
      <img src="/src/assets/menu.svg" alt="" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 62px;
  border-radius: 10px;
  background-color: #3f3f3f;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  img {
    width: 24px;
    height: 24px;
  }
`;
