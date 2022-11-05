

import {
    REGISTER_FAILURE,
    REGISTER_SUCCESS,
    REGISTER_LOADING,
  } from "./action";
  
  const initial_state = {
    loading: false,
    error: false,
    isRegistered:false,
  };
  
  export const login_reducer = (state = initial_state, { type}) => {
    switch (type) {
      case REGISTER_LOADING:
        return {
          ...state,
          loading: true,
        };
      case REGISTER_SUCCESS:
        return {
          ...state,
          loading: false,
          isRegistered: true,
          error: false,
        };
  
      case REGISTER_FAILURE:
        return {
          ...state,
          error: true,
          isRegistered: false,
          loading: false,
        };
  
      default:
        return state;
    }
  };