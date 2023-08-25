import React from "react";
import useUserThunkReducer, {
  userReducer,
  defaultData,
  ACTIONS,
} from "../../hooks/useUserReducer";
import UsersListItem from "../UsersListItem/UsersListItem";
import styled from "styled-components";

const MainWrapper = styled.div`
  padding: 20px 20px;
`;

const UserListWrapper = styled.ul`
  padding: 5px;
  margin: 0;
  list-style: none;
  max-width: 500px;
`;

const UsersList = () => {
  const [state, dispatch] = useUserThunkReducer(userReducer, defaultData);
  const { users } = state;

  const handleDelete = (index) => { 

    dispatch({ type: ACTIONS.DELETE_USER, payload: {user_index : index} })

  }


  return (
    <MainWrapper>
      <h1>Users</h1>
      <UserListWrapper>
        {users.map((user, index) => (
          <UsersListItem handleDelete={() => handleDelete(index)} key={index}>
            {user.name}
          </UsersListItem>
        ))}
      </UserListWrapper>
    </MainWrapper>
  );
};

export default UsersList;
