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
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WhoWeAreSection;