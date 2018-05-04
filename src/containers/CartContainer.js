import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkout, openModal, closeModal, addToCart, removeFromCart } from '../actions'
import { getTotal, getCartProducts } from '../reducers'
import Cart from '../components/Cart'
import Modal from 'react-modal';

Modal.setAppElement('#root')

const CartContainer = ({ products, total, checkout, modalIsOpen, openModal, closeModal, addToCart, removeFromCart }) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        className="Modal"
      >
        <Cart
          closeModal={closeModal}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          products={products}
          total={total}
          onCheckoutClicked={() => checkout(products)} />
      </Modal>
    </div>
  )
}

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    productTitle: PropTypes.string.isRequired,
    price: PropTypes.shape({
      value: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired
    }),
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state),
  modalIsOpen: state.modal.modalIsOpen
})

export default connect(
  mapStateToProps,
  { checkout, openModal, closeModal, addToCart, removeFromCart }
)(CartContainer)

