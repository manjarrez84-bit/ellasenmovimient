import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '../theme-toggle';

const navItems = [
  { href: '/', label: 'Inicio' },
  { href: '/about', label: 'Nosotras' },
  { href: '/programs', label: 'Programas' },
  { href: '/blog', label: 'Blog' },
  { href: '/how-to-help', label: 'Cómo Ayudar' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contacto' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClasses = "font-bold text-foreground hover:text-muted-foreground";

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 bg-background",
      scrolled ? "shadow-md" : ""
    )}>
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.jpg" alt="Ellas en Movimiento A.C. Logo" className="h-10 w-auto" />
          <span className="text-2xl font-bold text-foreground">
            Ellas en Movimiento
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link key={item.href} to={item.href} className={linkClasses}>
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
          <Link to="/donate">
            <Button>Donar</Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <div className="flex flex-col space-y-6 p-6">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link to={item.href}>{item.label}</Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Link to="/donate">
                    <Button className="w-full">Donar</Button>
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;