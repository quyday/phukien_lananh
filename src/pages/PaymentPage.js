import React, { useState, useEffect } from 'react';
import '../styles/PaymentPage.css';

const PaymentPage = ({ cartItems, onBack }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    paymentMethod: 'cod'
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!cartItems.length) {
      onBack();
    }
  }, [cartItems, onBack]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Vui lòng nhập họ tên';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Vui lòng nhập email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email không hợp lệ';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Vui lòng nhập số điện thoại';
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = 'Số điện thoại không hợp lệ';
    }
    if (!formData.address.trim()) {
      newErrors.address = 'Vui lòng nhập địa chỉ';
    }
    if (!formData.city.trim()) {
      newErrors.city = 'Vui lòng nhập thành phố';
    }
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      // Xử lý logic thanh toán ở đây
      console.log('Order submitted:', { 
        ...formData, 
        items: cartItems, 
        total: calculateTotal()
      });
      // Sau khi xử lý thành công, chuyển về trang chủ
      onBack();
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="payment-container">
      <div className="payment-header">
        <button className="back-button" onClick={onBack}>← Quay lại</button>
        <h1>Thanh Toán</h1>
      </div>
      
      <div className="payment-content">
        <div className="order-summary">
          <h2>Tổng Quan Đơn Hàng</h2>
          {cartItems.map((item, index) => (
            <div key={index} className="order-item-detail">
              <img src={item.image} alt={item.name} className="order-item-img" />
              <div className="order-item-info">
                <div className="order-item-name">{item.name}</div>
                <div className="order-item-row">
                  <span>Số lượng: <b>{item.quantity || 1}</b></span>
                  <span>Đơn giá: <b>{item.price.toLocaleString()}đ</b></span>
                  <span>Thành tiền: <b>{(item.price * (item.quantity || 1)).toLocaleString()}đ</b></span>
                </div>
              </div>
            </div>
          ))}
          <div className="order-total">
            <h3>Tổng cộng: {calculateTotal().toLocaleString()}đ</h3>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="payment-form">
          <h2>Thông Tin Thanh Toán</h2>
          
          <div className="form-group">
            <label htmlFor="fullName">Họ và tên</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className={errors.fullName ? 'error' : ''}
            />
            {errors.fullName && <span className="error-message">{errors.fullName}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Số điện thoại</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={errors.phone ? 'error' : ''}
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="address">Địa chỉ</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className={errors.address ? 'error' : ''}
            />
            {errors.address && <span className="error-message">{errors.address}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="city">Thành phố</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className={errors.city ? 'error' : ''}
            />
            {errors.city && <span className="error-message">{errors.city}</span>}
          </div>

          <div className="form-group">
            <label>Phương thức thanh toán</label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleInputChange}
            >
              <option value="cod">Thanh toán khi nhận hàng (COD)</option>
              <option value="banking">Chuyển khoản ngân hàng</option>
              <option value="momo">Ví MoMo</option>
            </select>
          </div>

          <button type="submit" className="submit-button">
            Xác Nhận Đặt Hàng
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage; 