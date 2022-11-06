import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_LOADING } from "./action";

const initial_state = {
  loading: false,
  isAuthenticated: false,
  token: "",
  error: false,
};

export const login_reducer = (state = initial_state, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        token: payload,
        error: false,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        error: true,
        isAuthenticated: false,
        token: "",
        loading: false,
      };

    default:
      return state;
  }
};
