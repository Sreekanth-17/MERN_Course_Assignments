import React, { useState } from 'react';

const FormComponent = () => {
  // State to store the input value
  const [inputValue, setInputValue] = useState('');

  // Handle change in the input field
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();  // Prevent the form from reloading the page
    console.log('Form Submitted with Input Value:', inputValue);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">React Form</h2>
        
        {/* Form starts here */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="inputField" className="block text-sm font-medium text-gray-700">Your Input:</label>
            <input
              id="inputField"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 ease-in-out"
              placeholder="Enter text"
            />
          </div>
          
          {/* Submit button */}
          <button 
            type="submit"
            className="w-full p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none transition duration-200 ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
