import { actionsTypes } from "../contains/productsType";

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

export const removeSelectedProducts = () => {
  return {
    type: actionsTypes.REMOVE_SELECTED_PRODUCTS,
  };
};
