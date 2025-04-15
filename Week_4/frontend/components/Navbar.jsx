// Navbar.jsx
import React from 'react';

const Navbar = () => (
  <nav className="bg-blue-600 text-white p-4 flex justify-between">
    <h1 className="text-xl font-bold">Football Jersey Store</h1>
    <div className="space-x-4">
      <a href="/">Home</a>
      <a href="#">Products</a>
      <a href="#">Contact</a>
    </div>
  </nav>
);

export default Navbar;
