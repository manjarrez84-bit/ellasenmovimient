import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Utensils, HeartHandshake, Home, Leaf, Users } from 'lucide-react';

const detailedPrograms = [
  {
    title: "REDPARADAHR",
    description: "Distribución de alimentos nutritivos.",
    icon: <Utensils className="h-6 w-6 text-primary" />,
  },
  {
    title: "PROGENDER",
    description: "Gestión de emociones y prevención de violencia de género. Se promueven terapias grupales, con un modelo propio y formación de redes y grupos de apoyo entre mujeres en situación de violencia.",
    icon: <HeartHandshake className="h-6 w-6 text-primary" />,
  },
  {
    title: "Sistema de Cuidados",
    description: "Contribuyendo al reconocimiento de las aportaciones de la economía de cuidados en el PIB del país.",
    icon: <Home className="h-6 w-6 text-primary" />,
  },
  {
    title: "Programa EDUCAM (Educación Ecológica y Cultura Ambiental)",
    description: "Talleres de sensibilización en temas medioambientales para aportar al logro de los ODS para el 2030.",
    icon: <Leaf className="h-6 w-6 text-primary" />,
  },
  {
    title: "Fortalecimiento Comunitario",
    description: "Contribuir a la formación de liderazgos colectivos para el mejoramiento del entorno, la distribución de los recursos naturales a su disposición de manera equitativa y trabajar para un desarrollo sustentable y ser una comunidad sostenible con rostro humano.",
    icon: <Users className="h-6 w-6 text-primary" />,
  },
];

const DetailedProgramsList = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center text-balance">Programas Específicos</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {detailedPrograms.map((program, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center space-x-4 p-4 md:p-6">
                {program.icon}
                <CardTitle className="text-xl font-semibold text-primary text-balance">{program.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0 md:px-6 md:pb-6">
                <p className="text-foreground text-balance">{program.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedProgramsList;