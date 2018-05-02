import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, inventory, title, children }) => (
  <div className="product-item-content">
    <div className="flex vertical">
      <p className="product-item-title">{title}</p>
      <p className="product-item-price">${price}</p>
    </div>
    <p className="product-item-inventory">{inventory > 0 ? `${inventory} Remaining` : 'Out of Stock'}</p>
    {children}
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default Product
