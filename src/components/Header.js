import React, { useState, useEffect } from 'react';
import './Header.css';

function Header({ onMenuChange, onSearch, onCartClick,onUserClick, cartCount, activeMenu }) {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    // Khi prop activeMenu thay đổi từ App, menu sẽ đổi màu đúng
    if (activeMenu) {
      setLocalActiveMenu(activeMenu);
    }
  }, [activeMenu]);

  const [localActiveMenu, setLocalActiveMenu] = useState(activeMenu || 'PhuKienToc');

  const handleMenuClick = (menuName) => {
    setLocalActiveMenu(menuName);
    onMenuChange(menuName);
  };

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };

  const handleSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchValue);
    setIsSearchActive(false);
  };

  return (
    <header className="header">
      <div className="logo-section">
        <img src="/images/logo.png" alt="Logo" className="logo" />
      </div>
      
      <nav className="menu-section">
        <ul>
          <li>
            <a 
              href="#" 
              className={localActiveMenu === 'TrangChu' ? 'active' : ''}
              onClick={() => handleMenuClick('TrangChu')}
            >
              TRANG CHỦ
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className={localActiveMenu === 'PhuKienToc' ? 'active' : ''}
              onClick={() => handleMenuClick('PhuKienToc')}
            >
              PHỤ KIỆN TÓC
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className={localActiveMenu === 'TuiVi' ? 'active' : ''}
              onClick={() => handleMenuClick('TuiVi')}
            >
              TÚI & VÍ
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className={localActiveMenu === 'MatKinh' ? 'active' : ''}
              onClick={() => handleMenuClick('MatKinh')}
            >
              MẮT KÍNH
            </a>
          </li>
        </ul>
      </nav>
      
      <div className="icons-section">
        <img 
          src="/search.png" 
          alt="Search" 
          className="icon" 
          onClick={toggleSearch}
        />
        <img src="/use.png" alt="User" className="icon" onClick={onUserClick}
          style={{ cursor: 'pointer' }} />
        <div className="cart-icon-wrapper" onClick={onCartClick} style={{position:'relative', cursor:'pointer'}}>
          <img src="/giohang.png" alt="Cart" className="icon" />
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </div>
        <div className={`search-container ${isSearchActive ? 'active' : ''}`}>
          <form onSubmit={handleSearchSubmit} style={{display:'flex',alignItems:'center',gap:4}}>
            <input 
              type="text" 
              className="search-input" 
              placeholder="Tìm kiếm sản phẩm..."
              value={searchValue}
              onChange={handleSearchInput}
              autoFocus
            />
            <button type="submit" className="search-btn">Tìm</button>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;