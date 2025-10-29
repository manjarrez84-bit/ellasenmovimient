import React from 'react';

const SiteImageSection = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 flex justify-center">
        <img 
          src="/sitio.png" 
          alt="Imagen del sitio" 
          className="w-full max-w-4xl h-auto rounded-lg" 
        />
      </div>
    </section>
  );
};

export default SiteImageSection;