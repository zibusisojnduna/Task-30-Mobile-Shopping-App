import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import ShoppingListScreen from "./screens/shoppingListScreen";
import { PersistGate } from "redux-persist/integration/react";

const App =() => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={store._persistor}>
           <ShoppingListScreen /> 
        </PersistGate>   
    </Provider>
)

export default App