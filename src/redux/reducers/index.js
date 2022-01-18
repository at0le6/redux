import { combineReducers } from "redux";
import { productReducer } from "./product.Reduser";

const reducers = combineReducers({
    allProducts: productReducer,
})
export default reducers