import React from 'react';
import { MadeWithDyad } from "@/components/made-with-dyad";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CallToActionSection from '@/components/CallToActionSection';
import ContactSection from '@/components/ContactSection';
import AnimatedSection from '@/components/AnimatedSection';
import LatestBlogPostsSection from '@/components/LatestBlogPostsSection';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AnimatedSection>
          <AboutSection />
        </AnimatedSection>
        {/* ProgramsSection removed */}
        {/* TestimonialsSection removed */}
        <AnimatedSection>
          <LatestBlogPostsSection />
        </AnimatedSection>
        {/* GallerySection removed */}
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