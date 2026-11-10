import styled from "@emotion/styled";

interface ProgressbarProps {
  Progress: number;
  $width?: number;
  $height?: number;
}
interface StyleProps {
  $width?: number; //$가 붙으면 스타일링
  $height?: number; //?가 붙으면 필수값이 아니라는거
}

export default function Progressbar({
  Progress,
  $width,
  $height,
}: ProgressbarProps) {
  return (
    <ProgressWrapper $width={$width} $height={$height}>
      <Progressfill Progress={Progress} />
    </ProgressWrapper>
  );
}

const ProgressWrapper = styled.div<StyleProps>`
  width: ${(props) => props.$width || 125}px;
  height: ${(props) => props.$height || 6}px;
  background-color: #6b6b6b;
  border-radius: 5px;
  margin-top: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
`;

const Progressfill = styled.div<ProgressbarProps>`
  width: ${(props) => props.Progress || 0}%;
  height: 100%;
  background-color: #02fd80;
  border-radius: 5px;
`;
