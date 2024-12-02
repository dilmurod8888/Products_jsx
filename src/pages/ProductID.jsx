import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsById } from "../service/api";
import { MdAddCircle } from "react-icons/md";
import { GrSubtractCircle } from "react-icons/gr";
import { TbShoppingCartPlus } from "react-icons/tb";
import CardID_Skleton from "./CardID_Skleton";

const ProductID = () => {
  const { id } = useParams();
  const [amount, setAmount] = useState(1);

  const add = () => {
    setAmount((prevAmount) => prevAmount + 1);
  };
  const minus = () => {
    setAmount((prevAmount) => (
      prevAmount > 0 ? prevAmount - 1 : 0));
  };
  const { data, isLoading, error, isFetching, refetch } = getProductsById(id);
  console.log(data);

  let card_id_skleton = [...new Array()].map((_, i) => {
    return (
    <>  
    
      <div className="card_id_skleton" key={i}>
        <CardID_Skleton />
      </div>
      </>
    );
  });
  return (
    <div className="container">
      <div className="productid">
        {!isLoading ? (
          <>
            <h3 className="productid_title">{data?.title}</h3>

            <div className="productid_box">
              <div className="productid_left">
                <img
                  className="productid_imgs"
                  src={data?.thumbnail}
                  alt="img"
                />
              </div>
              <div className="productid_right">
                <p className="productid_category">
                  
                  {data?.category}
                </p>
                <p className="productid_right_text">
                 
                  {data?.description}
                </p>
                <p className="productid_right_price">
                  
                  {data?.price}$
                </p>
                <div className="productid_bottom">
                  <div className="productid_bottom_btns">
                    <div className="productid_bottom_btns_div">
                      <button className="productid_bottom_btn" onClick={minus}>
                        {<GrSubtractCircle />}
                      </button>
                      <p className="productid_amount">{amount}</p>
                      <button className="productid_bottom_btn" onClick={add}>
                        {<MdAddCircle />}
                      </button>
                    </div>
                    <button className="productid_bottom_btn_buy">
                      <div className="productid_bottom_btn_icon">
                        {<TbShoppingCartPlus />}
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="card_id_skleton">
            <CardID_Skleton />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductID;
