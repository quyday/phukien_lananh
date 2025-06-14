import React from 'react';
import './Main.css';
import HomePage from '../pages/HomePage';
import HairAccessoriesPage from '../pages/HairAccessoriesPage';
import BagsPage from '../pages/BagsPage';
import GlassesPage from '../pages/GlassesPage';
import LoginRegister from './LoginRegister';

// Helper function to format price with dots
const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

function Main({ activeMenu, searchTerm, onAddToCart, onNavigate, showLoginRegister, onCloseLoginRegister }) {
  const renderContent = () => {
    // If we're showing login/register and the active menu is not TrangChu,
    // we should navigate to the selected menu page
    if (showLoginRegister && activeMenu !== 'TrangChu') {
      return (
        <>
          <LoginRegister onClose={onCloseLoginRegister} />
          {renderMenuContent()}
        </>
      );
    }

    // If we're showing login/register and on home page, just show the form
    if (showLoginRegister) {
      return <LoginRegister onClose={onCloseLoginRegister} />;
    }

    return renderMenuContent();
  };

  const renderMenuContent = () => {
    switch (activeMenu) {
      case 'TrangChu':
        return <HomePage onNavigate={onNavigate} />;
      case 'PhuKienToc':
        return <HairAccessoriesPage searchTerm={searchTerm} onAddToCart={onAddToCart} />;
      case 'TuiVi':
        return <BagsPage searchTerm={searchTerm} onAddToCart={onAddToCart} />;
      case 'MatKinh':
        return <GlassesPage searchTerm={searchTerm} onAddToCart={onAddToCart} />;
      case 'Khan':
        return (
          <div className="content">
            <h2>Khăn</h2>
            <p>Danh sách khăn sẽ được hiển thị ở đây</p>
          </div>
        );
      default:
        return (
          <div className="content">
            <h2>Chọn danh mục</h2>
            <p>Vui lòng chọn một danh mục từ menu</p>
          </div>
        );
    }
  };

  return (
    <main className="main">
      {renderContent()}
    </main>
  );
}

export default Main;