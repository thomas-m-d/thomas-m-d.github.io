import { createStore } from "redux";
import rootReducer from "./rootReducer";

export const initialState = {};

const Store = createStore(rootReducer);
export default Store;
