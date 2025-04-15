// ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <div className="border p-4 rounded shadow">
    <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
    <h3 className="mt-2 text-lg font-bold">{product.name}</h3>
    <p className="text-green-600 font-semibold">${product.price}</p>
    <Link to={`/product/${product.id}`} className="text-blue-500 underline">View Details</Link>
  </div>
);

export default ProductCard;
