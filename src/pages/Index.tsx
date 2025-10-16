import { MadeWithDyad } from "@/components/made-with-dyad";
import AboutSection from "@/components/AboutSection"; // Importamos el componente AboutSection

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Aquí puedes añadir otros componentes de tu página principal si los tienes */}
      <AboutSection /> {/* Renderizamos la sección "Nosotras" */}
      <MadeWithDyad />
    </div>
  );
};

export default Index;