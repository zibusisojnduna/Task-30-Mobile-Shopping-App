import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ShoppingListScreen from "./screens/shoppingListScreen";
import ShoppingListDetail from "./screens/shoppingListDetail";

const Stack = createStackNavigator()

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ShoppingLists">
                <Stack.Screen name="ShoppingLists" component={ShoppingListScreen} />
                <Stack.Screen name="ShoppingListDetail" component={ShoppingListDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App