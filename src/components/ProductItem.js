import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

// const ProductItem = ({ product, onAddToCartClicked }) => (
//   <div className="flex product-item-container">
//     <div className="product-item-image">
//     <img src="./assets/p1.jpg" alt={product.productTitle}/>
//       </div>
//     <Product
//       title={product.productTitle}
//       price={product.price.value}
//       inventory={product.inventory} />
//     <button
//       onClick={onAddToCartClicked}
//       disabled={product.inventory > 0 ? '' : 'disabled'}>
//       {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
//     </button>
//   </div>
// )

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div className="flex product-item-container">
    <div className="product-item-image">
      <img src="./assets/p1.jpg" alt={product.productTitle} />
    </div>
    <Product
      title={product.productTitle}
      price={product.price.value}
      inventory={product.inventory} >
      <div
        className={`product-item-button button-cta flex ${product.inventory > 0 ? 'active' : 'disabled'}`}
        onClick={onAddToCartClicked}>
       <div>{product.inventory > 0 ? 'Add to cart' : 'Sold Out'}</div>
      </div>
      </Product>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    productTitle: PropTypes.string.isRequired,
    price: PropTypes.shape({
      value: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired
    }),
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
