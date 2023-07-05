import React from "react";
import "./Navbar.styles.css";
import burger from "./svgs/burger.svg";
import search from "../Body/search.svg";
import profilepic from "./svgs/profilepic.svg";
import dots from "./svgs/dots.svg";
import red from "./svgs/red.svg";
import notification from "./svgs/notification.svg";
import cross from "./svgs/cross.svg";

function Navbar() {
  let navItems = ["Dashboard", "About Us", "News", "User Policy", "Contacts"];
  return (
    <div id="snavbar" className="flexIt">
      <div className="header flexIt">
        <img src={burger} alt="" srcSet="" className="burger" />
        <h4 className="constructor">Constructor</h4>
      </div>
      <ul className="snav-menu flexIt">
        {navItems.map((e) => {
          return (
            <li key={e} className="snav-item flexIt">
              {e}
            </li>
          );
        })}
        <li className="dots flexIt">
          <img src={dots} alt="" srcSet="" />
        </li>
      </ul>
      <div className="profile-box flexIt">
        <div className="search-container flexIt">
          <img src={search} alt="" srcSet="" className="search" />
          <input
            type="text"
            placeholder="Search Transactions and Documents"
            className="search-bar"
          />
        </div>
        <img src={profilepic} alt="" srcSet="" className="profilepic" />
        <h4 className="heading4">Clayton Santos</h4>
        <img src={red} alt="" srcSet="" className="red" />
        <img src={notification} alt="" srcSet="" className="notification" />
        <img src={cross} alt="" srcSet="" className="cross" />
      </div>
    </div>
  );
}

export default Navbar;
