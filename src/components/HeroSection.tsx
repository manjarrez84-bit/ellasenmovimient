"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <motion.section 
      className="relative h-[80vh] flex flex-col items-center justify-center text-center text-white bg-contain bg-no-repeat bg-center w-full overflow-hidden"
      style={{ 
        backgroundImage: "url('/4.png')",
      }}
      // Animación sutil para simular un destello o respiración
      initial={{ opacity: 0.98 }}
      animate={{ opacity: [0.98, 1, 0.98] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Contenido */}
      <div className="relative z-10 p-6 max-w-4xl flex flex-col items-center container mx-auto">
        {/* El botón "Únete a Nuestra Causa" ha sido eliminado */}
      </div>
    </motion.section>
  );
};

export default HeroSection;