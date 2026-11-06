import styled from "@emotion/styled";

interface UserProps {
  ImgSrc: string;
  content: string;
}
export default function UserText({ ImgSrc, content }: UserProps) {
  return (
    <Wrap>
      <Text>{content}</Text>
      <img src={ImgSrc} alt="" />
    </Wrap>
  );
}

const Wrap = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: gray;
    box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.25);
  }
  display: flex;
  flex-direction: row;
  gap: 6px;
  justify-content: end;
`;

const Text = styled.div`
  background-color: #02fd80;
  color: #000000;
  font-weight: 500;
  font-size: 16px;
  padding: 8px;
  border-radius: 16px;
  margin-top: 20px;
`;
