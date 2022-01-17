import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoutes from "../ProvateRoutes/PrivateRoutes";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Admin from "../Components/Admin";
import PostJob from "../Components/PostJob";
import User from "../Components/User";

export default function RoutesHandler() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/postjob" element={<PostJob />} />
        <Route path="/user/dashboard" element={<User />} />
      </Route>
    </Routes>
  );
}
