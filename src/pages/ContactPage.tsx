import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactSection from '@/components/ContactSection';
import { MadeWithDyad } from '@/components/made-with-dyad';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

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
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-left block mb-2 text-gray-700 dark:text-gray-300">Nombre Completo</Label>
                  <Input id="name" type="text" placeholder="Tu nombre" className="dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-left block mb-2 text-gray-700 dark:text-gray-300">Correo Electrónico</Label>
                  <Input id="email" type="email" placeholder="tu@ejemplo.com" className="dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600" />
                </div>
                <div>
                  <Label htmlFor="subject" className="text-left block mb-2 text-gray-700 dark:text-gray-300">Asunto</Label>
                  <Input id="subject" type="text" placeholder="Asunto del mensaje" className="dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600" />
                </div>
                <div>
                  <Label htmlFor="message" className="text-left block mb-2 text-gray-700 dark:text-gray-300">Mensaje</Label>
                  <Textarea id="message" placeholder="Escribe tu mensaje aquí..." rows={5} className="dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600" />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Enviar Mensaje</Button>
              </form>
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