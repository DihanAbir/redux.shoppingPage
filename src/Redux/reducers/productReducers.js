import { actionsTypes } from "../contains/productsType";

const initialState = {
  product: [
    {
      id: 1,
      title: "Dipes ",
      category: "programmer ",
    },
  ],
};

export const productsReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionsTypes.SET_PRODUCTS:
      return state;

    default:
      return state;
  }
};
