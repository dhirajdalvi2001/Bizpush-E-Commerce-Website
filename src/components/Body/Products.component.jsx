import React from "react";
import "./Products.styles.css";
import Product from "./Product.component";
import img1 from "./product1.svg";
import img2 from "./product2.svg";
import img3 from "./product3.svg";
import img4 from "./product4.svg";

function Products() {
  let productsList = [
    {
      id: 1,
      name: "Nike Running Shoe",
      price: "$100",
      originalPrice: "500",
      img: img1,
    },
    {
      id: 2,
      name: "Nike Shoe Airmax",
      price: "$115",
      originalPrice: "100",
      img: img2,
    },
    {
      id: 3,
      name: "Nike Running Shoe",
      price: "$50",
      originalPrice: "1500",
      img: img3,
    },
    {
      id: 4,
      name: "Nike Running Shoe",
      price: "$220",
      originalPrice: "210",
      img: img4,
    },
  ];
  return (
    <div id="products">
      <div className="heading1">Popular Products</div>
      <div className="products-list flexIt">
        {productsList.map((e) => {
          return (
            <Product
              name={e.name}
              id={e.id}
              price={e.price}
              originalPrice={e.originalPrice}
              img={e.img}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
