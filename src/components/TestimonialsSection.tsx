import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Gracias a 'Ellas en Movimiento', encontré la fuerza para empezar de nuevo. El apoyo legal y emocional fue clave en mi proceso. Hoy, me siento segura y con un futuro.",
      name: "Ana G.",
    },
    {
      quote: "Los talleres de capacitación me dieron las herramientas que necesitaba para emprender mi propio negocio. No solo aprendí un oficio, sino que recuperé mi independencia.",
      name: "Laura M.",
    },
    {
      quote: "Aquí encontré una red de apoyo incondicional. Saber que no estaba sola me dio el valor para salir de una situación muy difícil. Estaré eternamente agradecida.",
      name: "Sofía R.",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-primary mb-12 dark:text-primary-foreground">Historias de Impacto</h2>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto dark:text-gray-300">
          Escucha las voces de algunas de las mujeres a las que hemos tenido el privilegio de apoyar.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col justify-between p-6 shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <Quote className="h-8 w-8 text-primary" />
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600 italic dark:text-gray-400">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter>
                <p className="font-semibold text-primary dark:text-primary-foreground">- {testimonial.name}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;