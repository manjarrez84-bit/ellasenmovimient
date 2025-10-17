import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

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

  const linkClasses = cn(
    "font-bold transition-colors",
    scrolled
      ? "text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary-foreground"
      : "text-white hover:text-white/80"
  );

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-white/90 dark:bg-gray-800/90 shadow-md backdrop-blur-sm" : "bg-transparent"
    )}>
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.jpg" alt="Ellas en Movimiento A.C. Logo" className="h-10 w-auto" />
          <span className={cn(
            "text-2xl font-bold transition-colors",
            scrolled ? "text-primary dark:text-primary-foreground" : "text-white"
          )}>
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
          <Link to="/donate">
            <Button>Donar</Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className={cn(scrolled ? "text-primary" : "text-white border-white hover:text-white hover:bg-white/20")}>
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