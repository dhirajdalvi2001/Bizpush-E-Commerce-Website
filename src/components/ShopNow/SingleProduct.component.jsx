import React from "react";
import CheckBox from "./CheckBox.component";
import "./SingleProduct.styles.css";

const SingleProduct = ({
  id,
  isCheck,
  img,
  type,
  title,
  display,
  price,
  name,
  handleClick,
  isChecked,
}) => {
  return (
    <div id={display === "Grid" ? "grid-single" : "content-single"}>
      <CheckBox
        key={id}
        type={type}
        name={name}
        id={id}
        handleClick={handleClick}
        isChecked={isChecked}
      />
      <div
        className={
          display === "Grid"
            ? "grid product-details"
            : "content product-details"
        }
      >
        <img src={img} alt="" srcSet="" />
        <h3 className="product-title">{title}</h3>
        <button>{price}</button>
      </div>
    </div>
  );
};

export default SingleProduct;
