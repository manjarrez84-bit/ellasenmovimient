import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white shadow-sm dark:bg-gray-800">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary dark:text-primary-foreground">
          Ellas en Movimiento, A.C.
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary-foreground">Inicio</Link>
          <Link to="/about" className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary-foreground">Nosotras</Link>
          <Link to="/programs" className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary-foreground">Programas</Link>
          <Link to="/how-to-help" className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary-foreground">Cómo Ayudar</Link>
          <Link to="/contact" className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary-foreground">Contacto</Link>
        </div>
        <Button className="hidden md:block">Donar</Button>
        {/* Mobile menu button would go here */}
      </nav>
    </header>
  );
};

export default Header;