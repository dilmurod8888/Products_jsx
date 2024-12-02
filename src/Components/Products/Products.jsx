import React from "react";
import { getProducts } from "../../service/api";
import Paginate from "../Paginate";
import { useSelector } from "react-redux";
import Skleton from "./Skleton";
import { Link } from "react-router-dom";
import { IoMdHeart } from "react-icons/io";

const Products = () => {
  const page = useSelector((state) => state.products.page);
  const { data, isError, isLoading, error } = getProducts(page * 9);
  let skleton = [...new Array(9)].map((_, i) => {
    return (
      <div className="products_card" key={i}>
        <Skleton />
      </div>
    );
  });
  return (
    <>
      <div className="container">
        <div className="products">
          {data
            ? data.products.map((product) => (
                <div className="products_card" key={product.id}>
                  <Link to={`/${product.id}`}>
                    <img src={product.thumbnail} alt="" />
                    <p className="products_card_category">{product.category}</p>
                  <h2>{product.title}</h2>
                  <p className="products_price">Price: {product.price}$</p>
                  </Link>
                  <button className="product_like">
                  <IoMdHeart  className='product_like_icon'/>
                  </button>
                </div>
              ))
            : skleton}
        </div>
        {data ? <Paginate total={data.total} /> : " "}
      </div>
    </>
  );
};

export default Products;
