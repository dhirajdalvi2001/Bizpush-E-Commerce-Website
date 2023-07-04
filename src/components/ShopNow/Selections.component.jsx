import React from "react";
import "./Selections.styles.css";

function Selections() {
  return (
    <div id="selections ">
      <div className="select-all">
        <input
          type="checkbox"
          name="select-all"
          id=""
          className="select-all-input"
        />
        <h4 className="heading4">Select All</h4>
      </div>
      <ul className="filters">
        <li className="filter-option">Filtres</li>
        <li className="filter-option">Search</li>
        <li className="filter-option">Edit</li>
        <li className="filter-option">Delete</li>
      </ul>
    </div>
  );
}

export default Selections;
