import React, { useReducer } from "react";

export const ACTIONS = {
  ADD_USER: "ADD_USER",
  EDIT_USER: "EDIT_USER",
  DELETE_USER: "DELETE_USER",
};

export const defaultData = {
  users: [
    {
      name: "Kanishka",
      email: "infomail.kbk@gmail.com",
      location: "Colombo",
      zipcode: "100",
      postalcode: "200",
    },
    {
      name: "Kodithuwakku",
      email: "kodithuwakku@gmail.com",
      location: "Badulla",
      zipcode: "456",
      postalcode: "845",
    },
  ],
};

export const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.ADD_USER:
      console.log(ACTIONS.ADD_USER);
    return { ...state, users: [...state.users, payload.user] };
    case ACTIONS.EDIT_USER:
      console.log(ACTIONS.EDIT_USER);

    const updatedUsers = [...state.users];
      updatedUsers[payload.user_index] = payload.user;
      return { ...state, users: updatedUsers };
    case ACTIONS.DELETE_USER:
       const update = state.users.filter(
        (user, index) => index !== payload.user_index
      );
      return { ...state, users: update };

    default:
      return state;
  }
};

const useUserThunkReducer = (userReducer, defaultData) => {
  const [state, dispatch] = useReducer(userReducer, defaultData);

  const enhancedDispatch = (action) => {
    if (typeof action === "function") {
      action(dispatch);
    } else {
      dispatch(action);
    }
  };
  return [state, enhancedDispatch];
};

export default useUserThunkReducer;
