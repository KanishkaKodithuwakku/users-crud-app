import React from "react";
import useInput from "../hooks/useInput";
import useUserThunkReducer, {
  userReducer,
  defaultData,
  ACTIONS,
} from "../hooks/useUserReducer";
import styled  from "styled-components";

const StyledLabel = styled.label`
width: 200px;
`

const StyledInputGroup = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 5px;
`

const StyledInput = styled.input`
  padding: 5px;
  width: 100%;
  border: 1px solid #ccc;

  &:active {
    border: 1px solid #666;
  }
`;

const StyledFormBox = styled.div`
padding: 5px;
`

const UserForm = () => {
  const [name, bindName, resetName] = useInput("");
  const [email, bindEmail, resetEmail] = useInput("");
  const [location, bindLocation, resetLocation] = useInput("");
  const [zipcode, bindZipcode, resetZipcode] = useInput("");
  const [postalCode, bindPostalCode, resetPostalCode] = useInput("");

  const [state, dispatch] = useUserThunkReducer(userReducer, defaultData);

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${name} ${postalCode}`);
    dispatch({
      type: ACTIONS.ADD_USER,
      payload: {
        user: { name, postalCode, email, location, zipcode },
      },
    });

    console.log(state);
    resetName();
    resetPostalCode();
    resetEmail();
    resetLocation();
    resetZipcode();
  };

  return (
    <StyledFormBox>
      <form onSubmit={submitHandler}>
        <StyledInputGroup>
          <StyledLabel>First Name</StyledLabel>
          <StyledInput type="text" {...bindName} />
        </StyledInputGroup>

        <StyledInputGroup>
          <StyledLabel>Postal Code</StyledLabel>
          <StyledInput type="text" {...bindPostalCode} />
        </StyledInputGroup>

        <StyledInputGroup>
          <StyledLabel>Email</StyledLabel>
          <StyledInput type="text" {...bindEmail} />
        </StyledInputGroup>

        <StyledInputGroup>
          <StyledLabel>Location</StyledLabel>
          <StyledInput type="text" {...bindLocation} />
        </StyledInputGroup>

        <StyledInputGroup>
          <StyledLabel>Zipcode</StyledLabel>
          <StyledInput type="text" {...bindZipcode} />
        </StyledInputGroup>

        <StyledInputGroup>
          <button type="submit">Submit</button>
        </StyledInputGroup>
      </form>
    </StyledFormBox>
  );
};

export default UserForm;
