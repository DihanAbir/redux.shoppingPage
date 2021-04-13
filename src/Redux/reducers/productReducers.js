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

    case actionsTypes.REMOVE_SELECTED_PRODUCTS:
      return {};

    default:
      return state;
  }
};

// export const removeSelectedProducts = (state = {}, { type, payload }) => {
//   switch (type) {
//     case actionsTypes.REMOVE_SELECTED_PRODUCTS:
//       return {};

//     default:
//       return state;
//   }
// };
