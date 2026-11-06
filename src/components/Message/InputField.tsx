import styled from "@emotion/styled";

export default function InputField() {
  return <Wrap placeholder="Enter texts..."></Wrap>;
}

const Wrap = styled.textarea`
  -webkit-appearance: none;
  resize: none;
  background-color: #6b6b6b;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  outline: none;
  border: none;
  color: white;
  border-radius: 30px;
  padding: 10px 16px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  font-weight: 500;
  font-size: 16px;
  ::placeholder {
    color: white;
    font-weight: 500;
  }
`;
