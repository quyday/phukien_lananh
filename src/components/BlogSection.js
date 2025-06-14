import React from 'react';
import './BlogSection.css';

const blogPosts = [
  {
    id: 1,
    title: "Xu Hướng Phụ Kiện Tóc 20255: Từ Đơn Giản Đến Phá Cách",
    image: "/images/35.jpg",
    excerpt: "Khám phá những xu hướng phụ kiện tóc mới nhất, từ những chiếc kẹp tóc đơn giản đến những phụ kiện độc đáo làm nổi bật cá tính của bạn.",
    date: "15/03/20255",
    category: "Phụ Kiện Tóc"
  },
  {
    id: 2,
    title: "Túi Xách Thời Trang: Phong Cách Cho Mọi Dịp",
    image: "/images/9.jpg",
    excerpt: "Tìm hiểu cách chọn túi xách phù hợp với từng dịp, từ công sở đến dự tiệc, giúp bạn luôn tỏa sáng trong mọi hoàn cảnh.",
    date: "12/03/20255",
    category: "Túi & Ví"
  },
  {
    id: 3,
    title: "Mắt Kính: Phụ Kiện Không Thể Thiếu Cho Mùa Hè",
    image: "/images/21.jpg",
    excerpt: "Cập nhật xu hướng mắt kính mới nhất, từ kính râm thời trang đến kính mát bảo vệ mắt, giúp bạn vừa đẹp vừa khỏe.",
    date: "10/03/20255",
    category: "Mắt Kính"
  }
];

function BlogSection({ onReadMore }) {
  return (
    <section className="blog-section">
      <div className="blog-header">
        <h2>Blog Thời Trang</h2>
        <p>Khám phá những xu hướng và bí quyết làm đẹp mới nhất</p>
      </div>
      <div className="blog-grid">
        {blogPosts.map(post => (
          <article key={post.id} className="blog-card">
            <div className="blog-image">
              <img src={post.image} alt={post.title} />
              <span className="blog-category">{post.category}</span>
            </div>
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="blog-meta">
                <span className="blog-date">{post.date}</span>
                <button className="read-more" onClick={() => onReadMore && onReadMore(post.category)}>Đọc thêm</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default BlogSection; 