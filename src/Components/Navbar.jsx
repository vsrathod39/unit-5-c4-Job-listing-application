import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
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
          <Link to="/dashboard">Dashboard</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
}
