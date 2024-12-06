import React from "react";
import { Route, Routes } from "react-router";
import Signup from "./pages/signup/index";
import Login from "./pages/login/index";
import Home from "./pages/home/index";
function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
