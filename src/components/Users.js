import React from "react";
import useUserThunkReducer, {
  userReducer,
  defaultData,
  ACTIONS,
} from '../hooks/useUserReducer'
const Users = () => {
      const [state, dispatch] = useUserThunkReducer(userReducer, defaultData);
  
  const { users } = state;
  return (
    <div>
      <h1>Users</h1>

      <ul>
        {users && users.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
