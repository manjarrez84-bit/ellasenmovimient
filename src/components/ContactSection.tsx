import React from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ContactSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-primary mb-12">Contáctanos</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          Estamos aquí para escucharte y ayudarte. No dudes en ponerte en contacto con nosotras.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <Card className="p-6 shadow-lg">
            <CardHeader className="flex flex-col items-center">
              <MapPin className="text-primary mb-4" size={40} />
              <CardTitle className="text-xl font-semibold mb-2">Dirección</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Porfirio Díaz 426 Nte. Col. Centro, Monterrey, Nuevo León, México.
            </CardContent>
          </Card>

          <Card className="p-6 shadow-lg">
            <CardHeader className="flex flex-col items-center">
              <Phone className="text-primary mb-4" size={40} />
              <CardTitle className="text-xl font-semibold mb-2">Teléfono</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p className="font-bold mb-2">+52 8112664221</p>
              <p className="font-bold mb-2">+52 8183641257</p>
              <p className="font-bold">+52 8137142927</p>
            </CardContent>
          </Card>

          <Card className="p-6 shadow-lg">
            <CardHeader className="flex flex-col items-center">
              <Mail className="text-primary mb-4" size={40} />
              <CardTitle className="text-xl font-semibold mb-2">Correo Electrónico</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              ellasenmov@gmail.com
            </CardContent>
          </Card>

          <a href="https://wa.me/528112664221" target="_blank" rel="noopener noreferrer" className="block">
            <Card className="p-6 shadow-lg h-full transition-transform transform hover:scale-105">
              <CardHeader className="flex flex-col items-center">
                <MessageCircle className="text-primary mb-4" size={40} />
                <CardTitle className="text-xl font-semibold mb-2">WhatsApp</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Envíanos un mensaje directo para una atención más rápida.
              </CardContent>
            </Card>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;