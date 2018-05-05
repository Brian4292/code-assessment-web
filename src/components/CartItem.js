import React from 'react'
import PropTypes from 'prop-types'

const CartItem = ({ price, title, children, quantity, addToCart, removeFromCart, deleteFromCart }) => (
  <div className="cart-item-content">
    <div className="flex">
      <div className="cart-item-image">
      <img src={`./assets/${title}.jpg`} alt={title} />
    </div>
    <div className="cart-item-des">
      <p className="product-item-title">{title}</p>
      <p className="product-item-price">${price}</p>
      <p onClick={deleteFromCart} className="cart-delete">Remove</p>
    </div>
    <div>
      {children}
    </div>
    </div>
    <div className="flex cart-update">
      <button className="cart-remove" onClick={removeFromCart}>-</button>
      <p className="cart-item-inventory">{quantity > 0 ? ` ${quantity} ` : 'Out of Stock'}</p>
      <button className="cart-add" onClick={addToCart}>+</button>
      </div>
  </div>
)

CartItem.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default CartItem
