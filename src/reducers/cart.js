import {
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE,
  REMOVE_FROM_CART
} from '../constants/ActionTypes'

const initialState = {
  addedIds: [],
  quantityById: {}
}

const addedIds = (state = initialState, action) => {
  const { addedIds, quantityById } = state
  switch (action.type) {
    case ADD_TO_CART:
      if (addedIds.indexOf(action.productId) !== -1) {
        return addedIds
      }
      return [...addedIds, action.productId]
    case REMOVE_FROM_CART:
      if (quantityById[action.productId] < 2){
      return addedIds.filter(el => action.productId !== el)
      }
      return addedIds
    default:
      return addedIds
  }
}


const quantityById = (state = initialState.quantityById, action) => {
  const { productId } = action
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state,
        [productId]: (state[productId] || 0) + 1
      }
    case REMOVE_FROM_CART:
      return {...state,
        [productId]: (state[productId] || 0) - 1
      }
    default:
      return state
  }
}

export const getQuantity = (state, productId) =>
  state.quantityById[productId] || 0

export const getAddedIds = state => state.addedIds

const cart = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState
    case CHECKOUT_FAILURE:
      return action.cart
    default:
      return {
        addedIds: addedIds(state, action),
        quantityById: quantityById(state.quantityById, action)
      }
  }
}

export default cart
