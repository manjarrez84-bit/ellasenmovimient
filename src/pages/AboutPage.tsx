import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AboutSection from '@/components/AboutSection';
import { MadeWithDyad } from '@/components/made-with-dyad';
import ImpactStatsSection from '@/components/ImpactStatsSection';
import WhoWeAreSection from '@/components/WhoWeAreSection'; // Import the new component

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <AboutSection />
        
        <WhoWeAreSection /> {/* Add the new section here */}

        <ImpactStatsSection />

        {/* The following section is now covered by WhoWeAreSection and can be removed or repurposed */}
        {/* <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary mb-8 text-balance">Nuestro Enfoque</h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto text-balance">
              En Ellas en Movimiento A.C. trabajamos principalmente con mujeres, niñas, niños y adolescentes que habitan en contextos de vulnerabilidad social dentro del estado de Nuevo León. Nos enfocamos en zonas urbanas marginadas, donde enfrentan múltiples carencias que afectan su bienestar y oportunidades. Nuestro objetivo es empoderarlas para que se conviertan en agentes de cambio en sus propias vidas y comunidades.
            </p>
          </div>
        </section> */}
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default AboutPage;