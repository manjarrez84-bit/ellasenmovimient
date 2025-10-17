import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section 
      className="relative h-[75vh] flex flex-col items-center justify-center text-center text-primary-foreground"
      style={{ backgroundImage: "url('/hero-background.jpg')", backgroundSize: 'cover', backgroundPosition: 'center bottom' }}
    >
      <div className="absolute inset-0 z-0" />
      <div className="relative z-10 p-6 max-w-4xl flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight drop-shadow-lg">
          Empoderando Mujeres, Transformando Vidas.
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl drop-shadow-lg">
          Brindamos apoyo integral a mujeres en situación de violencia y pobreza, ofreciéndoles las herramientas para construir un futuro digno y libre.
        </p>
        <Link to="/how-to-help">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-3">
            Únete a Nuestra Causa
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;