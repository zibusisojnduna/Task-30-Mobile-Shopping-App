import {
    ADD_SHOPPING_LIST,
    DELETE_SHOPPING_LIST,
    ADD_ITEM,
    DELETE_ITEM,
    EDIT_ITEM,
    TOGGLE_ITEM_PURCHASED,
  } from './actions';
  
  const initialState = {
    shoppingLists: [],
  };
  
  const shoppingListReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_SHOPPING_LIST:
        return {
          ...state,
          shoppingLists: [
            ...state.shoppingLists,
            { id: Date.now(), name: action.name, items: [] },
          ],
        };
      case DELETE_SHOPPING_LIST:
        return {
          ...state,
          shoppingLists: state.shoppingLists.filter(
            (list) => list.id !== action.id
          ),
        };
      case ADD_ITEM:
        return {
          ...state,
          shoppingLists: state.shoppingLists.map((list) =>
            list.id === action.listId
              ? { ...list, items: [...list.items, action.item] }
              : list
          ),
        };
      case DELETE_ITEM:
        return {
          ...state,
          shoppingLists: state.shoppingLists.map((list) =>
            list.id === action.listId
              ? {
                  ...list,
                  items: list.items.filter((item) => item.id !== action.itemId),
                }
              : list
          ),
        };
      case EDIT_ITEM:
        return {
          ...state,
          shoppingLists: state.shoppingLists.map((list) =>
            list.id === action.listId
              ? {
                  ...list,
                  items: list.items.map((item) =>
                    item.id === action.itemId
                      ? { ...item, ...action.updatedItem }
                      : item
                  ),
                }
              : list
          ),
        };
      case TOGGLE_ITEM_PURCHASED:
        return {
          ...state,
          shoppingLists: state.shoppingLists.map((list) =>
            list.id === action.listId
              ? {
                  ...list,
                  items: list.items.map((item) =>
                    item.id === action.itemId
                      ? { ...item, purchased: !item.purchased }
                      : item
                  ),
                }
              : list
          ),
        };
      default:
        return state;
    }
  };
  
  export default shoppingListReducer;
  