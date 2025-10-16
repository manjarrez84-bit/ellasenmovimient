import { MadeWithDyad } from "@/components/made-with-dyad";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Aquí puedes añadir otros componentes de tu página principal si los tienes */}
      <div id="nosotras"> {/* Añadimos un ID para la navegación */}
        <AboutSection />
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;