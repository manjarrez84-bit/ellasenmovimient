import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProgramsSection from '@/components/ProgramsSection';
import { MadeWithDyad } from '@/components/made-with-dyad';

const ProgramsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <ProgramsSection />
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary mb-8 dark:text-primary-foreground">Detalles de Nuestros Programas</h2>
            <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto dark:text-gray-300">
              En Ellas en Movimiento, A.C., cada programa está diseñado para abordar las necesidades específicas de las mujeres que apoyamos, fomentando su autonomía y bienestar.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-700 dark:border-gray-600">
                <h3 className="text-xl font-semibold text-primary mb-3 dark:text-primary-foreground">Asesoría Legal Integral</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Nuestro equipo de abogadas especializadas ofrece asesoría gratuita en casos de violencia familiar, divorcios, pensiones alimenticias y otros temas legales relevantes. Acompañamos a las mujeres en todo el proceso judicial, garantizando que sus derechos sean protegidos.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-700 dark:border-gray-600">
                <h3 className="text-xl font-semibold text-primary mb-3 dark:text-primary-foreground">Apoyo Psicológico y Emocional</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Proporcionamos terapia individual y grupal con psicólogas expertas en trauma y violencia de género. Nuestro objetivo es ayudar a las mujeres a procesar sus experiencias, fortalecer su autoestima y desarrollar mecanismos de afrontamiento saludables para una vida plena.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-700 dark:border-gray-600">
                <h3 className="text-xl font-semibold text-primary mb-3 dark:text-primary-foreground">Talleres de Capacitación Laboral</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Ofrecemos cursos y talleres en diversas áreas como computación básica, costura, repostería, emprendimiento y habilidades blandas. Estos programas buscan dotar a las mujeres de herramientas para generar ingresos y alcanzar su independencia económica.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-700 dark:border-gray-600">
                <h3 className="text-xl font-semibold text-primary mb-3 dark:text-primary-foreground">Educación para el Empoderamiento</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Realizamos charlas y talleres sobre derechos humanos de las mujeres, prevención de la violencia, salud sexual y reproductiva, y liderazgo. Fomentamos la participación activa de las mujeres en sus comunidades y la toma de decisiones informadas.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default ProgramsPage;