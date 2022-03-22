import * as AuthTypes from "./types";

const initial_state = {
  user: null,
  loading: false,
  isLoggedIn: false,
};

const AuthReducer = (state = initial_state, { type, payload }) => {
  switch (type) {
    case AuthTypes.LOGIN_USER:
      return {
        ...state,
        user: payload,
      };
    case AuthTypes.LOADING:
      return {
        ...state,
        loading: !state.loading,
      };
    default:
      return {
        ...state,
      };
  }
};

export default AuthReducer;
