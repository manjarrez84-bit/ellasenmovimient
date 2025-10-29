import React from 'react';

const SiteImageSection = () => {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 flex justify-center">
        <img 
          src="/sitio4.png" 
          alt="Imagen del sitio" 
          className="w-full max-w-6xl h-auto rounded-lg" 
        />
      </div>
    </section>
  );
};

export default SiteImageSection;