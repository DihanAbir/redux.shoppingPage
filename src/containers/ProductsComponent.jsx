import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProductsComponent({ product }) {
  const products = useSelector((state) => state.allProducts.products);
  // const { category, description, image, id, price, title } = products;

  const renderList = products.map((product) => {
    const { category, description, image, id, price, title } = product;

    return (
      <div key={id}>
        <Link to={`/product/${id}`}>
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
        </Link>
      </div>
    );
  });

  return (
    // <Link to="/product">
    // <h4>products componnents </h4>
    //   <div
    //     style={{
    //       cursor: "pointer",
    //       borderRadius: "20px",
    //       border: "1px solid salmon",
    //       padding: "50px",
    //       margin: "50px",
    //     }}
    //   >
    //     <h1>{title}</h1>
    //     <h2 style={{ color: "purple" }}>{category}</h2>
    //     <p style={{ color: "grey" }}>{description}</p>
    //     <b>{price}</b>
    //     <br />
    //     <img style={{ width: "300px" }} src={image} alt="" />
    //   </div>
    // </Link>
    <>{renderList} </>
  );
}

export default ProductsComponent;
