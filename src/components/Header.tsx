import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/Logo.jpg';

const Header = () => {
  return (
    <header className="bg-orange-500 shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black flex items-center space-x-4">
          <img src={Logo} alt="Asomameco logo" className="w-30 h-16 mr-2" />
          <nav className="flex space-x-4">
            <Link to="/" className="text-black hover:text-gray-200 font-sans text-xl no-underline">Inicio</Link>
            <Link to="/formulario" className="text-black hover:text-gray-200 font-sans text-xl no-underline">Formulario</Link>
          </nav>
        </div>
        <nav className="flex space-x-4">
          <Link to="/login" className="text-black hover:text-gray-200 font-sans text-xl no-underline">Iniciar Sesión</Link>
        </nav>
      </div>
    </header>
  );
  
  
  
};

export default Header;