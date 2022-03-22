import * as AuthType from "./types";

const timeout = (s) => new Promise((resolve) => setTimeout(resolve, s * 1000));

export const loginUser = (userData) => async (dispatch) => {
  dispatch({
    type: AuthType.LOADING,
  });

  await timeout(5);
  dispatch({
    payload: userData,
    type: AuthType.LOGIN_USER,
  });

  dispatch({
    type: AuthType.LOADING,
  });
};

export const logoutUser = () => ({});
