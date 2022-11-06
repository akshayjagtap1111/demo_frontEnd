import axios from "axios";

import { useNavigate } from "react-router-dom";

export const REGISTER_SUCCESS = "REGISTER SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const REGISTER_LOADING = "REGISTER_LOADING";

export const register_loading = (payload) => {
  return {
    type: REGISTER_LOADING,
    payload: payload,
  };
};

export const register_success = () => {
  return {
    type: REGISTER_SUCCESS,
  };
};

export const register_failure = () => {
  return {
    type: REGISTER_FAILURE,
  };
};

export const userRegister = (userdetails) => (dispatch) => {
  let url = "http://localhost:3000/user/register";

  if (userdetails.role === "influencer") {
    url = "http://localhost:3000/user/register-influencer";
  }
  dispatch(register_loading());

  //here url for user and influencer will be dynamic

  axios
    .post(url, userdetails)
    .then((res) => {
      console.log("Registered with  user details successfully");

      console.log("in responce of log in we got", res);

      console.log("yeahhh, now dont forget to chech failures senarios");

      dispatch(register_success());
    })
    .catch((error) => {
      //   dispatch(login_failure());
      console.log("ufff... failed to Register");
      if (error.responce) {
        alert(error.responce.message);
      }
    });


  console.log(url)
};
