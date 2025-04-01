import React from 'react';

const UserCard = ({ name, email }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6 mb-4">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">{name}</h2>
      <p className="text-center text-gray-600 text-sm">{email}</p>
      <div className="flex justify-center mt-6">
        <button className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-200">
          Contact
        </button>
      </div>
    </div>
  );
};

export default UserCard;
