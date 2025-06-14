import React from 'react';
import './CartPanel.css';

function CartPanel({ isOpen, cart, onClose, onRemove, onCheckout }) {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  if (!isOpen) return null;

  return (
    <div className="cart-panel">
      <div className="cart-panel-header">
        <span>Giỏ hàng</span>
        <button className="cart-panel-close" onClick={onClose}>×</button>
      </div>
      <div className="cart-panel-body">
        {cart.length === 0 ? (
          <div className="cart-empty">Chưa có sản phẩm nào trong giỏ.</div>
        ) : (
          <>
            {cart.map((item, idx) => (
              <div className="cart-item" key={idx}>
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">{item.price.toLocaleString()}đ</div>
                </div>
                <button className="cart-item-remove" onClick={() => onRemove(idx)}>X</button>
              </div>
            ))}
            <div className="cart-total">
              <span>Tổng cộng:</span>
              <span>{calculateTotal().toLocaleString()}đ</span>
            </div>
            <button 
              className="checkout-button"
              onClick={onCheckout}
              disabled={cart.length === 0}
            >
              Thanh Toán
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default CartPanel; 