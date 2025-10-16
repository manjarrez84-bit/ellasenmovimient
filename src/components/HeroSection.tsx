"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('/WhatsApp-Image-2025-09-28-at-6.12.00-PM-1-1024x771.jpeg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Ellas en Movimiento
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Empoderando a mujeres y niñas para transformar sus vidas y construir un futuro mejor.
        </p>
        <Link to="/#contacto">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full">
            Contáctanos
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;