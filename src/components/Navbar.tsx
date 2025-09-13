import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield, Activity, Watch, LogIn } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-card/95 backdrop-blur-md border-b border-border z-50 shadow-corporate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="text-xl font-bold text-primary">SIMAP</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('solucion')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              La Solución
            </button>
            <button
              onClick={() => scrollToSection('monitoreo')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Monitoreo
            </button>
            <button
              onClick={() => scrollToSection('simap-band')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              SIMAP-Band
            </button>
            <button
              onClick={() => scrollToSection('ingreso')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Acceso
            </button>
            <Button 
              variant="default" 
              onClick={() => scrollToSection('ingreso')}
              className="bg-gradient-primary shadow-glow"
            >
              <LogIn className="w-4 h-4 mr-2" />
              Ingresar
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('solucion')}
                className="text-left text-muted-foreground hover:text-primary transition-colors py-2"
              >
                La Solución
              </button>
              <button
                onClick={() => scrollToSection('monitoreo')}
                className="text-left text-muted-foreground hover:text-primary transition-colors py-2"
              >
                Monitoreo
              </button>
              <button
                onClick={() => scrollToSection('simap-band')}
                className="text-left text-muted-foreground hover:text-primary transition-colors py-2"
              >
                SIMAP-Band
              </button>
              <button
                onClick={() => scrollToSection('ingreso')}
                className="text-left text-muted-foreground hover:text-primary transition-colors py-2"
              >
                Acceso
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;