"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section 
      className="relative h-[40vh] flex flex-col items-center justify-center text-center text-white bg-contain bg-no-repeat bg-center container mx-auto" // Altura reducida, bg-contain, bg-no-repeat y container mx-auto
      style={{ 
        backgroundImage: "url('/1.png')",
        // backgroundSize: "cover", // Eliminado, ahora manejado por bg-contain
        // backgroundRepeat: "no-repeat", // Eliminado, ahora manejado por bg-no-repeat
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