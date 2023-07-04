import React from "react";
import "./Body.styles.css";
import Navbar from "./Navbar.component";
import Homepage from "./Homepage.container";

function Body() {
  return (
    <div id="body">
      <Navbar />
      <Homepage />
    </div>
  );
}

export default Body;
