import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ContactSection = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-primary mb-12 dark:text-primary-foreground">Contáctanos</h2>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto dark:text-gray-300">
          Estamos aquí para escucharte y ayudarte. No dudes en ponerte en contacto con nosotras.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="p-6 shadow-lg dark:bg-gray-700 dark:border-gray-600">
            <CardHeader className="flex flex-col items-center">
              <MapPin className="text-primary mb-4" size={40} />
              <CardTitle className="text-xl font-semibold mb-2 dark:text-primary-foreground">Dirección</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600 dark:text-gray-400">
              Calle Ficticia #123, Colonia Ejemplo, Ciudad de México, México.
            </CardContent>
          </Card>

          <Card className="p-6 shadow-lg dark:bg-gray-700 dark:border-gray-600">
            <CardHeader className="flex flex-col items-center">
              <Phone className="text-primary mb-4" size={40} />
              <CardTitle className="text-xl font-semibold mb-2 dark:text-primary-foreground">Teléfono</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600 dark:text-gray-400">
              +52 55 1234 5678
            </CardContent>
          </Card>

          <Card className="p-6 shadow-lg dark:bg-gray-700 dark:border-gray-600">
            <CardHeader className="flex flex-col items-center">
              <Mail className="text-primary mb-4" size={40} />
              <CardTitle className="text-xl font-semibold mb-2 dark:text-primary-foreground">Correo Electrónico</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600 dark:text-gray-400">
              info@ellasenmovimiento.org.mx
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;