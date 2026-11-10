import styled from "@emotion/styled";
import React from "react";

export default function MainHeader() {
  return (
    <Wrapper>
      <img src="/src/assets/Logo.svg" alt="로고" />
      <img src="/src/assets/person.svg" alt="마이페이지" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 62px;
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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;
