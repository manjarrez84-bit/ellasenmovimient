import { MadeWithDyad } from "@/components/made-with-dyad";
import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection"; // Importamos HeroSection
import ContactForm from "@/components/ContactForm"; // Importamos ContactForm

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection /> {/* Añadimos la sección principal */}
      <div id="nosotras">
        <AboutSection />
      </div>
      <ContactForm /> {/* Añadimos el formulario de contacto */}
      <MadeWithDyad />
    </div>
  );
};

export default Index;