import { combineReducers } from "redux";
import { productsReducers, selectedProductReducer } from "./productReducers";

const reducers = combineReducers({
  allProducts: productsReducers,
  product: selectedProductReducer,
});

export default reducers;
