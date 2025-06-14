import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section footer-brand">
        <img src="/images/logo.png" alt="Logo" className="footer-logo" />
        <div className="footer-slogan">Tỏa sáng cá tính - Định hình phong cách!</div>
        <p>Khám Phá Phụ Kiện Tôn Lên Vẻ Đẹp Riêng Của Bạn</p>
        <div className="footer-socials">
          <a href="#" className="footer-social" title="Instagram"><span role="img" aria-label="Instagram">📸</span></a>
          <a href="#" className="footer-social" title="Shopee"><span role="img" aria-label="Shopee">🛒</span></a>
          <a href="#" className="footer-social" title="Facebook"><span role="img" aria-label="Facebook">👍</span></a>
        </div>
        <ul className="footer-links">
          <li>Instagram: Soc.vn</li>
          <li>Shopee: Nhà Sóc - The Little Owl</li>
          <li>Facebook: thelitteowl.vn</li>
        </ul>
      </div>

      <div className="footer-section footer-support">
        <h3>HỖ TRỢ MUA HÀNG</h3>
        <div className="support-info">
          <div className="support-item">
            <div className="support-icon"><img src='/images/delivery-icon.png'/></div>
            <h4>MIỄN PHÍ GIAO HÀNG</h4>
            <p>Với hóa đơn từ 199.000đ</p>
          </div>
          <div className="support-item">
            <div className="support-icon"><img src='/images/check-icon.png'/></div>
            <h4>KIỂM TRA HÀNG KHI NHẬN</h4>
            <p>Hoàn trả miễn phí</p>
          </div>
          <div className="support-item">
            <div className="support-icon"><img src='/images/phone-icon.png'/></div>
            <h4>MUA HÀNG (10H - 22H, HÀNG NGÀY)</h4>
            <p>CSKH 0932 187 578</p>
          </div>
          <div className="support-item">
            <div className="support-icon"><img src='/images/store-icon.png'/></div>
            <h4>HỆ THỐNG SHOWROOM</h4>
            <p>SÀN THƯƠNG MẠI ĐIỆN TỬ</p>
          </div>
        </div>
      </div>

      <div className="footer-section footer-contact">
        <h3>THÔNG TIN LIÊN HỆ</h3>
        <div className="contact-info">
          <div className="contact-item"><span className="contact-icon"><img src='/images/phone-icon.png'/></span> CSKH 0932187578</div>
          <div className="contact-item"><span className="contact-icon"><img src='/images/cart-icon.png'/></span> Mua Hàng</div>
          <div className="contact-item"><span className="contact-icon"><img src='/images/email-icon.png'/></span> Email</div>
          <button className="contact-button">Hệ thống cửa hàng</button>
        </div>
        <div className="newsletter">
          <h4>ĐĂNG KÍ NHẬN THÔNG TIN ƯU ĐÃI VÀ XU HƯỚNG MỚI NHẤT</h4>
          <div className="email-input">
            <input type="email" placeholder="Điền địa chỉ Email của bạn" />
            <button>GỬI</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;