import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AboutSection from '@/components/AboutSection';
import { MadeWithDyad } from '@/components/made-with-dyad';
import ImpactStatsSection from '@/components/ImpactStatsSection';

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <AboutSection />
        
        <ImpactStatsSection />

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary mb-8">Nuestro Enfoque</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              En Ellas en Movimiento A.C. trabajamos principalmente con mujeres, niñas, niños y adolescentes que habitan en contextos de vulnerabilidad social dentro del estado de Nuevo León. Nos enfocamos en zonas urbanas marginadas, donde enfrentan múltiples carencias que afectan su bienestar y oportunidades. Nuestro objetivo es empoderarlas para que se conviertan en agentes de cambio en sus propias vidas y comunidades.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default AboutPage;