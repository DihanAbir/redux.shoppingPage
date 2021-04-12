import React, { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import ProductsComponent from "./ProductsComponent";

function Products() {
  const products = useSelector((state) => state);
  console.log(products);

  const fetchHandler = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });
    console.log(response.data);
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  return (
    <div>
      <h1>Products listing </h1>
      <ProductsComponent />
    </div>
  );
}

export default Products;
