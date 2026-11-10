import styled from "@emotion/styled";
import Char from "../Char";

export default function ChatHeader() {
  return (
    <Wrapper>
      <img src="/src/assets/left.svg" alt="" />
      <Char ImgSrc="rsd" Text="야호" Progress={60} />
      <img src="/src/assets/menu.svg" alt="" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 62px;
  background-color: #3f3f3f;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  img {
    width: 24px;
    height: 24px;
  }
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;
