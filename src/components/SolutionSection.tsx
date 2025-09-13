import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Watch, Wifi, Monitor, ArrowRight, Heart, Shield, AlertTriangle } from "lucide-react";

const SolutionSection = () => {
  return (
    <section id="solucion" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            La Solución Integral: SIMAP
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un ecosistema tecnológico completo que integra tres componentes clave 
            para garantizar la seguridad total de los trabajadores
          </p>
        </div>

        {/* Components Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* SIMAP-Band */}
          <Card className="group hover:shadow-corporate transition-all duration-300 hover:-translate-y-2">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                <Watch className="w-10 h-10 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl text-primary">SIMAP-Band</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-center">
                Pulsera inteligente de monitoreo personal
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-destructive" />
                  <span className="text-sm">Monitoreo de frecuencia cardíaca</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-xs text-accent-foreground font-bold">O₂</span>
                  </div>
                  <span className="text-sm">Saturación de oxígeno (SpO₂)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="w-5 h-5 text-warning" />
                  <span className="text-sm">Detección automática de caídas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-sm">Botón de pánico integrado</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* SIMAP-Sentinel */}
          <Card className="group hover:shadow-corporate transition-all duration-300 hover:-translate-y-2">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-safety rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                <Wifi className="w-10 h-10 text-success-foreground" />
              </div>
              <CardTitle className="text-2xl text-success">SIMAP-Sentinel</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-center">
                Módulos de infraestructura inteligente
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-warning rounded-full"></div>
                  <span className="text-sm">Detección de gases peligrosos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-accent rounded-full"></div>
                  <span className="text-sm">Monitoreo de riesgo de inundación</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Wifi className="w-5 h-5 text-success" />
                  <span className="text-sm">Red LoRaWAN de largo alcance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Monitor className="w-5 h-5 text-primary" />
                  <span className="text-sm">Transmisión en tiempo real</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* SIMAP-Angel */}
          <Card className="group hover:shadow-corporate transition-all duration-300 hover:-translate-y-2">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                <Monitor className="w-10 h-10 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl text-primary">SIMAP-Angel</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-center">
                Sistema central de monitoreo y control
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Monitor className="w-5 h-5 text-primary" />
                  <span className="text-sm">Dashboard en tiempo real</span>
                </div>
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="w-5 h-5 text-warning" />
                  <span className="text-sm">Alertas automáticas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-success" />
                  <span className="text-sm">Generación de reportes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-primary rounded-full"></div>
                  <span className="text-sm">Historial completo</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Data Flow Diagram */}
        <div className="bg-card rounded-lg p-8 shadow-corporate">
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">
            Flujo de Datos: De la Mina al Centro de Control
          </h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center">
                <Watch className="w-12 h-12 text-primary-foreground" />
              </div>
              <h4 className="font-semibold text-primary">Trabajador</h4>
              <p className="text-sm text-muted-foreground">SIMAP-Band recolecta datos vitales</p>
            </div>

            <ArrowRight className="w-8 h-8 text-muted-foreground hidden md:block" />
            <div className="w-8 h-8 text-muted-foreground md:hidden rotate-90">
              <ArrowRight />
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-20 h-20 bg-gradient-safety rounded-full flex items-center justify-center">
                <Wifi className="w-12 h-12 text-success-foreground" />
              </div>
              <h4 className="font-semibold text-success">Sentinel</h4>
              <p className="text-sm text-muted-foreground">Módulos reciben y retransmiten señal</p>
            </div>

            <ArrowRight className="w-8 h-8 text-muted-foreground hidden md:block" />
            <div className="w-8 h-8 text-muted-foreground md:hidden rotate-90">
              <ArrowRight />
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center">
                <Monitor className="w-12 h-12 text-primary-foreground" />
              </div>
              <h4 className="font-semibold text-primary">Centro de Control</h4>
              <p className="text-sm text-muted-foreground">SIMAP-Angel procesa y muestra datos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;