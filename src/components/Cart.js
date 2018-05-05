import React from 'react'
import PropTypes from 'prop-types'
import CartItem from './CartItem'
import EmptyCart from './EmptyCart'

const Cart = ({ products, total, onCheckoutClicked, closeModal, addToCart, removeFromCart, deleteFromCart }) => {
  const hasProducts = products.length > 0
  const taxes = (total * .089).toFixed(2)
  console.log(products,'pro')
  const nodes = hasProducts ? (
    products.map(product =>product.quantity > 0 ?
      <CartItem
        title={product.productTitle}
        price={product.price.value}
        quantity={product.quantity}
        key={product.id}
        removeFromCart={() => removeFromCart(product.id)}
        addToCart={() => addToCart(product.id)}
        deleteFromCart={() => deleteFromCart(product.id, product.quantity)}
      /> : null
    )
  ) : (
      <EmptyCart/>
    )

  return (
    <div className="cart flex">
      <p className="cart-close" onClick={closeModal}>X</p>
      <h1 className="cart-title">Your Cart</h1>
      <hr className="style-two" />
      <div className="container hundo">{nodes}</div>
      <hr className="style-two" />
      {total > 0 ? 
        <div className="totals container" >
          <p>Subtotal: &#36;{total}</p>
          <p>Tax: &#36;{taxes /* make a redux action */}</p>
          <hr className="style-two" />
          <p>Total: &#36;{Number(total) + Number(taxes)}</p>
          </div>
      : null}
      <div className={`button-cta checkout flex ${hasProducts ? 'active':'disabled'}`} onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        <p>Checkout</p>
      </div>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
