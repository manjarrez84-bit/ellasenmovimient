"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section 
      className="relative h-[50vh] flex flex-col items-center justify-center text-center text-white bg-cover bg-center" // Reducida la altura a h-[50vh] y eliminado pt-32
      style={{ 
        backgroundImage: "url('/1.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
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