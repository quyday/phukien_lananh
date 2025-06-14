import React, { useEffect } from 'react';
import './HomePage.css';
import { revealOnScroll, addHoverEffect } from '../utils/animations';
import BlogSection from '../components/BlogSection';
import Features from '../components/Features';

function HomePage({ onNavigate }) {
  useEffect(() => {
    revealOnScroll();
    addHoverEffect();
  }, []);

  const handleBuyNow = () => {
    if (onNavigate) onNavigate('PhuKienToc');
  };

  const handleReadMore = (category) => {
    if (onNavigate) {
      if (category === 'Phụ Kiện Tóc') onNavigate('PhuKienToc');
      else if (category === 'Túi & Ví') onNavigate('TuiVi');
      else if (category === 'Mắt Kính') onNavigate('MatKinh');
    }
  };

  return (
    <div className="home-content">
      {/* Row 1 */}
      <div className="home-row">
        <div className="home-image">
          <img src="/images/32.jpg" alt="Home Banner" className="banner-image" />
        </div>
        <div className="home-text">
          <h2>Khám Phá Phụ Kiện Tôn Lên Vẻ Đẹp Của Riêng Bạn</h2>
          <p className="home-description">
            Khám phá bộ sưu tập phụ kiện thời trang đa dạng, từ phụ kiện tóc đến túi xách và mắt kính. 
            Mỗi sản phẩm đều được thiết kế để tôn lên vẻ đẹp và phong cách riêng của bạn.
          </p>
          <button className="buy-now-btn" onClick={handleBuyNow}>Mua ngay</button>
        </div>
      </div>

      {/* Features Section */}
      <Features />

      {/* Row 2 */}
      {/* <div className="home-row">
        <div className="image-gallery">
          <div className="gallery-item">
            <img src="/images/35.jpg" alt="Gallery 1" />
            <p>Phụ Kiện Tóc</p>
          </div>
          <div className="gallery-item">
            <img src="/images/9.jpg" alt="Gallery 2" />
            <p>Túi & Ví</p>
          </div>
          <div className="gallery-item">
            <img src="/images/21.jpg" alt="Gallery 3" />
            <p>Mắt Kính</p>
          </div>
        </div>
      </div> */}

      {/* Blog Section */}
      <BlogSection onReadMore={handleReadMore} />

      {/* Row 3 */}
      <div className="home-row">
        <div className="subscribe-container">
          <input type="email" placeholder="Địa chỉ Email" />
          <button className="subscribe-btn">ĐĂNG KÝ</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage; 