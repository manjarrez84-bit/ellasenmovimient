import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section 
      className="h-[75vh] flex flex-col items-center justify-center text-center text-primary-foreground bg-primary"
    >
      <div className="p-6 max-w-4xl flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
          Empoderando Mujeres, Transformando Vidas.
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl font-bold">
          Brindamos apoyo integral a mujeres en situación de violencia y pobreza, ofreciéndoles las herramientas para construir un futuro digno y libre.
        </p>
        <Link to="/how-to-help">
          <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
            Únete a Nuestra Causa
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;