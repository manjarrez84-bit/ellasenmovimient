"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <motion.section 
      className="relative h-[80vh] pt-16 flex flex-col items-center justify-center text-center text-white bg-cover bg-no-repeat bg-center container mx-auto overflow-hidden"
      style={{ 
        backgroundImage: "url('/3.png')",
      }}
      // Animación sutil para simular un destello o respiración
      initial={{ opacity: 0.98 }}
      animate={{ opacity: [0.98, 1, 0.98] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Overlay para asegurar que el texto sea legible y la animación sea visible */}
      <div className="absolute inset-0 bg-black/10 dark:bg-black/30"></div>
      
      {/* Contenido */}
      <div className="relative z-10 p-6 max-w-4xl flex flex-col items-center">
        {/* El botón "Únete a Nuestra Causa" ha sido eliminado */}
      </div>
    </motion.section>
  );
};

export default HeroSection;