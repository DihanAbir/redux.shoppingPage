import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProductsComponent from "./ProductsComponent";
import { setProducts } from "../Redux/actions/productsAction";

function Products() {
  const products = useSelector((state) => state.allProducts.payload);
  const dispatch = useDispatch();
  // const allProducts = products.allProducts.payload;
  // console.log(allProducts);

  const fetchHandler = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });
    dispatch(setProducts(response.data));
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
