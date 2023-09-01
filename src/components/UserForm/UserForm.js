import React, { useState } from "react";
import TextInput from "../TextInput/TextInput";
import styled from "styled-components";
import Button from "../Buttons/Button";
import useUserThunkReducer, {
  userReducer,
  defaultData,
  ACTIONS,
} from "../../hooks/useUserReducer";
import Titlebar from "../TitleBar/Titlebar";

const StyledForm = styled.form`
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  margin: 5px;
`;

const UserForm = () => {
  const [state, dispatch] = useUserThunkReducer(userReducer, defaultData);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    location: "",
    zipcode: "",
    postalcode: "",
  });
  const handleInputChange = (inputName, inputValue) => {
    setFormData((prevData) => ({
      ...prevData,
      [inputName]: inputValue,
    }));
  };

  function hadleAddUser(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_USER, payload: { user: formData } });
  }

  return (
    <StyledForm>
      <Titlebar title={`Add new User`} />
      <TextInput
        name="name"
        label="Name"
        onChangeHandler={handleInputChange}
        placeholder={`Name`}
      />
      <TextInput
        name="email"
        label="Email"
        onChangeHandler={handleInputChange}
        placeholder={`Email`}
      />
      <TextInput
        name="address"
        label="Address"
        onChangeHandler={handleInputChange}
        placeholder={`Address`}
      />
      <TextInput
        name="location"
        label="Location"
        onChangeHandler={handleInputChange}
        placeholder={`Location`}
      />

      <TextInput
        name="zipcode"
        label="Zip Code"
        onChangeHandler={handleInputChange}
        placeholder={`Zip Code`}
      />

      <TextInput
        name="postalcode"
        label="Postal Code"
        onChangeHandler={handleInputChange}
        placeholder={`Postal Code`}
      />

      <Button
        color={`#007bff`}
        btn={`submit`}
        btnText={`Submit`}
        handleOnClick={hadleAddUser}
      />
      <Button
        color={`#000`}
         btn={`reset`}
        btnText={`Submit`}
        handleOnClick={hadleAddUser}
      />
    </StyledForm>
  );
};

export default UserForm;
