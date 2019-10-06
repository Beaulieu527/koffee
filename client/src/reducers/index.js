import { combineReducers } from "redux";
import productsReducer from './productsReducer';
import cartReducer from './cartReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    user: usersReducer
});
 
export default rootReducer;
