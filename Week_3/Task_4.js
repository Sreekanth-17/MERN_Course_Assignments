import React from 'react';

const Button = () => {
  // Handle button click event
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <button 
      onClick={handleClick}
      className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out"
    >
      Click Me
    </button>
  );
};

export default Button;
