import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Handshake, Shield, Briefcase } from 'lucide-react';

const ProgramsSection = () => {
  const programs = [
    {
      icon: <Shield size={40} className="text-primary mb-4" />,
      title: "Asesoría Legal",
      description: "Ofrecemos orientación y acompañamiento legal gratuito en casos de violencia de género y derechos civiles."
    },
    {
      icon: <Handshake size={40} className="text-primary mb-4" />,
      title: "Apoyo Psicológico",
      description: "Brindamos terapia individual y grupal para la recuperación emocional y el fortalecimiento de la autoestima."
    },
    {
      icon: <Briefcase size={40} className="text-primary mb-4" />,
      title: "Capacitación Laboral",
      description: "Programas de formación y talleres para el desarrollo de habilidades que faciliten la inserción laboral."
    },
    {
      icon: <BookOpen size={40} className="text-primary mb-4" />,
      title: "Educación y Sensibilización",
      description: "Talleres y charlas sobre derechos de las mujeres, prevención de la violencia y empoderamiento."
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-primary mb-12 text-balance">Nuestros Programas</h2>
        <p className="text-lg text-foreground mb-12 max-w-3xl mx-auto text-balance">
          Trabajamos en diversas áreas para ofrecer un apoyo integral a las mujeres, adaptándonos a sus necesidades específicas.
        </p>

        {/* Texto modificado con espaciado corregido y justificación aplicada */}
        <div className="max-w-4xl mx-auto mb-12 p-6 bg-background rounded-lg shadow-md text-left">
          <p className="text-lg text-foreground text-justify text-balance">
            Nuestros programas están diseñados para abordar las necesidades de las mujeres en situación de vulnerabilidad, enfocándose en tres pilares fundamentales: 
            <span className="font-bold text-primary"> Seguridad, Autonomía y Empoderamiento.</span>
            A través de un enfoque integral, buscamos no solo atender la emergencia, sino también construir un camino sostenible hacia la independencia y el bienestar.
          </p>
        </div>
        {/* Fin del texto modificado */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
              <CardHeader className="flex flex-col items-center">
                {program.icon}
                <CardTitle className="text-xl font-semibold mb-2 text-balance">{program.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-foreground text-balance">
                {program.description}
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Imagen logros.png eliminada */}
      </div>
    </section>
  );
};

export default ProgramsSection;