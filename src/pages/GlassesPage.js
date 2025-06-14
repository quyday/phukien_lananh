import React from 'react';
import ProductPage from './ProductPage';

function GlassesPage({ searchTerm, onAddToCart }) {
  const products = [
    // Set 1
    ...Array.from({ length: 9 }, (_, i) => ({
      image: `/images/${15 + i}.jpg`,
      price: 550000,
      name: `Mắt kính ${i + 1}`
    })),
    // Set 2
    ...Array.from({ length: 50 }, (_, i) => ({
      image: `/images/${101 + i}.webp`,
      price: 650000,
      name: `Mắt kính ${i + 10}`
    }))
  ];

  return <ProductPage products={products} searchTerm={searchTerm} onAddToCart={onAddToCart} />;
}

export default GlassesPage; 