import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCartProducts } from '../reducers'
import { openModal } from '../actions'

const Header = ({ products, openModal}) => (
  <div className="flex container header">
    <h2>Acme Store</h2>
    <div onClick={openModal} className="cart-img"><img src="./assets/cart.svg" /> {products.length ? 'View Cart': 'Your cart is empty'}</div>
  </div>
)

const mapStateToProps = state => ({
  products: getCartProducts(state),
})

export default connect(
  mapStateToProps,
  { openModal }
)(Header)