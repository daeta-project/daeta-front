import styled from "@emotion/styled";
import MiniProfile from "./MiniProfile";

export default function Ranking() {
  return (
    <Wrap>
      <MiniProfile
        ImgSrc="/src/assets/WarningIcon.svg"
        name="ㄱㄴㄷ 선생님"
        number={2}
        $ImgSize={75}
        $numbersize={20}
        $fontsize={14}
      />
      <MiniProfile
        ImgSrc="/src/assets/WarningIcon.svg"
        name="ㄱㄴㄷ 선생님"
        number={1}
        $ImgSize={101}
        $numbersize={24}
        $fontsize={16}
      />
      <MiniProfile
        ImgSrc="/src/assets/WarningIcon.svg"
        name="ㄱㄴㄷ 선생님"
        number={3}
        $ImgSize={75}
        $numbersize={20}
        $fontsize={14}
      />
    </Wrap>
  );
}

const Wrap = styled.div`
  margin: 0 17px;
  display: flex;
  flex-direction: row;
  gap: 32px;
`;
