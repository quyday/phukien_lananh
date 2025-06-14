import React from 'react';
import './Features.css';

const features = [
  {
    id: 1,
    icon: "✨",
    title: "Sản Phẩm Chất Lượng",
    description: "Cam kết chất lượng sản phẩm với nguồn gốc rõ ràng và bảo hành chính hãng"
  },
  {
    id: 2,
    icon: "🚚",
    title: "Giao Hàng Toàn Quốc",
    description: "Miễn phí vận chuyển cho đơn hàng từ 500.000đ và giao hàng nhanh chóng"
  },
  {
    id: 3,
    icon: "💎",
    title: "Ưu Đãi Đặc Biệt",
    description: "Nhiều chương trình khuyến mãi hấp dẫn và quà tặng giá trị"
  },
  {
    id: 4,
    icon: "🛡️",
    title: "Bảo Mật Thanh Toán",
    description: "Hệ thống thanh toán an toàn, đa dạng phương thức thanh toán"
  }
];

function Features() {
  return (
    <section className="features-section">
      <div className="features-container">
        {features.map(feature => (
          <div key={feature.id} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features; 