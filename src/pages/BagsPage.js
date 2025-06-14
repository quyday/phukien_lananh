import React from 'react';
import ProductPage from './ProductPage';

function BagsPage({ searchTerm, onAddToCart }) {
  const products = [
    // Set 1
    ...Array.from({ length: 14 }, (_, i) => ({
      image: `/images/${1 + i}.jpg`,
      price: 350000,
      name: `Túi xách ${i + 1}`
    })),
    // Set 2
    ...Array.from({ length: 39 }, (_, i) => ({
      image: `/images/${62 + i}.webp`,
      price: 450000,
      name: `Túi xách ${i + 15}`
    }))
  ];

  return <ProductPage products={products} searchTerm={searchTerm} onAddToCart={onAddToCart} />;
}

export default BagsPage; 