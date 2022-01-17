import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetJobLoading, GetJobSuccess, GetJobError } from "../Store/actions";
import "./user.css";

export default function User() {
  const { loading, jobs, error } = useSelector((state) => ({
    loading: state.loading,
    jobs: state.data,
    error: state.error,
  }));

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(GetJobLoading());
    fetch("http://localhost:3001/jobs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(GetJobSuccess(data));
      })
      .catch((error) => {
        dispatch(GetJobError(error));
      });
  }, []);
  return (
    <div className="job-container">
      <h2>Welcome to dashboard</h2>
      {jobs.map((el) => {
        return (
          <div className="job-wrapper" key={el.id}>
            <p>
              <b>Comapny Name: {el.company_name}</b>
            </p>
            <p>Job Title: {el.title}</p>
            <p>Salary: {el.salary}</p>
            <p>Job Discription: {el.description}</p>
            <p>Location: {el.location}</p>
            <p>Job Type: {el.job_type}</p>
          </div>
        );
      })}
    </div>
  );
}
