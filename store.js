import { configureStore } from "@reduxjs/toolkit";
import shoppingListsReducer from "./reducer";

export const store = configureStore({
    reducer: shoppingListsReducer
})