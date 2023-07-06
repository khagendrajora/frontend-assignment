import { combineReducers, legacy_createStore } from "redux";
import cartReducer from "./redux/reducers/cartReducer";


const reducer = combineReducers({
    cart: cartReducer,

})

const store = legacy_createStore(reducer)

export default store
