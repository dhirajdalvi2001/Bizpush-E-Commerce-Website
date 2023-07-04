import React from "react";
import left1 from "./svgs/left1.svg";
import left2 from "./svgs/left2.svg";
import left3 from "./svgs/left3.svg";
import left4 from "./svgs/left4.svg";
import left5 from "./svgs/left5.svg";
import left6 from "./svgs/left6.svg";
import profile1 from "./svgs/leftprofile1.svg";
import profile2 from "./svgs/leftprofile2.svg";
import profile3 from "./svgs/leftprofile3.svg";
import profile4 from "./svgs/leftprofile4.svg";
import profile5 from "./svgs/leftprofile5.svg";
import "./LeftContainer.styles.css";

function LeftContainer() {
  const icons = [left1, left2, left3, left4, left5, left6];
  const profiles = [profile1, profile2, profile3, profile4, profile5];
  return (
    <div id="left-container">
      <ul className="left-icons">
        {icons.map((e) => {
          return (
            <li key={e} className="left-list flexIt">
              <img src={e} alt="" srcSet="" className="left-icon" />
            </li>
          );
        })}
      </ul>
      <ul className="left-profiles">
        {profiles.map((e) => {
          return (
            <li key={e} className="profile flexIt">
              <img src={e} alt="" srcSet="" className="left-icon flexIt" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default LeftContainer;
