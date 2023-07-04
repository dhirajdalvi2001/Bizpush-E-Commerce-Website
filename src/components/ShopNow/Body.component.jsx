import React from "react";
import LeftContainer from "./LeftContainer.component";
import MiddleContainer from "./MiddleContainer.component";
import RightContainer from "./RightContainer.component";
import "./Body.styles.css";

function Body() {
  return (
    <div id="sbody">
      <LeftContainer />
      <MiddleContainer />
      <RightContainer />
    </div>
  );
}

export default Body;
