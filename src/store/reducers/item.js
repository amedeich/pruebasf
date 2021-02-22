import { SET_PRODUCTS } from '../actions/items'

const initialState = {
  products: []
}

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.products }
    default:
      return state
  }
}

export default itemReducer
