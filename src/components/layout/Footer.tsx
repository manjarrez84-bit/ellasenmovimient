import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import NewsletterForm from '../forms/NewsletterForm';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          {/* Columna 1: Info y Redes Sociales */}
          <div>
            <h3 className="text-xl font-bold mb-2">Ellas en Movimiento, A.C.</h3>
            <p className="text-sm mb-4">Apoyando a mujeres en situación de violencia y pobreza.</p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" aria-label="Facebook" className="hover:opacity-80"><Facebook size={20} /></a>
              <a href="#" aria-label="Instagram" className="hover:opacity-80"><Instagram size={20} /></a>
              <a href="#" aria-label="Twitter" className="hover:opacity-80"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h3 className="text-xl font-bold mb-2">Navegación</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:underline">Inicio</Link></li>
              <li><Link to="/about" className="hover:underline">Nosotras</Link></li>
              <li><Link to="/programs" className="hover:underline">Programas</Link></li>
              <li><Link to="/blog" className="hover:underline">Blog</Link></li>
              <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
              <li><Link to="/contact" className="hover:underline">Contacto</Link></li>
            </ul>
          </div>

          {/* Columna 3: Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-2">Suscríbete al Boletín</h3>
            <p className="text-sm mb-4">Recibe nuestras últimas noticias y actualizaciones directamente en tu correo.</p>
            <NewsletterForm />
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm">
          &copy; {new Date().getFullYear()} Ellas en Movimiento, A.C. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;