import styled from "@emotion/styled";
import LoginButton from "../components/Button/LoginButton";
import Landing from "../components/Landing";
import Warning from "../components/Message/Warning";

export default function Login() {
  return (
    <>
      <Wrapper>
        <Landing />
        <LoginButton />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #3f3f3f;
  gap: 254px;
  height: 100dvh;
`;
