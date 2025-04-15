// Home.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

const products = [
  { id: 1, name: 'Real Madrid Home Jersey', price: 89.99, image: 'https://via.placeholder.com/300' },
  { id: 2, name: 'Barcelona Away Jersey', price: 84.99, image: 'https://via.placeholder.com/300' },
  { id: 3, name: 'Manchester United Third Kit', price: 91.99, image: 'https://via.placeholder.com/300' }
];

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
      {products.map(p => <ProductCard key={p.id} product={p} />)}
    </div>
    <Footer />
  </>
);

export default Home;
