import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">My App</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <span className="hover:underline">Home</span>
            </li>
            <li>
              <span className="hover:underline">Forms</span>
            </li>
            <li>
              <span className="hover:underline">Login</span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;