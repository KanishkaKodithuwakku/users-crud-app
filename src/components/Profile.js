import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../App";
import useInput from "../hooks/useInput";
const Profile = () => {
  const { state, dispatch } = useContext(UserContext);
  const { id } = useParams();
  const isEdit = id !== undefined;

  const [name, bindName, resetName, setName] = useInput("");
  const [email, bindEmail, resetEmail, setEmail] = useInput("");
  const [location, bindLocation, resetLocation, setLocation] = useInput("");
  const [zipcode, bindZipcode, resetZipcode, setZipcode] = useInput("");
  const [postalCode, bindPostalCode, resetPostalCode, setPostalCode] =
    useInput("");

  useEffect(() => {
    if (isEdit) {
      const userToEdit = state.users.find((user) => user.id === parseInt(id));

      if (userToEdit) {
        setName(userToEdit.name);
        setEmail(userToEdit.email);
        setLocation(userToEdit.location);
        setZipcode(userToEdit.zipcode);
        setPostalCode(userToEdit.postalCode);
      }
    }
  }, [id, state.users, isEdit]);

  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
};

export default Profile;
