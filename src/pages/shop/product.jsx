import React from "react";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  return (
    <div className="product">
      <img src={productImage}></img>
      <div className="productDetails">
        <div className="description">
          <p>
            <b>{productName}</b>
          </p>
          <p>LKR : {price}</p>
        </div>
        <button className="addToCartBtn">Add To Cart</button>
      </div>
    </div>
  );
};
