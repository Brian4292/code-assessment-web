import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkout, openModal, closeModal } from '../actions'
import { getTotal, getCartProducts } from '../reducers'
import Cart from '../components/Cart'
import Modal from 'react-modal';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};
Modal.setAppElement('#root')

const CartContainer = ({ products, total, checkout, modalIsOpen, openModal, closeModal }) => {
  return (
    <div>
      <button onClick={openModal}
      />
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
      >
        <Cart
          closeModal={closeModal}
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
  { checkout, openModal, closeModal }
)(CartContainer)

//isOpen={this.state.modalIsOpen}
  //  onAfterOpen={this.afterOpenModal}
    //onRequestClose={this.closeModal}