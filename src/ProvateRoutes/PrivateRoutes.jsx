import React from "react";
// import { AuthContext } from "../../Context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoutes() {
  const { isAuth } = React.useContext(AuthContext);

  return isAuth ? <Outlet /> : <Navigate replace to="/login" />;
}
