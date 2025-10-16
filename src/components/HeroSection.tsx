import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-gray-200 dark:bg-gray-800 h-[60vh] flex flex-col items-center justify-center text-center p-6">
      <div className="relative z-10 text-white p-6 max-w-3xl flex flex-col items-center">
        <img 
          src="/hero-background.jpg" 
          alt="Ellas en Movimiento A.C. Hero" 
          className="max-h-64 md:max-h-80 lg:max-h-96 w-auto object-contain mb-8 rounded-lg shadow-lg" 
        />
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