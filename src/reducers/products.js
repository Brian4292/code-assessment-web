import { combineReducers } from 'redux'
import { RECEIVE_PRODUCTS, ADD_TO_CART,REMOVE_FROM_CART,DELETE_FROM_CART } from '../constants/ActionTypes'


const products = (product, action,state) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...product,
        inventory: product.inventory - 1
      }
    case REMOVE_FROM_CART:
      return {
        ...product,
        inventory: product.inventory + 1
      }
      case DELETE_FROM_CART:
      console.log(action,'sss')
      return {
        ...product,
        inventory: product.inventory + action.inventory // Add whats in the cart
      }
    default:
      return product
  }
}

const byId = (state = {}, action) => {
  console.log(state,'what is tis')
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          obj[product.id] = product
          return obj
        }, {})
      }
    default:
      const { productId } = action
      if (productId) {
        return {
          ...state,
          [productId]: products(state[productId], action,state)
        }
      }
      return state
  }
}

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products.map(product => product.id)
    default:
      return state
  }
}

export default combineReducers({
  byId,
  visibleIds
})

export const getProduct = (state, id) =>
  state.byId[id]

export const getVisibleProducts = state =>
  state.visibleIds.map(id => getProduct(state, id))
