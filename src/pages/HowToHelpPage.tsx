import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { HandHeart, DollarSign, Users, Facebook, Twitter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MadeWithDyad } from '@/components/made-with-dyad';

const HowToHelpPage = () => {
  const shareUrl = window.location.origin;
  const shareText = "Apoya a Ellas en Movimiento, A.C. a empoderar a mujeres y transformar vidas. ¡Tu ayuda hace la diferencia! #EllasEnMovimiento";
  
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-16 bg-muted/30 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-primary mb-8">Cómo Puedes Ayudar</h1>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              Tu apoyo es fundamental para que Ellas en Movimiento, A.C. pueda seguir transformando vidas. Hay muchas maneras de contribuir a nuestra causa.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 shadow-lg">
                <CardHeader className="flex flex-col items-center">
                  <DollarSign className="text-primary mb-4" size={40} />
                  <CardTitle className="text-2xl font-semibold mb-2">Haz una Donación</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Cada contribución económica nos permite mantener nuestros programas y llegar a más mujeres. Tu generosidad hace una diferencia real.
                  <div className="mt-6">
                    <Link to="/donate">
                      <Button>Donar Ahora</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 shadow-lg">
                <CardHeader className="flex flex-col items-center">
                  <HandHeart className="text-primary mb-4" size={40} />
                  <CardTitle className="text-2xl font-semibold mb-2">Sé Voluntario</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Ofrece tu tiempo y tus habilidades para apoyar en nuestros talleres, eventos o en la gestión diaria de la asociación.
                  <div className="mt-6">
                    <Link to="/volunteer">
                      <Button>Quiero Ser Voluntario</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 shadow-lg">
                <CardHeader className="flex flex-col items-center">
                  <Users className="text-primary mb-4" size={40} />
                  <CardTitle className="text-2xl font-semibold mb-2">Difunde Nuestra Causa</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Ayúdanos a crear conciencia sobre la violencia de género y la importancia de empoderar a las mujeres compartiendo nuestro mensaje.
                  <div className="mt-6 flex justify-center space-x-4">
                    <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer" aria-label="Compartir en Facebook">
                      <Button variant="outline" size="icon">
                        <Facebook className="h-5 w-5" />
                      </Button>
                    </a>
                    <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer" aria-label="Compartir en Twitter">
                      <Button variant="outline" size="icon">
                        <Twitter className="h-5 w-5" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default HowToHelpPage;