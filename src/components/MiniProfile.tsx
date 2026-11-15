import styled from "@emotion/styled";

interface MiniProfileProps {
  ImgSrc: string;
  number: number;
  name: string;
  $ImgSize?: number;
  $numbersize?: number;
  $numberweight?: number;
  $namesize?: number;
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
  $ImgSize,
  $numbersize,
  $numberweight,
  $namesize,
}: MiniProfileProps) {
  return (
    <Wrap>
      <ProfileImage src={ImgSrc} $ImgSize={$ImgSize} />
      <Texts>
        <Number $numbersize={$numbersize} $numberweight={$numberweight}>
          {number}등
        </Number>
        <Name $namesize={$namesize}>{name}</Name>
      </Texts>
    </Wrap>
  );
}

const Wrap = styled.div<StyleProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 101px;
`;
const ProfileImage = styled.img<StyleProps>`
  background-color: aliceblue;
  border-radius: 50%;
  width: ${(props) => props.$ImgSize}px;
  height: ${(props) => props.$ImgSize}px;
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
