import React from "react";
import useUserThunkReducer, {
  userReducer,
  defaultData,
  ACTIONS,
} from "../../hooks/useUserReducer";
import UsersListItem from "../UsersListItem/UsersListItem";
import styled from "styled-components";
import Titlebar from "../TitleBar/Titlebar";

const MainWrapper = styled.div`
  padding: 20px 20px;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  max-width: 500px;
  margin-top: 10px;
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
      <Titlebar title={`Users`}/>
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
