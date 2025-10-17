import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import NewsletterForm from '../forms/NewsletterForm';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        
        <div className="mb-10">
          <h3 className="text-2xl font-bold mb-2">Suscríbete a Nuestro Boletín</h3>
          <p className="text-sm mb-4 max-w-xl mx-auto">Recibe nuestras últimas noticias, historias de impacto y formas de ayudar directamente en tu correo.</p>
          <NewsletterForm />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Ellas en Movimiento, A.C.</h3>
            <p className="text-sm">Apoyando a mujeres en situación de violencia y pobreza.</p>
          </div>
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link to="/" className="hover:underline">Inicio</Link>
            <Link to="/about" className="hover:underline">Nosotras</Link>
            <Link to="/programs" className="hover:underline">Programas</Link>
            <Link to="/blog" className="hover:underline">Blog</Link>
            <Link to="/faq" className="hover:underline">FAQ</Link>
            <Link to="/contact" className="hover:underline">Contacto</Link>
          </div>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-accent-foreground"><Facebook size={20} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-accent-foreground"><Instagram size={20} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-accent-foreground"><Twitter size={20} /></a>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-6 text-sm">
          &copy; {new Date().getFullYear()} Ellas en Movimiento, A.C. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;