import React from "react";
import Navbar from "../../assets/components/navbar/index";
import SuggestionBar from "../../assets/components/suggestion_bar/index";
import FeedBar from "../../assets/components/feedbar/index";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />
      <FeedBar />
      <SuggestionBar />
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/signup">Signup</NavLink>
    </>
  );
}

export default Home;
