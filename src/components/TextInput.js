import { InputContainer, InputSpan } from "../styledComponent/StyledComponent";

export default function TextInput({ inputFeildName, children }) {
  return (
    <InputContainer>
      <InputSpan>{inputFeildName}</InputSpan>
      {children}
    </InputContainer>
  );
}
