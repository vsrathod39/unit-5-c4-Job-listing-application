import { ADD_JOB_ERROR, ADD_JOB_LOADING, ADD_JOB_SUCCESS } from "./ActionTypes";

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
