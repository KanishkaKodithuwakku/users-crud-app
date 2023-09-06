import React, { useContext, useState, useEffect } from "react";
import { ACTIONS } from "../hooks/userReducer";
import { UserContext } from "../App";
import useInput from "../hooks/useInput";
// import useUserThunkReducer, {
//   userReducer,
//   defaultData,
//   ACTIONS,
// } from "../hooks/useUserReducer";
import styled from "styled-components";
import { ButtonPrimary } from "../common/Buttons";

import { useHistory, useParams } from "react-router-dom";
import Title from "./Title";

const StyledLabel = styled.label`
  width: 200px;
`;
const StyledInputGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px;
`;
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
`;

const UserForm = () => {
  const { state, dispatch } = useContext(UserContext);

  const history = useHistory();
  const { id } = useParams();
  const isEdit = id !== undefined;

  const [name, bindName, resetName, setName] = useInput("");
  const [email, bindEmail, resetEmail, setEmail] = useInput("");
  const [location, bindLocation, resetLocation, setLocation] = useInput("");
  const [zipcode, bindZipcode, resetZipcode, setZipcode] = useInput("");
  const [postalCode, bindPostalCode, resetPostalCode, setPostalCode] =
    useInput("");

  // const [state, dispatch] = useUserThunkReducer(userReducer, defaultData);

useEffect(() => {
  if (isEdit) {
    const userToEdit = state.users.find((user) => user.id === parseInt(id));

    console.log(parseInt(id));

    if (userToEdit) {
     setName(userToEdit.name);
     setEmail(userToEdit.email);
     setLocation(userToEdit.location);
     setZipcode(userToEdit.zipcode);
     setPostalCode(userToEdit.postalCode);
    }
  }
}, [id, state.users, isEdit]);


  const submitHandler = (e) => {
    e.preventDefault();
      if (isEdit) {
        dispatch({
          type: ACTIONS.EDIT_USER,
          payload: {
            id: parseInt(id),
            name,
            email,
            location,
            zipcode,
            postalCode,
          },
        });
      } else {
        dispatch({
          type: ACTIONS.ADD_USER,
          payload: {
            id: Date.now(),
            name,
            email,
            location,
            zipcode,
            postalCode,
          },
        });
      }
      history.push("/");

    // console.log(state);
    // resetName();
    // resetPostalCode();
    // resetEmail();
    // resetLocation();
    // resetZipcode();
  };

  return (
    <StyledFormBox>
      <Title title={`Add New User`}/>
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
          <ButtonPrimary type="submit">Add New User</ButtonPrimary>
        </StyledInputGroup>
      </form>
    </StyledFormBox>
  );
};

export default UserForm;
