import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ShoppingListsScreen from '../screens/shoppingListsScreen';
import ShoppingListScreen from '../screens/shoppingListScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="ShoppingLists">
      <Stack.Screen name="ShoppingLists" component={ShoppingListsScreen} />
      <Stack.Screen name="ShoppingList" component={ShoppingListScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
