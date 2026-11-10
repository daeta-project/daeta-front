import styled from "@emotion/styled";

interface CharProfileFrameProps {
  ImgSrc: string;
  name: string;
  Content: string;
}

export default function CharProfileFrame({
  ImgSrc,
  name,
  Content,
}: CharProfileFrameProps) {
  return (
    <>
      <Wrapper>
        <img src={ImgSrc} alt="" />
        <Text>
          <Name>{name}</Name>
          <Contents>{Content}</Contents>
        </Text>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 46px;
  margin: 12px 16px 12px 16px;
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
  width: 100dvw;
  height: 62px;
`;

const Name = styled.p`
  font-weight: 600;
  font-size: 20px;
  color: #fff;
`;

const Contents = styled.div`
  color: #bababa;
  font-weight: 400;
  font-size: 12px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;
