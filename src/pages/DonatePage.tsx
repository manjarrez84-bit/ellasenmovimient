import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MadeWithDyad } from '@/components/made-with-dyad';

const DonatePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-16 bg-gray-50 dark:bg-gray-800 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-primary mb-8 dark:text-primary-foreground">Haz tu Donación</h1>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto dark:text-gray-300">
              Tu generosidad es la fuerza que impulsa nuestros programas. Cada donación, grande o pequeña, nos ayuda a brindar apoyo vital a mujeres en situación de vulnerabilidad.
            </p>

            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg dark:bg-gray-900 dark:border-gray-700">
              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-primary dark:text-primary-foreground">Elige tu Contribución</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div>
                      <Label htmlFor="amount" className="text-left block mb-2 text-gray-700 dark:text-gray-300">Monto de la Donación</Label>
                      <RadioGroup defaultValue="500" className="flex flex-wrap justify-center gap-4 mb-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="100" id="r1" />
                          <Label htmlFor="r1">MXN $100</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="250" id="r2" />
                          <Label htmlFor="r2">MXN $250</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="500" id="r3" />
                          <Label htmlFor="r3">MXN $500</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="1000" id="r4" />
                          <Label htmlFor="r4">MXN $1000</Label>
                        </div>
                      </RadioGroup>
                      <Input id="custom-amount" type="number" placeholder="Otro monto (MXN)" className="dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600" />
                    </div>

                    <div>
                      <Label htmlFor="name" className="text-left block mb-2 text-gray-700 dark:text-gray-300">Nombre Completo</Label>
                      <Input id="name" type="text" placeholder="Tu nombre" className="dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600" />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-left block mb-2 text-gray-700 dark:text-gray-300">Correo Electrónico</Label>
                      <Input id="email" type="email" placeholder="tu@ejemplo.com" className="dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600" />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Proceder al Pago</Button>
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

export default DonatePage;