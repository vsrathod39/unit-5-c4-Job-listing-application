import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoutes from "../ProvateRoutes/PrivateRoutes";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Dashboard from "../Components/Dashboard";

export default function RoutesHandler() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
