import styled from "@emotion/styled";

export default function LoginButton() {
  return (
    <Btn>
      <img src="Google.svg" alt="Google Logo" />
      <span>Google 계정으로 로그인하기</span>
    </Btn>
  );
}

const Btn = styled.button`
  background-color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  height: 56px;
  width: 335px;
  span {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0%;
    white-space: nowrap;
  }
  border-radius: 16px;
  outline: none;
  border: none;
  img {
    size: 32px 32px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  bottom: calc(52px+env(safe-area-inset-bottom));
`;
