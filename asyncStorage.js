import AsyncStorage from "@react-native-async-storage/async-storage";

const loadStateFromStorage = async () => {
    const state = await AsyncStorage.getItem("shoppingLists")
    return state ? JSON.parse(state) : []
}


const saveStateToStorage = async (state) => {
    await AsyncStorage.setItem("shoppingLists", JSON.stringify(state))
}

export { loadStateFromStorage, saveStateToStorage }