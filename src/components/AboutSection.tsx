import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Goal, Heart, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Nosotras</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto dark:text-gray-300">
            Ellas en Movimiento, A.C. es una asociación sin fines de lucro dedicada a empoderar a mujeres que enfrentan violencia y pobreza, brindándoles herramientas y apoyo para transformar sus vidas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img src="/IMG-20251015-WA0013.jpg" alt="Mujeres en un taller" className="w-full h-full object-cover" />
          </div>
          
          <div className="space-y-6">
            <Tabs defaultValue="mission" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="mission">Misión</TabsTrigger>
                <TabsTrigger value="vision">Visión</TabsTrigger>
                <TabsTrigger value="values">Valores</TabsTrigger>
              </TabsList>
              <TabsContent value="mission" className="p-6 bg-gray-50 dark:bg-gray-800 rounded-b-lg">
                <div className="flex items-start space-x-4">
                  <Goal className="text-primary mt-1" size={24} />
                  <p className="text-gray-600 dark:text-gray-400">
                    Contribuir a elevar la calidad de vida de las personas de escasos recursos en especial de niñas y mujeres mexicanas, buscando su participación igualitaria en la sociedad. Ofreciéndoles de manera eficiente y sostenible servicios y productos que contribuyan a su desarrollo integral.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="vision" className="p-6 bg-gray-50 dark:bg-gray-800 rounded-b-lg">
                <div className="flex items-start space-x-4">
                  <Lightbulb className="text-primary mt-1" size={24} />
                  <p className="text-gray-600 dark:text-gray-400">
                    Ser una institución sólida, dinámica, ética y sostenible, líder en la oferta de oportunidades para las mujeres y niñas mexicanas y sus familias, operando con alta capacidad, eficiencia y estándares de calidad.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="values" className="p-6 bg-gray-50 dark:bg-gray-800 rounded-b-lg">
                <div className="flex items-start space-x-4">
                  <Heart className="text-primary mt-1" size={24} />
                  <p className="text-gray-600 dark:text-gray-400">
                    Solidaridad, Respeto, Integridad, Compromiso y Empatía son los pilares de nuestro trabajo diario.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;