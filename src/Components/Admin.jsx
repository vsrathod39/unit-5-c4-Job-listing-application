import React from "react";
import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <div>
      <h2>Welcome to admin page</h2>
      <Link to="/admin/postjob">Add job to the list</Link>
    </div>
  );
}
