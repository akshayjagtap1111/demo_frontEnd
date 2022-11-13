import axios from "axios";

export const PROFILE_LOADING = "PROFILE_LOADING";

export const PROFILE_LOADING_SUCCESS = "PROFILE_LOADING_SUCCESS";

export const PROFILE_LOADING_FAILURE = "ROFILE_LOADING_FAILURE";

export const profile_loading = () => {
  return {
    type: PROFILE_LOADING,
  };
};

export const profile_loading_success = (payload) => {
  return {
    type: PROFILE_LOADING_SUCCESS,
    payload,
  };
};

export const profile_loading_failure = () => {
  return {
    type: PROFILE_LOADING_FAILURE,
  };
};

export const get_profile = (header) => (dispatch) => {
  dispatch(profile_loading());

  axios
    .get("http://localhost:5000/user/profile", {headers:header})
    .then((res) => {
      dispatch(profile_loading_success(res.data));
    })
    .catch((error) => {
      dispatch(profile_loading_failure());
      console.log("error while loading profile", error);
    });
};
