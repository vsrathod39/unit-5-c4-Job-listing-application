import React from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  UserAuthLoading,
  UserAuthSuccess,
  UserAuthError,
} from "../Store/actions";

export default function Login() {
  const [user, setUser] = React.useState();

  const { isAuth } = useSelector((state) => ({
    // loading: state.loading,
    // todos: state.data,
    // error: state.error,
    isAuth: state.isAuth,
  }));

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(UserAuthLoading());
    fetch("http://localhost:3001/admin")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        data.forEach((el) => {
          if (el.name === user.name && el.password) {
            dispatch(UserAuthSuccess());
            alert("login sccess");
            return;
          } else {
            alert("Invalid authetication");
          }
        });
        dispatch(UserAuthSuccess());
      })
      .catch((error) => {
        console.log(error);
        dispatch(UserAuthError());
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="user_id"
          name="name"
        />{" "}
        <br />
        <input
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="password"
        />{" "}
        <br />
        <input type="submit" />
      </form>
      {isAuth ? <Navigate replace to="/user/dashboard" /> : null}
    </div>
  );
}
