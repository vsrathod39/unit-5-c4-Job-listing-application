import {
  ADD_JOB_ERROR,
  ADD_JOB_LOADING,
  ADD_JOB_SUCCESS,
  USER_AUTH_ERROR,
  USER_AUTH_LOADING,
  USER_AUTH_SUCCESS,
} from "./actionTypes";

const init = { loading: false, data: [], error: false, isAuth: false };

export const Reducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_JOB_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ADD_JOB_SUCCESS:
      return {
        ...state,
        data: [...state.data, payload],
        loading: false,
        error: false,
      };
    case ADD_JOB_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case USER_AUTH_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case USER_AUTH_SUCCESS:
      return {
        ...state,
        isAuth: payload,
        loading: false,
        error: false,
      };
    case USER_AUTH_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
};
