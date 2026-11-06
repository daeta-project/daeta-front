import styled from "@emotion/styled";
import Progressbar from "./Progressbar";

interface CharCardProps {
  ImgSrc: string;
  Progress: number;
  Name: string;
  Content: string;
}

export default function CharCard({
  ImgSrc,
  Name,
  Content,
  Progress,
}: CharCardProps) {
  return (
    <>
      <Wrapper>
        <img src={ImgSrc} alt="" />{" "}
        <Namerge>
          <Title>
            <NameBlock>{Name}</NameBlock>
            <Progressbar Progress={Progress} $width={343} $height={10} />
          </Title>
          <Contents>{Content}</Contents>
        </Namerge>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 12px 16px;
  img {
    width: 327px;
    height: 314px;
    border-radius: 8px;
    background-color: #bababa; /*일단 구분이 가야해서,,*/
  }
`;

const NameBlock = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: #fff;
`;

const Contents = styled.div`
  color: white;
`;

const Title = styled.div`
  margin: 12px 0 16px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

const Namerge = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;
