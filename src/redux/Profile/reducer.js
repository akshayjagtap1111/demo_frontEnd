import {
  PROFILE_LOADING,
  PROFILE_LOADING_SUCCESS,
  PROFILE_LOADING_FAILURE,
} from "./action";

const init_state = {
  loading: false,
  profile: "",
  error: false,
  success:false
};

export const get_profile_reducer = (state = init_state, { type, payload }) => {
  switch (type) {
    case PROFILE_LOADING:
      return {
        ...state,
        loading: true,
        profile: "",
        error: false,
        success:false
      };

    case PROFILE_LOADING_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: payload,
        error: false,
        success:true
      };

    case PROFILE_LOADING_FAILURE:
      return {
        ...state,
        loading: false,
        profile: "",
        error: true,
        success:false
      };

    default:
      return state;
  }
};
