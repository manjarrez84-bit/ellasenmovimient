import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section 
      className="relative h-[50vh] flex flex-col items-center justify-center text-center text-foreground pt-24"
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/fondo.jpg" 
          alt="" 
          aria-hidden="true"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* Contenido */}
      <div className="relative z-10 p-6 max-w-4xl flex flex-col items-center bg-secondary/80 rounded-xl text-secondary-foreground">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-lg">
          ELLAS CAMBIAN TODO LO QUE TOCAN, TODO LO QUE TOCAN CAMBIAN
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl drop-shadow-lg font-bold">
          Brindamos apoyo integral a mujeres en situación de violencia y pobreza, ofreciéndoles las herramientas para construir un futuro digno y libre.
        </p>
        <Link to="/how-to-help">
          <Button size="lg">
            Únete a Nuestra Causa
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;