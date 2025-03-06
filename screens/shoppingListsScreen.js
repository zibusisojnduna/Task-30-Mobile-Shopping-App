import React, { useState } from 'react';
import { View, Text, FlatList, Button, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addShoppingList, deleteShoppingList } from '../redux/actions';

const ShoppingListsScreen = ({ navigation }) => {
  const [newListName, setNewListName] = useState('');
  const dispatch = useDispatch();
  const shoppingLists = useSelector(state => state.shoppingLists);

  const handleAddShoppingList = () => {
    if (newListName.trim()) {
      dispatch(addShoppingList(newListName));
      setNewListName('');
    }
  };

  const handleDeleteShoppingList = (id) => {
    dispatch(deleteShoppingList(id));
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Enter list name"
        value={newListName}
        onChangeText={setNewListName}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingLeft: 10 }}
      />
      <Button title="Add Shopping List" onPress={handleAddShoppingList} />

      <FlatList
        data={shoppingLists}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 10, padding: 10, borderWidth: 1 }}>
            <Text>{item.name}</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('ShoppingList', { listId: item.id })}
              style={{ marginVertical: 5, paddingVertical: 10, backgroundColor: '#0066cc', borderRadius: 5, alignItems: 'center' }}
            >
              <Text style={{ color: 'white' }}>View List</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleDeleteShoppingList(item.id)}
              style={{ paddingVertical: 5, backgroundColor: '#ff3333', borderRadius: 5, alignItems: 'center', marginTop: 5 }}
            >
              <Text style={{ color: 'white' }}>Delete List</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default ShoppingListsScreen;
