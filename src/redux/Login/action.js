import axios from "axios";

import { useNavigate } from "react-router-dom";

export const LOGIN_SUCCESS = "LOGIN SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGIN_LOADING = "LOGIN_LOADING";

export const login_loading = () => {
  return {
    type: LOGIN_LOADING,
  };
};

export const login_success = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

export const login_failure = () => {
  return {
    type: LOGIN_FAILURE,
  };
};

export const userLogin = (userdetails) => (dispatch) => {
  dispatch(login_loading());

  axios
    .post("http://localhost:5000/login", userdetails)
    .then((res) => {
      console.log("logged in with  user details successfully");

      console.log("in responce of log in we got", res);

      console.log("yeahhh, now dont forget to chech failures senarios");

      dispatch(login_success(res.data.token));
    })
    .catch((error) => {
      dispatch(login_failure());
      console.log("ufff... failed to log in");
      if (error.responce) {
        alert(error.responce.message);
      }
    });
};
