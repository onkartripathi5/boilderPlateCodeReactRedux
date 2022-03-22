import * as UserTypes from "./types";

const initial_state = {
  users: [],
  loading: false,
  filteredUsers: [],
};

const UsersReducer = (state = initial_state, { type, payload }) => {
  switch (type) {
    case UserTypes.LOADING:
      return {
        ...state,
        loading: !state.loading,
      };
    case UserTypes.GET_USERS:
      return {
        ...state,
        users: payload,
      };
    case UserTypes.FILTER_USER_BY_SALARY:
      return {
        ...state,
        filteredUsers: payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default UsersReducer;
