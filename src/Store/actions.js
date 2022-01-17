import {
  ADD_JOB_ERROR,
  ADD_JOB_LOADING,
  ADD_JOB_SUCCESS,
  USER_AUTH_ERROR,
  USER_AUTH_LOADING,
  USER_AUTH_SUCCESS,
} from "./actionTypes";

export const AddJobLoading = () => {
  return {
    type: ADD_JOB_LOADING,
  };
};

export const AddJobSuccess = (data) => {
  return {
    type: ADD_JOB_SUCCESS,
    payload: data,
  };
};

export const AddJobError = (error) => {
  return {
    type: ADD_JOB_ERROR,
    payload: error,
  };
};

export const UserAuthLoading = () => {
  return {
    type: USER_AUTH_LOADING,
  };
};

export const UserAuthSuccess = () => {
  return {
    type: USER_AUTH_SUCCESS,
    // payload: data,
  };
};

export const UserAuthError = (error) => {
  return {
    type: USER_AUTH_ERROR,
    payload: error,
  };
};
