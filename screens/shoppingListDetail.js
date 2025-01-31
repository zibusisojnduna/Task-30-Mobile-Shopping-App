import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, CheckBox} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem, editItem } from "react";

function ShoppingListDetail({ route }) {
    const { listId } = route.params
    const dispatch = useDispatch()
    const shoppingList = useSelector((state) => {
        state.shoppingLists.find((list) => list.id === listId)
    })

    const [newItemName, setNewItemName] =useState("")
    const [newItemQuantity, setNewItemQuantity] = useState("")

    const handleAddItem = () => {
        dispatch(addItem(listId, {name: newItemName, quantity: newItemQuantity, purchased: false}))
        setNewItemName("")
        setNewItemQuantity("")
    }

    const handleTogglePurchased = (itemId) => {
        dispatch(toggleItemPurchased(listId, itemId))
    }

    const handleDeleteItem = (itemId) => {
        dispatch(deleteItem(listId, itemId))
    }

    return(
        <View>
            <TextInput
                value={newItemName}
                onChangeText={setNewItemName}
                placeholder="Item Name"
            />
            <TextInput
                value={newItemQuantity}
                onChangeText={setNewItemQuantity}
                placeholder="Quantity"
            />
            <Button title="Add Item" onPress={handleAddItem} />

            <FlatList
            data={shoppingList.items}
            renderItem={({ item }) => (
                <View>
                    <Text>{item.name} - {item.quantity}</Text>
                    <Button
                        title={item.purchased ? "Mark as Unpurchased" : "Mark as Purchased"}
                        onPress={() => handleTogglePurchased(item.id)}
                        />
                        <Button title="Delete" onPress={() => handleDeleteItem(item.id)} />
                </View>
            )}
            keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
} 


export default ShoppingListDetail