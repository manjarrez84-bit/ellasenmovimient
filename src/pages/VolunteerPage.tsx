import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MadeWithDyad } from '@/components/made-with-dyad';

const VolunteerPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-16 bg-white dark:bg-gray-900 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-primary mb-8 dark:text-primary-foreground">Sé Parte de Nuestro Equipo de Voluntarios</h1>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto dark:text-gray-300">
              Tu tiempo y talento son invaluables. Únete a Ellas en Movimiento, A.C. y ayúdanos a construir un futuro mejor para las mujeres.
            </p>

            <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <Card className="dark:bg-gray-700 dark:border-gray-600">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-primary dark:text-primary-foreground">Formulario de Voluntariado</CardTitle>
                </CardHeader>
                <CardContent>
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
                      <Label htmlFor="phone" className="text-left block mb-2 text-gray-700 dark:text-gray-300">Teléfono</Label>
                      <Input id="phone" type="tel" placeholder="+52 55 1234 5678" className="dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600" />
                    </div>
                    <div>
                      <Label htmlFor="skills" className="text-left block mb-2 text-gray-700 dark:text-gray-300">Habilidades o Áreas de Interés</Label>
                      <Textarea id="skills" placeholder="Ej: Asesoría legal, apoyo psicológico, organización de eventos, diseño gráfico, etc." rows={3} className="dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600" />
                    </div>
                    <div>
                      <Label htmlFor="availability" className="text-left block mb-2 text-gray-700 dark:text-gray-300">Disponibilidad</Label>
                      <Input id="availability" type="text" placeholder="Ej: Lunes y Miércoles por la tarde" className="dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600" />
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Enviar Solicitud</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default VolunteerPage;