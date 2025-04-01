import React from 'react';
import UserCard from './usercard'; // Import UserCard component

function App() {
  return (
    <div className="App">
      <div className="flex justify-center items-center min-h-screen bg-gray-200 p-4">
        <UserCard name="John Doe" email="johndoe@example.com" />
        <UserCard name="Jane Smith" email="janesmith@example.com" />
      </div>
    </div>
  );
}

export default App;
