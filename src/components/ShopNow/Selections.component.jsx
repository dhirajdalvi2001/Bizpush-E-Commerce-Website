import React, { useEffect, useState } from "react";
import tick from "./svgs/tick.svg";
import filters from "./svgs/filters.svg";
import search from "./svgs/search.svg";
import edit from "./svgs/edit.svg";
import content from "./svgs/content.svg";
import grid from "./svgs/grid.svg";
import deleteIcon from "./svgs/delete.svg";
import "./Selections.styles.css";
import { ProductsData } from "./ProductsData";
import CheckBox from "./CheckBox.component";
import SingleProduct from "./SingleProduct.component";

function Selections() {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);
  const [display, setDisplay] = useState("Grid");

  useEffect(() => {
    setList(ProductsData);
  }, [list]);

  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(list.map((li) => li.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };

  const products = list.map(({ id, name, img, title, price }) => {
    return (
      <div key={id}>
        <SingleProduct
          key={id}
          type="checkbox"
          name={name}
          id={id}
          title={title}
          img={img}
          price={price}
          handleClick={handleClick}
          isChecked={isCheck.includes(id)}
          display={display}
        />
      </div>
    );
  });

  return (
    <div className="mid-bottom">
      <div id="selections">
        <div className="select-all flexIt">
          <CheckBox
            type="checkbox"
            name="selectAll"
            id="selectAll"
            handleClick={handleSelectAll}
            isChecked={isCheckAll}
          />
          <img src={tick} alt="" srcSet="" className="tick" />
          <h4 className="heading4">Select All</h4>
        </div>
        <ul className="filters flexIt">
          <li className="filter-option flexIt">
            <img src={filters} alt="" srcSet="" className="icon" />
            <div className="hide">Filters</div>
          </li>

          <li className="filter-option flexIt">
            <img src={search} alt="" srcSet="" className="icon" />
            <div className="hide">Search</div>
          </li>

          <li className="filter-option flexIt">
            <img src={edit} alt="" srcSet="" className="icon" />
            <div className="hide">Edit</div>
          </li>

          <li className="filter-option flexIt">
            <img src={deleteIcon} alt="" srcSet="" className="icon" />
            <div className="hide">Delete</div>
          </li>
        </ul>
        <div className="display">
          <div
            className="display-content"
            onClick={(e) => {
              setDisplay("Content");
              console.log(display);
            }}
          >
            <img src={content} alt="" srcSet="" />
          </div>

          <div
            className="display-grid"
            onClick={(e) => {
              setDisplay("Grid");
              console.log(display);
            }}
          >
            <img src={grid} alt="" srcSet="" />
          </div>
        </div>
      </div>
      <div id={display === "Grid" ? "products" : "content"}>{products}</div>
    </div>
  );
}

export default Selections;
