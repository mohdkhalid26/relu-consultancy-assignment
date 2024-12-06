import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/signup/index";
import Login from "./pages/login/index";
import Home from "./pages/home/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
