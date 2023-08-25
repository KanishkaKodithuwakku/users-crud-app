import React, {useState} from "react";
import  styled  from "styled-components";

const InputWrapper = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  max-width: 500px;
`;

const StyledLabel = styled.label`
  margin-bottom: 5px;
  font-size: 1rem;
  color: #212529;
`;

const StyledInput = styled.input`
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

const TextInput = ({name, label,onChangeHandler }) => {
  const [value, setValue] = useState('')

  const handleInputChange = (e) => {
    setValue(e.target.value);
    onChangeHandler(name, e.target.value);
  };

  return (
    <InputWrapper>
      
      {label && <StyledLabel className="">{label}</StyledLabel>}
      <StyledInput
        className=""
        type="text"
        value={value}
        onChange={handleInputChange}
      />
    </InputWrapper>
  );
};

export default TextInput;
