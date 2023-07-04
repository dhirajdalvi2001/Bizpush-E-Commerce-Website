import React from "react";
import circle from "./circle.svg";
import star from "./star.svg";
import "./Product.styles.css";

function Product(props) {
  return (
    <div id="product">
      <div className="top flexIt">
        <img src={circle} alt="" srcSet="" className="circle" />
        <img src={props.img} alt="" srcSet="" className="img" />
      </div>
      <div className="bottom">
        <div className="review">
          <img src={star} alt="" srcSet="" />
          <p>(11.6k Reviews)</p>
        </div>
        <div className="name">
          <h4>{props.name}</h4>
        </div>
        <div className="price-box">
          <div className="price">{props.price}</div>
          <div className="original-price">{props.originalPrice} Sold Out</div>
          <button>Buy Now</button>
        </div>
      </div>
      {props.name}
    </div>
  );
}

export default Product;
