import { combineReducers } from "redux";
import { productsReducers } from "./productReducers";

const reducers = combineReducers({
  allProducts: productsReducers,
});

export default reducers;
