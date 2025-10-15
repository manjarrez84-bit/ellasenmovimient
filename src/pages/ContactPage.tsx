import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactSection from '@/components/ContactSection';
import { MadeWithDyad } from '@/components/made-with-dyad';
import ContactForm from '@/components/forms/ContactForm'; // Importar el nuevo componente

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <ContactSection />
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-primary mb-8 dark:text-primary-foreground">Envíanos un Mensaje</h2>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto dark:text-gray-300">
              Si tienes alguna pregunta, sugerencia o deseas más información, por favor, completa el siguiente formulario.
            </p>

            <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <ContactForm /> {/* Usar el componente ContactForm */}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default ContactPage;