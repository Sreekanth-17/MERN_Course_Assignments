// ProductDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
  { id: 1, name: 'Real Madrid Home Jersey', price: 89.99, description: '2024 Home Kit.', image: 'https://via.placeholder.com/400' },
  { id: 2, name: 'Barcelona Away Jersey', price: 84.99, description: 'Official Away Kit.', image: 'https://via.placeholder.com/400' },
  { id: 3, name: 'Manchester United Third Kit', price: 91.99, description: 'Limited edition.', image: 'https://via.placeholder.com/400' }
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id.toString() === id);

  return product ? (
    <div className="p-8">
      <img src={product.image} alt={product.name} className="w-full max-w-md mx-auto" />
      <h2 className="text-3xl font-bold mt-4">{product.name}</h2>
      <p className="text-gray-700 mt-2">{product.description}</p>
      <p className="text-green-600 text-xl font-semibold mt-2">${product.price}</p>
    </div>
  ) : <p className="text-center p-8">Product not found.</p>;
};

export default ProductDetail;
