import styled from "@emotion/styled";

export default function AccountDeleteButton() {
  return (
    <Wrap>
      <img src="/src/assets/Delete.svg" alt="" />
      <Text>회원탈퇴 하기</Text>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 64px;
  gap: 49px;
  img {
    width: 36px;
    height: 36px;
  }
`;

const Text = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: #ed2b2b;
`;
