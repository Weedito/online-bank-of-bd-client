import { applyMiddleware, createStore } from "redux";
import BalanceReducer from "../Reducers/Reducer";
import thunk from "redux-thunk";
const store = createStore(BalanceReducer, applyMiddleware(thunk))
export default store;