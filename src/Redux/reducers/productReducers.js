import { actionsTypes } from "../contains/productsType";

const initialState = {
  products: [],
};

export const productsReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionsTypes.SET_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case actionsTypes.SELECTED_PRODUCTS:
      return { ...state, ...payload };

    default:
      return state;
  }
};
