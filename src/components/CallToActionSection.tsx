import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CallToActionSection = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground text-center dark:bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-balance">Tu Apoyo Hace la Diferencia</h2>
        <p className="text-xl mb-10 max-w-3xl mx-auto text-balance">
          Cada donación, cada hora de voluntariado, nos permite seguir brindando esperanza y oportunidades a más mujeres.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link to="/donate">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-3">
              Donar Ahora
            </Button>
          </Link>
          <Link to="/volunteer">
            {/* Ajuste de estilo para el botón secundario: outline con colores invertidos para el fondo primary */}
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-3"
            >
              Sé Voluntario
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;