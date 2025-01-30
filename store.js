import { createStore } from "redux";
import shoppingListsReducer from "./reducer";

const store = createStore(shoppingListsReducer)

export default store
