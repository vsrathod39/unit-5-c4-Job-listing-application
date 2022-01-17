import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function PrivateRoutes() {
  const { isAuth } = useSelector((state) => ({
    // loading: state.loading,
    // todos: state.data,
    // error: state.error,
    isAuth: state.isAuth,
  }));
  const dispatch = useDispatch();

  return isAuth ? <Outlet /> : <Navigate replace to="/login" />;
}
