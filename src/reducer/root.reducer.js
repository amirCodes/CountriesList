import { combineReducers } from 'redux';
import products from "../reducer/productReducer";

const appReducer = combineReducers({
    products,

});

const rootReducer = (state, action) => {
    return appReducer(state, action)
};
export default rootReducer;