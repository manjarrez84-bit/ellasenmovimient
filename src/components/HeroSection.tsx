"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section 
      className="relative h-[80vh] pt-16 flex flex-col items-center justify-center text-center text-white bg-contain bg-no-repeat bg-center container mx-auto" // Altura aumentada a h-[80vh] y añadido pt-16
      style={{ 
        backgroundImage: "url('/2.png')",
      }}
    >
      {/* Contenido */}
      <div className="relative z-10 p-6 max-w-4xl flex flex-col items-center">
        {/* El botón "Únete a Nuestra Causa" ha sido eliminado */}
      </div>
    </section>
  );
};

export default HeroSection;