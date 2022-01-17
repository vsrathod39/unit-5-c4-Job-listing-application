import React from "react";
import { useDispatch } from "react-redux";
import { AddJobLoading, AddJobSuccess, AddJobError } from "../Store/actions";

export default function PostJob() {
  const [job, setJob] = React.useState();
  //   const { jobs, sisAuth } = useSelector((state) => ({
  //     // loading: state.loading,
  //     jobs: state.data,
  //     // error: state.error,
  //     isAuth: state.isAuth,
  //   }));
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob({
      ...job,
      [name]: value,
    });
  };

  const addJob = () => {
    dispatch(AddJobLoading());
    fetch("http://localhost:3001/jobs", {
      method: "POST",
      body: JSON.stringify(job),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(AddJobSuccess(data));
        alert("Job added");
      })
      .catch((error) => {
        dispatch(AddJobError(error));
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addJob();
  };

  return (
    <div>
      <h3>Admin</h3>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Comapny name"
          name="company_name"
        />{" "}
        <br />
        <input
          onChange={handleChange}
          type="text"
          placeholder="Job title"
          name="title"
        />{" "}
        <br />
        <input
          onChange={handleChange}
          type="text"
          placeholder="Salary in LPA"
          name="salary"
        />{" "}
        <br />
        <input
          onChange={handleChange}
          type="text"
          placeholder="Job description"
          name="description"
        />{" "}
        <br />
        <input
          onChange={handleChange}
          type="text"
          placeholder="Location"
          name="location"
        />
        <br />
        <input
          onChange={handleChange}
          type="text"
          placeholder="Job type (Remote or In-office"
          name="job_type"
        />{" "}
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
