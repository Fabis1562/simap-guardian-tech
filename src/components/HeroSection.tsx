import { Button } from "@/components/ui/button";
import { Shield, Activity, AlertTriangle } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/90" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Title */}
          <div className="space-y-4">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-primary-foreground/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Shield className="w-12 h-12 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground">
              SIMAP
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium">
              Sistema Integral de Monitoreo y Alerta para Personal
            </p>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              Tecnología avanzada para la seguridad integral de trabajadores en entornos de riesgo. 
              Monitoreo en tiempo real, alertas inmediatas y control total.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <Activity className="w-8 h-8 text-primary-foreground mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Monitoreo Vital</h3>
              <p className="text-primary-foreground/80 text-sm">
                Seguimiento continuo de signos vitales y detección automática de emergencias
              </p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <Shield className="w-8 h-8 text-primary-foreground mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Seguridad Total</h3>
              <p className="text-primary-foreground/80 text-sm">
                Infraestructura inteligente que monitorea el ambiente y previene riesgos
              </p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <AlertTriangle className="w-8 h-8 text-primary-foreground mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Alertas Inmediatas</h3>
              <p className="text-primary-foreground/80 text-sm">
                Notificaciones en tiempo real para respuesta rápida ante emergencias
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-glow text-lg px-8 py-3"
              onClick={() => scrollToSection('solucion')}
            >
              Conocer la Solución
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-3"
              onClick={() => scrollToSection('monitoreo')}
            >
              Ver Demo en Vivo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;