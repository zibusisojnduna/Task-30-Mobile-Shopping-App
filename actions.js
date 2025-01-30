export const ADD_LIST = "ADD_LIST";
export const DELETE_LIST = "DELETE_LIST";
export const ADD_ITEM = "ADD_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";

export const addList = (listName) => ({
    type: ADD_LIST,
    payload: listName
})

export const deleteList = (listId) => ({
    type: DELETE_LIST,
    payload: listId
})

export const addItem = (listId, item) => ({
    type: ADD_ITEM,
    payload: { listId, item},
})

export const editItem = (listId, itemId, updatedItem) => ({
    type: EDIT_ITEM,
    payload: { listId, itemId, updatedItem},
})

export const deleteItem = (listId, itemId) => ({
    type: DELETE_ITEM,
    payload: { listId, itemId},
})