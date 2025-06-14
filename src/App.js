import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import CartPanel from './components/CartPanel';
import PaymentPage from './pages/PaymentPage';
import './utils/animations.css';

function App() {
  const [activeMenu, setActiveMenu] = useState('PhuKienToc');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showLoginRegister, setShowLoginRegister] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState('home');

  const handleAddToCart = (product) => {
    setCart(prev => [...prev, product]);
    setIsCartOpen(true);
  };

  const handleUserClick = () => {
    setShowLoginRegister(true);
  };

  const handleCloseLoginRegister = () => {
    setShowLoginRegister(false);
    setActiveMenu('TrangChu');
  };

  const handleRemoveFromCart = (index) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const handleCheckout = () => {
    setCurrentPage('payment');
    setIsCartOpen(false);
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'payment':
        return (
          <PaymentPage 
            cartItems={cart}
            onBack={handleBackToHome}
          />
        );
      default:
        return (
          <Main 
            activeMenu={activeMenu} 
            searchTerm={searchTerm}
            onAddToCart={handleAddToCart}
            onNavigate={setActiveMenu}
            showLoginRegister={showLoginRegister}
            onCloseLoginRegister={handleCloseLoginRegister}
          />
        );
    }
  };

  return (
    <div className="App">
      <Header 
        onMenuChange={setActiveMenu}
        onUserClick={handleUserClick} 
        onSearch={setSearchTerm}
        onCartClick={() => setIsCartOpen(true)}
        cartCount={cart.length}
        activeMenu={activeMenu}
      />
      {renderPage()}
      <CartPanel 
        isOpen={isCartOpen} 
        cart={cart} 
        onClose={() => setIsCartOpen(false)}
        onRemove={handleRemoveFromCart}
        onCheckout={handleCheckout}
      />
      <Footer />
    </div>
  );
}

export default App;