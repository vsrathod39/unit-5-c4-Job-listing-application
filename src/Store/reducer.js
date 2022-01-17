import {
  ADD_JOB_ERROR,
  ADD_JOB_LOADING,
  ADD_JOB_SUCCESS,
  USER_AUTH_ERROR,
  USER_AUTH_LOADING,
  USER_AUTH_SUCCESS,
  GET_JOB_ERROR,
  GET_JOB_LOADING,
  GET_JOB_SUCCESS,
  USER_LOGOUT_ERROR,
  USER_LOGOUT_LOADING,
  USER_LOGOUT_SUCCESS,
} from "./actionTypes";

const init = {
  loading: false,
  data: [],
  error: false,
  isAuth: false,
  user_type: null,
};

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
        user_type: payload,
        isAuth: true,
        loading: false,
        error: false,
      };
    case USER_AUTH_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case GET_JOB_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case GET_JOB_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
        error: false,
      };
    case GET_JOB_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case USER_LOGOUT_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        user_type: null,
        isAuth: false,
        loading: false,
        error: false,
      };
    case USER_LOGOUT_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
};
