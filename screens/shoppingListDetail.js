import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, CheckBox} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem, editItem } from "react";

function ShoppingListDetail({ route }) {
    const { listId } = route.params
    const shoppingList = useSelector((state) => 
        state.shoppingList.find()
    )
} 




function ShoppingListDetail() {
    return(
        <></>
    )
}

export default ShoppingListDetail