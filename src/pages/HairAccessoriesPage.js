import React from 'react';
import ProductPage from './ProductPage';

function HairAccessoriesPage({ searchTerm, onAddToCart }) {
  const products = [
    // Set 1
    ...Array.from({ length: 9 }, (_, i) => ({
      image: `/images/${37 + i}.webp`,
      price: 150000,
      name: `Phụ kiện tóc ${i + 1}`
    })),
    // Set 2
    ...Array.from({ length: 10 }, (_, i) => ({
      image: `/images/${46 + i}.webp`,
      price: 180000,
      name: `Phụ kiện tóc ${i + 10}`
    })),
    // Set 3
    ...Array.from({ length: 6 }, (_, i) => ({
      image: `/images/${56 + i}.webp`,
      price: 200000,
      name: `Phụ kiện tóc ${i + 20}`
    })),
    // Set 4
    ...Array.from({ length: 13 }, (_, i) => ({
      image: `/images/${24 + i}.jpg`,
      price: 250000,
      name: `Phụ kiện tóc ${i + 26}`
    }))
  ];

  return <ProductPage products={products} searchTerm={searchTerm} onAddToCart={onAddToCart} />;
}

export default HairAccessoriesPage; 