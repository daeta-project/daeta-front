import styled from "@emotion/styled";
import Progressbar from "./Progressbar";

interface CharProps {
  ImgSrc: string;
  Text: string;
  Progress: number;
}
export default function Char({ ImgSrc, Text, Progress }: CharProps) {
  return (
    <Wrapper>
      <img src={ImgSrc} alt="" />
      <Info>
        <Name>{Text}</Name>
        <Progressbar Progress={Progress} />
      </Info>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  img {
    border-radius: 50px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
    width: 36px;
    height: 36px;
    margin: 0;
  }
  gap: 10px;
  display: flex;
  flex-direction: row;
`;

const Name = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: white;
`;
const Info = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;
