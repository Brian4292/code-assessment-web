import React from 'react'
import PropTypes from 'prop-types'

const CartItem = ({ price, title, children, quantity, addToCart, removeFromCart }) => (
  <div className="cart-item-content">
    <div className="flex">
      <div className="cart-item-image">
      <img src={`./assets/${title}.jpg`} alt={title} />
    </div>
    <div className="cart-item-des">
      <p className="product-item-title">{title}</p>
      <p className="product-item-price">${price}</p>
    </div>
    <div>
      {children}
    </div>
    </div>
    <div className="flex">
      <button onClick={removeFromCart}>-</button>
      <p className="product-item-inventory">{quantity > 0 ? `${quantity} In Cart` : 'Out of Stock'}</p>
      <button onClick={addToCart}>+</button>
      </div>
  </div>
)

CartItem.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default CartItem
