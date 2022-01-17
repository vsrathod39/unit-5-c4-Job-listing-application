import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  UserLogoutLoading,
  UserLogoutSuccess,
  UserLogoutError,
} from "../Store/actions";

export default function Navbar() {
  const { isAuth, user_type } = useSelector((state) => ({
    // loading: state.loading,
    // todos: state.data,
    // error: state.error,
    isAuth: state.isAuth,
    user_type: state.user_type,
  }));
  const dispatch = useDispatch();

  const links = [
    {
      to: "/",
      title: "Home",
      id: 1,
    },
    // {
    //   to: "/login",
    //   title: "Login",
    //   id: 2,
    // },
    // {
    //   to: "/dashboard",
    //   title: "Dashboard",
    //   id: 3,
    // },
    // {
    //   to: "/login/admin",
    //   title: "Login as admin",
    // },
  ];

  const handleLogout = () => {
    dispatch(UserLogoutLoading());
    dispatch(UserLogoutSuccess("false"));
    dispatch(UserLogoutError("isAuth Error"));
  };

  return (
    <div>
      {links.map((e) => {
        return (
          <Link key={e.id} to={e.to}>
            {e.title}
          </Link>
        );
      })}
      {!isAuth ? (
        <Link to="/login">Login</Link>
      ) : user_type === "user" ? (
        <>
          <Link to="/user/dashboard">Dashboard</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : null}
    </div>
  );
}
