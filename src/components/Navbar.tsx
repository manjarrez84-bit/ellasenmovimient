"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between px-4 md:px-6">
        <Link to="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-lg">Ellas en Movimiento</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <Link
            to="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Inicio
          </Link>
          <Link
            to="/#nosotras" // Enlace a la sección Nosotras
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Nosotras
          </Link>
          {/* Aquí puedes añadir más enlaces a futuras secciones */}
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 py-6">
                <Link
                  to="/"
                  className="text-lg font-semibold hover:text-primary"
                >
                  Inicio
                </Link>
                <Link
                  to="/#nosotras" // Enlace a la sección Nosotras
                  className="text-lg font-semibold hover:text-primary"
                >
                  Nosotras
                </Link>
                {/* Aquí puedes añadir más enlaces a futuras secciones */}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;