// reducers.js
import { ADD_LIST, DELETE_LIST, ADD_ITEM, EDIT_ITEM, DELETE_ITEM } from './actions';

const initialState = {
  shoppingLists: [],
};

const shoppingListsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST:
      return {
        ...state,
        shoppingLists: [
          ...state.shoppingLists,
          { id: Date.now(), name: action.payload, items: [] },
        ],
      };

    case DELETE_LIST:
      return {
        ...state,
        shoppingLists: state.shoppingLists.filter((list) => list.id !== action.payload),
      };

    case ADD_ITEM:
      return {
        ...state,
        shoppingLists: state.shoppingLists.map((list) =>
          list.id === action.payload.listId
            ? { ...list, items: [...list.items, { ...action.payload.item, id: Date.now() }] }
            : list
        ),
      };

    case EDIT_ITEM:
      return {
        ...state,
        shoppingLists: state.shoppingLists.map((list) =>
          list.id === action.payload.listId
            ? {
                ...list,
                items: list.items.map((item) =>
                  item.id === action.payload.itemId ? { ...item, ...action.payload.updatedItem } : item
                ),
              }
            : list
        ),
      };

    case DELETE_ITEM:
      return {
        ...state,
        shoppingLists: state.shoppingLists.map((list) =>
          list.id === action.payload.listId
            ? { ...list, items: list.items.filter((item) => item.id !== action.payload.itemId) }
            : list
        ),
      };

    default:
      return state;
  }
};

export default shoppingListsReducer;
