import styled from "@emotion/styled";

interface AIProps {
  ImgSrc: string;
  content: string;
}
export default function AIText({ ImgSrc, content }: AIProps) {
  return (
    <Wrap>
      <img src={ImgSrc} alt="" />
      <Text>{content}</Text>
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
  justify-content: start;
`;

const Text = styled.div`
  background-color: #545454;
  color: white;
  font-weight: 500;
  font-size: 16px;
  padding: 8px;
  border-radius: 16px;
  margin-top: 20px;
`;
