import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section 
      className="relative h-[75vh] flex flex-col items-center justify-center text-center text-foreground pt-32 bg-muted/20"
    >
      {/* Logo de fondo con transparencia */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/fondo.png" 
          alt="" 
          aria-hidden="true"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      {/* Contenido */}
      <div className="relative z-10 p-6 max-w-4xl flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight drop-shadow-lg">
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