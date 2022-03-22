import * as UserTypes from "./types";
import users from "../data";

const timeout = (s) => new Promise((resolve) => setTimeout(resolve, s * 1000));

export const getUserData = () => async (dispatch) => {
  dispatch({
    type: UserTypes.LOADING,
  });
  await timeout(5);
  dispatch({
    payload: users,
    type: UserTypes.GET_USERS,
  });
  dispatch({
    type: UserTypes.LOADING,
  });
};

export const filterBySalary = (max, min) => (dispatch, getState) => {
  const {
    User: { users },
  } = getState();
  const filteredUser = users.filter(
    (user) => user.salary > min && user.salary < max
  );

  console.log({ filteredUser });
  dispatch({
    type: UserTypes.FILTER_USER_BY_SALARY,
    payload: filteredUser,
  });
};
