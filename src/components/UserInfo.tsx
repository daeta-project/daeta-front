import styled from "@emotion/styled";

interface UserInfoProps {
  ImgSrc: string;
  email: string;
}

export default function UserInfo({ ImgSrc, email }: UserInfoProps) {
  return (
    <Wrap>
      <img src={ImgSrc} alt="" />
      <Email>{email}</Email>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  margin: 32px 20px;
  gap: 28px;
  img {
    background-color: aliceblue;
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
`;

const Email = styled.p`
  font-size: 20px;
  color: white;
`;
