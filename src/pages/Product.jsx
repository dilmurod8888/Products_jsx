import React from "react";
import productsArr from "../service/api";
import { Link } from "react-router-dom";
const Product = () => {
  return (
    <div className="container">
      <div className="product">
        {productsArr.map((products) => (
          <Link
            to={`/product/${products.id}`}
            className="product_card"
            key={products.id}
          >
            <img src={products.img} alt="" />
            <h2>{products.title}</h2>
            <p>{products.text}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Product;
