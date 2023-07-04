import React from "react";
import "./Navbar.styles.css";
import logoSvg from "./logo.svg";
import search from "./search.svg";
import cart from "./cart.svg";
import profile from "./profile.svg";

function Navbar() {
  let navItems = ["Home", "Gallery", "Shop", "Contact"];
  return (
    <div id="navbar">
      <ul className="nav-menu">
        <div className="logo-box flexIt">
          <img src={logoSvg} alt="" srcSet="" className="logo" />
          <div className="logo-title flexIt">BIZPUSH</div>
        </div>
        <div className="items flexIt">
          {navItems.map((e) => {
            return (
              <li key={e} className="flexIt">
                {e}
              </li>
            );
          })}
        </div>
        <div className="imgs-box flexIt">
          <div className="cart-box flexIt">
            <img src={search} alt="" srcSet="" className="search" />
            <img src={cart} alt="" srcSet="" className="cart" />
          </div>
          <img src={profile} alt="" srcSet="" className="profile" />
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
