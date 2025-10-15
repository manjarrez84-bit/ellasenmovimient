import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center h-[60vh] flex items-center justify-center text-center" style={{ backgroundImage: "url('/placeholder.svg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-white p-6 max-w-3xl">
        <h1 className="text-5xl font-extrabold mb-4 leading-tight">
          Ellas en Movimiento, A.C.
        </h1>
        <p className="text-xl mb-8">
          Apoyando a mujeres en situación de violencia y pobreza, construyendo un futuro de esperanza y dignidad.
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