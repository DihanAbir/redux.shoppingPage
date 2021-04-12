import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts } from "../Redux/actions/productsAction";

function ProductsDetails() {
  const product = useSelector((state) => state.product);
  const { category, description, image, id, price, title } = product;

  const { productID } = useParams();
  const dispatch = useDispatch();

  const fetchHandlerDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productID}`)
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(selectedProducts(response.data));
  };

  // useEffect used here when ever productID get changes
  useEffect(() => {
    if (productID && productID !== "") fetchHandlerDetails();
  }, [productID]);

  return (
    <div>
      <p>products details page is here</p>
      <div key={id}>
        <div
          style={{
            cursor: "pointer",
            borderRadius: "20px",
            border: "1px solid salmon",
            padding: "50px",
            margin: "50px",
          }}
        >
          <h1>{title}</h1>
          <h2 style={{ color: "purple" }}>{category}</h2>
          <p style={{ color: "grey" }}>{description}</p>
          <b>{price}</b>
          <br />
          <img style={{ width: "300px" }} src={image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ProductsDetails;
