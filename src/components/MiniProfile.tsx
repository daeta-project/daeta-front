import styled from "@emotion/styled";

interface MiniProfileProps {
  ImgSrc: string;
  number: number;
  name: string;
  $ImgSize?: number;
  $numbersize?: number;
  $numberweight?: number;
  $fontsize?: number;
}

interface StyleProps {
  $ImgSize?: number;
  $numbersize?: number;
  $numberweight?: number;
  $namesize?: number;
}

export default function MiniProfile({
  ImgSrc,
  name,
  number,
}: MiniProfileProps) {
  return (
    <Wrap>
      <img src={ImgSrc} alt="" />
      <Texts>
        <Number>{number}등</Number>
        <Name>{name}</Name>
      </Texts>
    </Wrap>
  );
}

const Wrap = styled.div<StyleProps>`
  img {
    background-color: aliceblue;
    width: ${(props) => props.$ImgSize}px;
    height: ${(props) => props.$ImgSize}px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 101px;
`;

const Number = styled.p<StyleProps>`
  font-size: ${(props) => props.$numbersize}px;
  font-weight: ${(props) => props.$numberweight}px;
`;

const Name = styled.p<StyleProps>`
  font-size: ${(props) => props.$namesize}px;
`;

const Texts = styled.div`
  color: white;
  display: contents;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
