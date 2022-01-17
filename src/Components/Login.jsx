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

  const { isAuth, user_type } = useSelector((state) => ({
    // loading: state.loading,
    // todos: state.data,
    // error: state.error,
    isAuth: state.isAuth,
    user_type: state.user_type,
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
          if (el.name === user.name && el.password === user.password) {
            if (user?.user_type === "on") {
              dispatch(UserAuthSuccess("admin"));
            } else {
              dispatch(UserAuthSuccess("user"));
            }
            alert("login sccess");
            return;
          } else {
            alert("Invalid authetication");
          }
        });
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
        <label>Are you admin</label>
        <input onChange={handleChange} type="checkbox" name="user_type" />
        <br />
        <input type="submit" />
      </form>
      {isAuth ? (
        user_type === "admin" ? (
          <Navigate replace to="/admin" />
        ) : (
          <Navigate replace to="/user/dashboard" />
        )
      ) : null}
    </div>
  );
}
