"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario, por ejemplo, a una API.
    // Por ahora, solo mostraremos un mensaje de éxito.
    toast.success("¡Mensaje enviado! Nos pondremos en contacto contigo pronto.");
    // Limpiar el formulario si es necesario
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contacto" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto shadow-lg dark:bg-gray-800 dark:border-gray-700">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-primary mb-2">Contáctanos</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              ¿Tienes alguna pregunta o quieres colaborar? Envíanos un mensaje.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">Nombre</Label>
                <Input id="name" type="text" placeholder="Tu nombre" required className="mt-1 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600" />
              </div>
              <div>
                <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Correo Electrónico</Label>
                <Input id="email" type="email" placeholder="tu@ejemplo.com" required className="mt-1 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600" />
              </div>
              <div>
                <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">Mensaje</Label>
                <Textarea id="message" placeholder="Escribe tu mensaje aquí..." rows={5} required className="mt-1 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600" />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-3">
                Enviar Mensaje
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactForm;