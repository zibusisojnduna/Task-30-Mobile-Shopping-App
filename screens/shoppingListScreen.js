import React, { useState } from "react";
import { View, TextInput, Button, FlatList, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addList } from "../actions";






function ShoppingListScreen({ navigation }) {
    const [newListName, setNewListName] = useState("")
    const shoppingLists = useSelector((state) => state.shoppingLists)
    const dispatch = useDispatch()

    function handleAddList() {
        if (newListName) {
            dispatch(addList(newListName))
            setNewListName("")
        }
    }

    return(
        <View>
            <TextInput
                value={newListName}
                onChangeText={setNewListName}
                placeholder="Enter list name"
            />
            <Button title="Add List" onPress={handleAddList} />
            <FlatList
        data={shoppingLists}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text onPress={() => navigation.navigate('ShoppingListDetail', { listId: item.id })}>
              {item.name}
            </Text>
          </View>
        )}
        />
        </View>
    )
}

export default ShoppingListScreen