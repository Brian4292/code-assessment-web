import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products: products
})

export const getAllProducts = () => async dispatch => {
  try{
    const res = await fetch('http://tech.work.co/shopping-cart/products.json');
    const products = await res.json(); 
    dispatch(receiveProducts(products))
  }
  catch(error){
    console.error(error);
  }
}

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

const removeFromCartUnsafe = productId => ({
  type: types.REMOVE_FROM_CART,
  productId
})

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId))
  }
}

export const removeFromCart = productId => (dispatch, getState) => {
    dispatch(removeFromCartUnsafe(productId))
}

export const deleteFromCart = (productId,inventory) => (dispatch, getState) => {
  dispatch({type: types.DELETE_FROM_CART,productId,inventory})
}

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()

  dispatch({
    type: types.CHECKOUT_REQUEST
  })
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    })
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.CHECKOUT_FAILURE, cart })
  })
}

export const openModal = () => dispatch =>{
  dispatch({
    type: types.OPEN_MODAL
  })
}

export const closeModal = () => dispatch => {
  dispatch({
    type: types.CLOSE_MODAL
  })
}