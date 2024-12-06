import React from "react";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div>
      Login
      <NavLink to="/">Home</NavLink>
      <NavLink to="/signup">Signup</NavLink>
    </div>
  );
}

export default Login;
