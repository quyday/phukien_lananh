import React from 'react';
import './ProductDetailModal.css';

function ProductDetailModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  return (
    <div className="product-detail-modal-overlay">
      <div className="product-detail-modal">
        <button className="close-modal-btn" onClick={onClose}>×</button>
        <div className="modal-content">
          <img src={product.image} alt={product.name} className="modal-product-image" />
          <h2 className="modal-product-name">{product.name}</h2>
          <div className="modal-product-price">{product.price.toLocaleString()}đ</div>
          <button className="modal-add-to-cart" onClick={() => onAddToCart(product)}>
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailModal; 