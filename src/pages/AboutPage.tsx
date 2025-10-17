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
              Ellas en Movimiento, A.C. nació de la profunda necesidad de apoyar a mujeres que enfrentan situaciones de violencia y pobreza extrema. Fundada en 20XX por un grupo de activistas y profesionales comprometidas, nuestra organización ha crecido para convertirse en un faro de esperanza para cientos de mujeres y sus familias.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Desde nuestros inicios, hemos trabajado incansablemente para ofrecer un espacio seguro, recursos y herramientas que permitan a las mujeres reconstruir sus vidas, recuperar su dignidad y alcanzar su pleno potencial. Creemos firmemente que cada mujer merece una vida libre de miedo y con oportunidades.
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