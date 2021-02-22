import { ADD_ITEM, REMOVE_ITEM } from '../actions/cart'

const initialState = {
  items: []
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, items: [...state.items, action.item] }
    case REMOVE_ITEM:
      const item = state.items.find((item) => item.id === action.id)
      if (item) {
        const updatedItems = state.items.filter((item) => item.id !== action.id)
        return { ...state, items: updatedItems }
      }
      return state
    default:
      return state
  }
}

export default cartReducer
