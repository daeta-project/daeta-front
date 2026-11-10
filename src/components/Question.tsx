import styled from "@emotion/styled";
interface QuestionProps {
  title: string;
  content: string;
}
export default function Question({ title, content }: QuestionProps) {
  return (
    <Wrap>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Wrap>
  );
}

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #fff;
  margin: 10px 0;
`;

const Content = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #dbdbdb;
`;

const Wrap = styled.div`
  margin: 0 20px;
  padding-top: 72px;
`;
