import React from "react";
import useUserThunkReducer, {
  userReducer,
  defaultData,
} from "../hooks/useUserReducer";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SpaceBetween } from "../common/Flexs";
import { ButtonPrimary } from "../common/Buttons";

const StyledUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledLi = styled.li`
  border: 1px solid #ccc;
  margin: 5px;
  padding: 5px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;

const Users = () => {
  const [state] = useUserThunkReducer(userReducer, defaultData);

  const { users } = state;
  return (
    <div>
      <h1>Users</h1>

      <StyledUl>
        {users &&
          users.map((user, index) => (
            <StyledLi key={index}>
              <SpaceBetween>
                <Link to={`/profile/:${user.name}`}>{user.name}</Link>
                <ButtonPrimary>Edit</ButtonPrimary>
              </SpaceBetween>
            </StyledLi>
          ))}
      </StyledUl>
    </div>
  );
};

export default Users;
