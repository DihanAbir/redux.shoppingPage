import { actionsTypes } from "../contains/actionsTypes";

export const setProducts = (products) => {
  return {
    type: actionsTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProducts = (product) => {
  return {
    type: actionsTypes.SELECTED_PRODUCTS,
    payload: product,
  };
};