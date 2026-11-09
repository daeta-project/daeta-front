import styled from "@emotion/styled";
import React from "react";

export default function ProfileHeader() {
  return (
    <Wrapper>
      <img src="/src/assets/left.svg" alt="" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 62px;
  border-radius: 10px;
  background-color: #3f3f3f;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: start;
  align-items: end;
  padding: 0 36px;
  img {
    width: 24px;
    height: 24px;
    margin: 0 0 19px;
  }
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;
