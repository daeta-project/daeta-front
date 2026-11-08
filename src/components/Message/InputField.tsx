import styled from "@emotion/styled";

export default function InputField() {
  return <Wrap maxLength={400} placeholder="Enter texts..."></Wrap>;
}

const Wrap = styled.textarea`
  resize: none;
  background-color: #6b6b6b;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  outline: none;
  border: none;
  color: white;
  border-radius: 30px;
  padding: 10px 16px;
  max-height: 50px;
  inline-size: 100%;
  field-sizing: content;
  overflow: auto;
  box-sizing: border-box;

  font-family: Pretendard;
  font-weight: 500;
  font-size: 16px;
  ::placeholder {
    color: white;
    font-weight: 500;
  }

  ::-webkit-scrollbar {
    //스크롤바 안보이게 해줌
    display: none;
  }
`;
