import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AboutSection from '@/components/AboutSection';
import { MadeWithDyad } from '@/components/made-with-dyad';

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <AboutSection />
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary mb-8">Nuestra Historia</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
              Ellas en Movimiento A.C. es una organización de la sociedad civil sin fines de lucro que trabaja desde hace más de 17 años en el estado de Nuevo León, con el compromiso de mejorar la calidad de vida de mujeres, niñas y sus familias. Nuestra misión es visibilizar la problemática de Ellas y ampliar espacios de participación y desarrollo de las mujeres en la vida pública con el fin de lograr avances en su empoderamiento como personas y como ciudadanas. Nos guía una mirada basada en los derechos humanos, la equidad de género y la sustentabilidad.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              En Ellas en Movimiento A.C. trabajamos principalmente con mujeres, niñas, niños y adolescentes que habitan en contextos de vulnerabilidad social dentro del estado de Nuevo León, especialmente en zonas urbanas marginadas de Monterrey, como el polígono de pobreza No. 66. Estos grupos enfrentan múltiples carencias que afectan su bienestar, su participación en la vida pública y sus oportunidades de desarrollo.
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