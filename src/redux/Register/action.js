import axios from "axios";

import { useNavigate } from "react-router-dom";

export const REGISTER_SUCCESS = "REGISTER SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const REGISTER_LOADING = "REGISTER_LOADING";

export const register_loading = () => {
  return {
    type: LOGIN_LOADING,
  };
};

export const register_success = () => {
  return {
    type: LOGIN_SUCCESS,
  };
};

export const register_failure = () => {
  return {
    type: LOGIN_FAILURE,
  };
};

export const userRegister = (userdetails) => (dispatch) => {
  dispatch(register_loading());

  axios
    .post("http://localhost:5000/register", userdetails)
    .then((res) => {
      console.log("Registered with  user details successfully");

      console.log("in responce of log in we got", res);

      console.log("yeahhh, now dont forget to chech failures senarios");

      dispatch(register_success(res.data.token));
    })
    .catch((error) => {
      //   dispatch(login_failure());
      console.log("ufff... failed to log in");
      if (error.responce) {
        alert(error.responce.message);
      }
    });
};
