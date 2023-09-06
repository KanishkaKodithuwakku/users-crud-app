



export const ACTIONS = {
  ADD_USER: "ADD_USER",
  EDIT_USER: "EDIT_USER",
  DELETE_USER: "DELETE_USER",
};

export const initialState = {
  users: [
    {
      id: 1,
      name: "John",
      email: "john@gmail.com",
      location: "NY",
      zipcode: "10001",
      postalCode: "10002",
    },
    {
      id: 2,
      name: "Jane",
      email: "jane@gmail.com",
      location: "LA",
      zipcode: "90001",
      postalCode: "90002",
    },
  ],
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_USER:
      return { ...state, users: [...state.users, action.payload] };
    case ACTIONS.EDIT_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    case ACTIONS.DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};
