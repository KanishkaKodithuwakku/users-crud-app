import React from "react";
import useInput from "../hooks/useInput";
import useUserThunkReducer, {
  userReducer,
  defaultData,
  ACTIONS,
} from "../hooks/useUserReducer";

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
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name</label>
          <input type="text" {...bindName} />
        </div>

        <div>
          <label>Postal Code</label>
          <input type="text" {...bindPostalCode} />
        </div>

        <div>
          <label>Email</label>
          <input type="text" {...bindEmail} />
        </div>

        <div>
          <label>Location</label>
          <input type="text" {...bindLocation} />
        </div>

        <div>
          <label>Zipcode</label>
          <input type="text" {...bindZipcode} />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
