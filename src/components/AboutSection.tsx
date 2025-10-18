import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Goal, Heart, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Nosotras</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
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
              <TabsContent value="mission" className="p-6 bg-muted/50 rounded-b-lg">
                <div className="flex items-start space-x-4">
                  <Goal className="text-primary mt-1" size={24} />
                  <p className="text-muted-foreground">
                    Contribuir a elevar la calidad de vida de las personas de escasos recursos en especial de niñas y mujeres mexicanas, buscando su participación igualitaria en la sociedad. Ofreciéndoles de manera eficiente y sostenible servicios y productos que contribuyan a su desarrollo integral.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="vision" className="p-6 bg-muted/50 rounded-b-lg">
                <div className="flex items-start space-x-4">
                  <Lightbulb className="text-primary mt-1" size={24} />
                  <p className="text-muted-foreground">
                    Ser una fuerza transformadora y generadora de respuestas para un avance significativo en el desarrollo integral de Ellas habiendo logrado su empoderamiento.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="values" className="p-6 bg-muted/50 rounded-b-lg">
                <div className="flex items-start space-x-4">
                  <Heart className="text-primary mt-1" size={24} />
                  <p className="text-muted-foreground">
                    Dignidad. Sororidad y solidaridad. Empoderamiento femenino. Equidad. Libertad.
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