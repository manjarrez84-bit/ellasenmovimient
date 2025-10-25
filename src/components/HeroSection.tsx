"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section 
      className="relative h-[75vh] flex flex-col items-center justify-center text-center text-white pt-32 bg-cover bg-center"
      style={{ 
        backgroundImage: "url('/inicio.jpg')", // Solo la imagen de fondo principal
        backgroundSize: "120%", 
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay oscuro para legibilidad */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Contenido */}
      <div className="relative z-10 p-6 max-w-4xl flex flex-col items-center">
        {/* El logo como una imagen separada, encima del título */}
        <img src="/logo.png" alt="Logo de Ellas en Movimiento" className="h-24 w-auto mb-4 object-contain" />
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-lg leading-tight text-balance font-garamond italic">
          Ellas cambian todo lo que tocan, todo lo que tocan cambian.
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl drop-shadow-lg font-medium text-balance">
          Nuestra causa: Eliminando aquellos obstáculos que no permiten que una mujer sea libre.
        </p>
        <Link to="/how-to-help">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Únete a Nuestra Causa
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;