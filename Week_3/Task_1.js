import React, { useState } from 'react';

const TextUpdater = () => {
  // Define state to hold the text value
  const [text, setText] = useState('');

  // Handle change event for input field
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 p-8">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Text Updater</h2>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 ease-in-out mb-6"
          placeholder="Start typing..."
        />
        <div className="flex items-center justify-center">
          <p className="text-xl text-gray-700 font-semibold">
            You typed: <span className="text-indigo-600">{text}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextUpdater;
