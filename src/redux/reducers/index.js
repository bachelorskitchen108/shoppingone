//Here Multiple Reducers into OneReducer as index.js with {combineReducers} from redux

import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./producrReducer";

const reducers = combineReducers({
    allproducts: productReducer,
    product: selectedProductReducer,
});

export default reducers;
