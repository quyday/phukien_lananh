import React, { useEffect, useState } from 'react';
import './ProductPage.css';
import { revealOnScroll, addHoverEffect, showLoading, hideLoading } from '../utils/animations';
import ProductDetailModal from '../components/ProductDetailModal';

// Helper function to format price with dots
const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

function ProductPage({ products, searchTerm = '', onAddToCart }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    showLoading();
    setTimeout(() => {
      hideLoading();
      revealOnScroll();
      addHoverEffect();
    }, 500);
  }, [products]);

  const filteredProducts = products.filter(product =>
    !searchTerm || (product.name && product.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <>
      <div className="product-grid">
        {filteredProducts.length === 0 ? (
          <div style={{gridColumn:'1/-1',textAlign:'center',color:'#e6749c',fontWeight:600,fontSize:20}}>
            Không tìm thấy sản phẩm phù hợp.
          </div>
        ) : filteredProducts.map((product, index) => (
          <div key={index} className="product-item" onClick={() => setSelectedProduct(product)} style={{cursor:'pointer'}}>
            <div className="price-tag">{formatPrice(product.price)}đ</div>
            <img src={product.image} alt={product.name || `Product ${index + 1}`} />
            <div className="product-actions">
              <span className="add-to-cart" onClick={e => { e.stopPropagation(); onAddToCart && onAddToCart(product); }}>
                Thêm giỏ hàng
              </span>
              <span className="buy-now">Mua ngay</span>
            </div>
            <div style={{textAlign:'center',marginTop:8,fontWeight:500}}>{product.name}</div>
          </div>
        ))}
      </div>
      <div className="star-rating">
        <span className="star">★</span>
        <span className="star">★</span>
        <span className="star">★</span>
        <span className="star">★</span>
        <span className="star">★</span>
      </div>
      <ProductDetailModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        onAddToCart={onAddToCart} 
      />
    </>
  );
}

export default ProductPage; 