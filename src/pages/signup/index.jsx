import React from "react";
import { NavLink } from "react-router-dom";

function Signup() {
  return (
    <div>
      Signup
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
}

export default Signup;
