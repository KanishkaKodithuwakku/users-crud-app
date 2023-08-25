import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: inline-block;
  font-weight: var(--font-weight-normal);
  color: #fff;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  background-color: #007bff; /* Primary Blue */
  border: 1px solid #007bff;
  padding: 0.1rem 0.55rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;

  &:hove {
    background-color: #0056b3;
    border-color: #004792;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
  }
`;
const BtnWrapper = styled.div`
  margin: 0 1px;
`;

const Button = ({ btnText, handleOnClick }) => {
  return (
    <BtnWrapper>
      <StyledButton onClick={handleOnClick}>{btnText}</StyledButton>
    </BtnWrapper>
  );
};
Button.defaultProps = {
  btnText: "Click Here",
};
export default Button;
