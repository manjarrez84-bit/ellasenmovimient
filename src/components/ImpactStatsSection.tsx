import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Calendar, Users, Award, Heart } from 'lucide-react';

const stats = [
  {
    icon: <Calendar size={40} className="text-primary" />,
    value: "17+",
    label: "Años de Experiencia"
  },
  {
    icon: <Users size={40} className="text-primary" />,
    value: "Miles",
    label: "De Mujeres Apoyadas"
  },
  {
    icon: <Award size={40} className="text-primary" />,
    value: "500+",
    label: "Talleres Impartidos"
  },
  {
    icon: <Heart size={40} className="text-primary" />,
    value: "100%",
    label: "Compromiso y Dedicación"
  }
];

const ImpactStatsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-primary mb-12">Nuestro Impacto en Números</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 shadow-lg transition-transform transform hover:scale-105">
              <CardHeader className="flex flex-col items-center">
                {stat.icon}
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-muted-foreground font-semibold">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStatsSection;