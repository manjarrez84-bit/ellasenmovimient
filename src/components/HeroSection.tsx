"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <motion.section 
      className="relative h-screen pt-16 flex flex-col items-center justify-center text-center text-white bg-cover bg-no-repeat bg-center container mx-auto overflow-hidden"
      style={{ 
        backgroundImage: "url('/3.png')",
      }}
      // Animación sutil para simular un destello o respiración
      initial={{ opacity: 0.98 }}
      animate={{ opacity: [0.98, 1, 0.98] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Overlay oscuro para asegurar la legibilidad del texto */}
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60 z-0"></div>
      
      {/* Contenido */}
      <div className="relative z-10 p-6 max-w-4xl flex flex-col items-center">
        {/* El contenido del héroe (títulos, botones) debe ir aquí si se desea mostrar algo sobre la imagen */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-balance drop-shadow-lg">
          Ellas en Movimiento A.C.
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl text-balance drop-shadow-md">
          Empoderando a mujeres y niñas para transformar sus vidas y comunidades.
        </p>
        <Link to="/how-to-help">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-3">
            Únete a Nuestra Causa
          </Button>
        </Link>
      </div>
    </motion.section>
  );
};

export default HeroSection;