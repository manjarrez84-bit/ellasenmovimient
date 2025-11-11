import React from 'react';
import { MadeWithDyad } from "@/components/made-with-dyad";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/HeroSection';
import CallToActionSection from '@/components/CallToActionSection';
import ContactSection from '@/components/ContactSection';
import AnimatedSection from '@/components/AnimatedSection';
import LatestBlogPostsSection from '@/components/LatestBlogPostsSection';
import SupabaseStatusCheck from '@/components/SupabaseStatusCheck'; // Importar el nuevo componente

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20"> {/* Añadido pt-20 aquí */}
        
        <SupabaseStatusCheck /> {/* Mostrar el estado de Supabase aquí */}

        <HeroSection />
        
        {/* AnimatedSection removed as it was empty after AboutSection removal */}
        
        <AnimatedSection>
          <LatestBlogPostsSection />
        </AnimatedSection>
        <AnimatedSection>
          <CallToActionSection />
        </AnimatedSection>
        <AnimatedSection>
          <ContactSection />
        </AnimatedSection>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;