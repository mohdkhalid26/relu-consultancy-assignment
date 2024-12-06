import React from "react";
import { Route, Routes } from "react-router";
import Signup from "./pages/signup/page";
import Login from "./pages/login/page";
import Home from "./pages/home/page";
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
