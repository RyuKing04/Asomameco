import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/Logo.jpg';

const Header = () => {
  return (
    <header className="bg-orange-400 from-blue-500 to-blue-700 shadow-md p-4 flex justify-between items-center w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black flex items-center space-x-4">
          <img src={Logo} alt="Asomameco logo" className="w-30 h-16 mr-2 border-none" />
          <nav className="flex space-x-4">
            <Link to="/" className="text-black hover:underline font-sans text-xl border-none">Home</Link>
            <Link to="/formulario" className="text-black hover:underline font-sans text-xl outline-0">Forms</Link>
          </nav>
        </div>
        <nav className="flex space-x-4">
          <Link to="/login" className="text-black hover:underline font-sans text-xl border-none">Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
