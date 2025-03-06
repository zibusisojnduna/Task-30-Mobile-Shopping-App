import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, CheckBox } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem, toggleItemPurchased } from '../redux/actions';

const ShoppingListScreen = ({ route, navigation }) => {
  const { listId } = route.params;
  const [newItemName, setNewItemName] = useState('');
  const [newItemQuantity, setNewItemQuantity] = useState('');

  const dispatch = useDispatch();
  const shoppingList = useSelector(state => state.shoppingLists.find(list => list.id === listId));

  const handleAddItem = () => {
    if (newItemName.trim() && newItemQuantity.trim()) {
      const newItem = {
        id: Date.now(),
        name: newItemName,
        quantity: newItemQuantity,
        purchased: false,
      };
      dispatch(addItem(listId, newItem));
      setNewItemName('');
      setNewItemQuantity('');
    }
  };

  const handleDeleteItem = (itemId) => {
    dispatch(deleteItem(listId, itemId));
  };

  const handleTogglePurchased = (itemId) => {
    dispatch(toggleItemPurchased(listId, itemId));
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Shopping List: {shoppingList?.name}</Text>

      <TextInput
        placeholder="Item Name"
        value={newItemName}
        onChangeText={setNewItemName}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingLeft: 10 }}
      />
      <TextInput
        placeholder="Quantity"
        value={newItemQuantity}
        onChangeText={setNewItemQuantity}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingLeft: 10 }}
      />
      <Button title="Add Item" onPress={handleAddItem} />

      <FlatList
        data={shoppingList?.items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 10, padding: 10, borderWidth: 1 }}>
            <Text>{item.name} - {item.quantity}</Text>
            <CheckBox
              value={item.purchased}
              onValueChange={() => handleTogglePurchased(item.id)}
            />
            <TouchableOpacity
              onPress={() => handleDeleteItem(item.id)}
              style={{ paddingVertical: 5, backgroundColor: '#ff3333', borderRadius: 5, alignItems: 'center', marginTop: 5 }}
            >
              <Text style={{ color: 'white' }}>Delete Item</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default ShoppingListScreen;
