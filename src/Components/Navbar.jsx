import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  UserAuthLoading,
  UserAuthSuccess,
  UserAuthError,
} from "../Store/actions";

export default function Navbar() {
  const { isAuth } = useSelector((state) => ({
    // loading: state.loading,
    // todos: state.data,
    // error: state.error,
    isAuth: state.isAuth,
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
    dispatch(UserAuthLoading());
    dispatch(UserAuthSuccess("false"));
    dispatch(UserAuthError("isAuth Error"));
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
      ) : (
        <>
          <Link to="/user/dashboard">Dashboard</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
}
