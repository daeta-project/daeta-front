import styled from "@emotion/styled";
import MiniProfile from "./MiniProfile";

export default function Ranking() {
  return (
    <Wrap>
      <MiniProfile
        ImgSrc="/src/assets/Logo.svg"
        name="ㄱㄴㄷ 선생님"
        number={2}
        $ImgSize={75}
        $numbersize={20}
        $namesize={14}
      />
      <First>
        <Crown src="/src/assets/crown.svg" alt="" />
        <MiniProfile
          ImgSrc="/src/assets/Logo.svg"
          name="ㄱㄴㄷ 선생님"
          number={1}
          $ImgSize={101}
          $numbersize={24}
          $namesize={16}
        />
      </First>
      <MiniProfile
        ImgSrc="/src/assets/Logo.svg"
        name="ㄱㄴㄷ 선생님"
        number={3}
        $ImgSize={75}
        $numbersize={20}
        $namesize={14}
      />
    </Wrap>
  );
}

const Wrap = styled.div`
  margin: 0 17px;
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: 32px;
  height: 203px;
`;

const First = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const Crown = styled.img`
  width: 60px;
  height: 49px;
  position: absolute;
  top: -39px;
`;
