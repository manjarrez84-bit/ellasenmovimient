"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section 
      className="relative h-[75vh] flex flex-col items-center justify-center text-center text-white pt-32 bg-cover bg-center"
      style={{ 
        backgroundImage: "url('/logo.png'), url('/inicio.jpg')",
        backgroundPosition: "center 10%, center center", // Posiciona el logo un poco desde arriba, y la imagen principal en el centro
        backgroundSize: "150px auto, 120%", // Tamaño para el logo (ancho 150px, alto auto), y 120% para la imagen principal
        backgroundRepeat: "no-repeat, no-repeat", // Evita que ambas imágenes se repitan
      }}
    >
      {/* Overlay oscuro para legibilidad */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Contenido */}
      <div className="relative z-10 p-6 max-w-4xl flex flex-col items-center">
        {/* El logo ahora es parte del background, así que removemos la etiqueta <img> */}
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