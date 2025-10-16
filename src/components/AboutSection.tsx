import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Goal, Heart, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-primary mb-12">Nosotras</h2>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto dark:text-gray-300">
          Ellas en Movimiento, A.C. es una asociación sin fines de lucro dedicada a empoderar a mujeres que enfrentan violencia y pobreza, brindándoles herramientas y apoyo para transformar sus vidas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 shadow-lg dark:bg-gray-700 dark:border-gray-600">
            <CardHeader className="flex flex-col items-center">
              <Goal className="text-primary mb-4" size={40} />
              <CardTitle className="text-2xl font-semibold mb-2 dark:text-primary-foreground">Nuestra Misión</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600 dark:text-gray-400">
              Contribuir a elevar la calidad de vida de las personas de escasos recursos en especial de niñas y mujeres mexicanas, buscando su participación igualitaria en la sociedad. Ofreciéndoles de manera eficiente y sostenible servicios y productos que contribuyan a su desarrollo integral.
            </CardContent>
          </Card>

          <Card className="p-6 shadow-lg dark:bg-gray-700 dark:border-gray-600">
            <CardHeader className="flex flex-col items-center">
              <Lightbulb className="text-primary mb-4" size={40} />
              <CardTitle className="text-2xl font-semibold mb-2 dark:text-primary-foreground">Nuestra Visión</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600 dark:text-gray-400">
              Ser una institución sólida, dinámica, ética y sostenible, líder en la oferta de servicios para las mujeres y niñas mexicanas, y sus familias, operando con alta capacidad, eficiencia y estándares de calidad.
            </CardContent>
          </Card>

          <Card className="p-6 shadow-lg dark:bg-gray-700 dark:border-gray-600">
            <CardHeader className="flex flex-col items-center">
              <Heart className="text-primary mb-4" size={40} />
              <CardTitle className="text-2xl font-semibold mb-2 dark:text-primary-foreground">Nuestros Valores</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600 dark:text-gray-400">
              Solidaridad, Respeto, Integridad, Compromiso y Empatía son los pilares de nuestro trabajo diario.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;