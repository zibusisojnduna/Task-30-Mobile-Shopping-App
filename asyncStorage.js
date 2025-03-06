import AsyncStorage from '@react-native-async-storage/async-storage';

const saveShoppingListsToStorage = async (shoppingLists) => {
  try {
    await AsyncStorage.setItem('@shopping_lists', JSON.stringify(shoppingLists));
  } catch (e) {
    console.error('Error saving data:', e);
  }
};

export { saveShoppingListsToStorage, loadShoppingListsFromStorage };

const loadShoppingListsFromStorage = async () => {
  try {
    const storedData = await AsyncStorage.getItem('@shopping_lists');
    return storedData ? JSON.parse(storedData) : [];
  } catch (e) {
    console.error('Error loading data:', e);
    return [];
  }
};

export default AsyncStorage;
