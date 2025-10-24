import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const WhoWeAreSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-primary mb-8 text-balance">¿Quiénes somos?</h2>
        <Card className="max-w-4xl mx-auto p-8 shadow-lg">
          <CardContent className="text-xl text-foreground text-justify space-y-6">
            <p className="text-balance">
              Ellas en Movimiento A.C. es una organización de la sociedad civil sin fines de lucro que trabaja desde hace más de 17 años en el estado de Nuevo León, con el compromiso de mejorar la calidad de vida de mujeres, niñas y sus familias. Nuestra misión es visibilizar la problemática de Ellas y ampliar espacios de participación y desarrollo de las mujeres en la vida pública con el fin de lograr avances en su empoderamiento como personas y como ciudadanas. Nos guía una mirada basada en los derechos humanos, la equidad de género y la sustentabilidad.
            </p>
            <p className="text-balance">
              En Ellas en Movimiento A.C. trabajamos principalmente con mujeres, niñas, niños y adolescentes que habitan en contextos de vulnerabilidad social dentro del estado de Nuevo León, especialmente en zonas urbanas marginadas de Monterrey, como el polígono de pobreza No. 66. Estos grupos enfrentan múltiples carencias que afectan su bienestar, su participación en la vida pública y sus oportunidades de desarrollo.
            </p>
            <p className="text-balance">
              Nuestra visión es ser una fuerza transformadora y generadora de respuestas para un avance 
              significativo en el desarrollo integral de Ellas habiendo logrado su empoderamiento. 
            </p>
            <p className="text-balance">
              Trabajamos en alianza con organizaciones, instituciones académicas, sector público y empresas socialmente responsables, para sumar esfuerzos locales a una agenda global, alineando nuestros programas a los Objetivos de Desarrollo Sostenible 2030.
            </p>
            <p className="text-balance">
              Nuestra intervención se enfoca en Ellas porque históricamente han sido excluidas de los espacios donde se toman decisiones y viven situaciones que comprometen su salud, seguridad y acceso a derechos fundamentales.
            </p>
            <p className="text-balance">
              En este contexto, brindar atención integral a estos grupos prioritarios no es solo urgente, sino también esencial para generar condiciones de equidad y justicia social. Al trabajar desde un enfoque comunitario, con programas de empoderamiento, cultura ecológica y educación ambiental, primera infancia y fortalecimiento emocional, oportunidades productivas para Ellas buscamos romper con las barreras estructurales que impiden el ejercicio pleno de sus derechos y su capacidad para transformar sus realidades.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WhoWeAreSection;