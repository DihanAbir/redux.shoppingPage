import React from "react";
import { useSelector } from "react-redux";

function ProductsComponent() {
  const products = useSelector((state) => state.allProducts.product);
  const { id, title } = products[0];

  return (
    <div>
      <h4>products componnents </h4>
      <div>
        <p>product id : {id}</p>
        <h5>product title : {title}</h5>
      </div>
    </div>
  );
}

export default ProductsComponent;
