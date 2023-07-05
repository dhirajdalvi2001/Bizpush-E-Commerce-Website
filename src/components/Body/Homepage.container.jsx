import React from "react";
import "./Homepage.styles.css";
import shoes from "./shoes.svg";
import lines from "./lines.svg";
import arrow from "./arrow.svg";
import star from "./star.svg";
import shadow from "./shadow.svg";
import Products from "./Products.component";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div id="homepage">
      <div className="top">
        <div className="text-container">
          <h1 className="heading1 purchase">Purchase your shoes now.</h1>
          <p className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor morbi
            velit turpis et dolor sit morbi odio id. Aliquam ultricies tortor
            ac.
          </p>
          <Link to="/shop" className="shop-box">
            <button className="shop">Shop Now</button>
          </Link>
          <img src={arrow} alt="" srcSet="" className="arrow" />
          <div className="rating">
            <div className="rate">
              <div>4.3</div>
              <div className="flexIt">
                <img src={star} alt="" srcSet="" className="star" />
                <img src={star} alt="" srcSet="" className="star" />
                <img src={star} alt="" srcSet="" className="star" />
                <img src={star} alt="" srcSet="" className="star" />
                <img src={star} alt="" srcSet="" className="star" />
              </div>
            </div>
            <p className="reviews">(11.6k Total Review)</p>
          </div>
        </div>
        <div className="img-container">
          <img src={shoes} alt="" srcSet="" className="shoes" />
          <img src={lines} alt="" srcSet="" className="lines" />
          <img src={shadow} alt="" srcSet="" className="shadow" />
        </div>
      </div>
      <Products />
    </div>
  );
}

export default Homepage;
