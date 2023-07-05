import React, { useState } from "react";
import bag from "./svgs/bag.svg";
import plus from "./svgs/plus.svg";
import "./MiddleContainer.styles.css";
import Products from "./Products.component";

function MiddleContainer() {
  const [clicked, setClicked] = useState("Active");
  return (
    <div id="middle-container">
      <div className="middle-box">
        <div className="mid-top">
          <div className="mid-top-products flexIt">
            <div className="bag-img flexIt">
              <img src={bag} alt="" srcSet="" className="bag" />
            </div>
            <h4 className="heading4">Products</h4>
          </div>
          <ul className="mid-top-navbar flexIt">
            <li
              className={
                clicked === "Active" ? "active mid-nav-item" : "mid-nav-item "
              }
              name="Active"
              id="Active"
              onClick={(e) => {
                setClicked(e.target.id);
              }}
            >
              Active
            </li>
            <li
              className={
                clicked === "Draft" ? "active mid-nav-item" : "mid-nav-item"
              }
              name="Draft"
              id="Draft"
              onClick={(e) => {
                setClicked(e.target.id);
              }}
            >
              Draft
            </li>
            <li
              className={
                clicked === "Assembly" ? "active mid-nav-item" : "mid-nav-item"
              }
              name="Assembly"
              id="Assembly"
              onClick={(e) => {
                setClicked(e.target.id);
              }}
            >
              Assembly
            </li>
          </ul>
          <button className="add-button flexIt">
            <img src={plus} alt="" srcSet="" />
            Add Product
          </button>
        </div>
        <Products />
      </div>
    </div>
  );
}

export default MiddleContainer;
