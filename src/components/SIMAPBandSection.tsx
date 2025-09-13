import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Activity, AlertTriangle, Shield, Watch } from "lucide-react";
import smartwatchImage from "@/assets/smartwatch-interface.jpg";

const SIMAPBandSection = () => {
  const [watchData, setWatchData] = useState({
    heartRate: 78,
    spo2: 98,
    status: 'normal',
    alertActive: false,
    batteryLevel: 85
  });

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setWatchData(prev => ({
        ...prev,
        heartRate: Math.max(60, Math.min(130, prev.heartRate + (Math.random() - 0.5) * 8)),
        spo2: Math.max(85, Math.min(100, prev.spo2 + (Math.random() - 0.5) * 2)),
        batteryLevel: Math.max(0, prev.batteryLevel - 0.1)
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getHeartRateStatus = (hr: number) => {
    if (hr < 70 || hr > 110) return 'warning';
    return 'normal';
  };

  const getSpO2Status = (spo2: number) => {
    if (spo2 < 95) return 'danger';
    if (spo2 < 97) return 'warning';
    return 'normal';
  };

  return (
    <section id="simap-band" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            SIMAP-Band: Seguridad en tu Muñeca
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interfaz intuitiva del reloj inteligente diseñada para monitoreo continuo 
            y alertas inmediatas en entornos de alto riesgo
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Watch Interface Mockup */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Watch Frame */}
              <div className="w-80 h-80 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden">
                {/* Screen */}
                <div className="w-64 h-64 bg-slate-950 rounded-full flex items-center justify-center relative overflow-hidden">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{ backgroundImage: `url(${smartwatchImage})` }}
                  />
                  
                  {/* Content Overlay */}
                  <div className="relative z-10 text-white text-center space-y-4 p-6">
                    {/* Time */}
                    <div className="text-lg font-light opacity-80">
                      {new Date().toLocaleTimeString('es-ES', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </div>
                    
                    {/* Heart Rate */}
                    <div className="flex items-center justify-center space-x-2">
                      <Heart className={`w-6 h-6 ${getHeartRateStatus(watchData.heartRate) === 'warning' ? 'text-red-400' : 'text-red-500'} animate-pulse`} />
                      <span className="text-2xl font-bold">{Math.round(watchData.heartRate)}</span>
                      <span className="text-sm opacity-80">bpm</span>
                    </div>
                    
                    {/* SpO2 */}
                    <div className="flex items-center justify-center space-x-2">
                      <Activity className={`w-5 h-5 ${getSpO2Status(watchData.spo2) === 'danger' ? 'text-red-400' : getSpO2Status(watchData.spo2) === 'warning' ? 'text-yellow-400' : 'text-blue-400'}`} />
                      <span className="text-xl font-semibold">{Math.round(watchData.spo2)}%</span>
                      <span className="text-xs opacity-80">SpO₂</span>
                    </div>
                    
                    {/* Status Indicator */}
                    <div className="flex items-center justify-center space-x-2">
                      {watchData.alertActive ? (
                        <>
                          <AlertTriangle className="w-5 h-5 text-red-400 animate-pulse" />
                          <span className="text-sm text-red-400">ALERTA ACTIVA</span>
                        </>
                      ) : (
                        <>
                          <Shield className="w-5 h-5 text-green-400" />
                          <span className="text-sm text-green-400">SEGURO</span>
                        </>
                      )}
                    </div>
                    
                    {/* Battery */}
                    <div className="absolute bottom-2 right-2 text-xs opacity-60">
                      {Math.round(watchData.batteryLevel)}%
                    </div>
                  </div>
                </div>
                
                {/* Watch Crown */}
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-8 bg-slate-700 rounded-l-lg"></div>
              </div>
              
              {/* Watch Band */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 w-12 h-16 bg-slate-700 rounded-t-xl"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 w-12 h-16 bg-slate-700 rounded-b-xl"></div>
            </div>
          </div>

          {/* Features and Specifications */}
          <div className="space-y-8">
            {/* Key Features */}
            <Card className="shadow-corporate">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Watch className="w-6 h-6 text-primary" />
                  <span>Características Principales</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
                    <Heart className="w-6 h-6 text-destructive mt-1" />
                    <div>
                      <h4 className="font-semibold">Monitoreo Cardíaco Continuo</h4>
                      <p className="text-sm text-muted-foreground">
                        Seguimiento en tiempo real de la frecuencia cardíaca con detección 
                        automática de arritmias y patrones anómalos
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
                    <Activity className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <h4 className="font-semibold">Saturación de Oxígeno (SpO₂)</h4>
                      <p className="text-sm text-muted-foreground">
                        Medición precisa de los niveles de oxígeno en sangre para 
                        detectar hipoxia temprana
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
                    <AlertTriangle className="w-6 h-6 text-warning mt-1" />
                    <div>
                      <h4 className="font-semibold">Detección de Caídas</h4>
                      <p className="text-sm text-muted-foreground">
                        Algoritmos avanzados para identificar caídas y accidentes, 
                        activando alertas automáticas
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
                    <Shield className="w-6 h-6 text-success mt-1" />
                    <div>
                      <h4 className="font-semibold">Botón de Pánico</h4>
                      <p className="text-sm text-muted-foreground">
                        Activación manual de emergencias con localización GPS 
                        y transmisión inmediata al centro de control
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Live Data Display */}
            <Card className="shadow-corporate">
              <CardHeader>
                <CardTitle>Datos en Tiempo Real</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Heart className="w-5 h-5 text-destructive" />
                      <span className="font-semibold">Frecuencia Cardíaca</span>
                    </div>
                    <div className="text-3xl font-bold text-destructive">
                      {Math.round(watchData.heartRate)}
                    </div>
                    <div className="text-sm text-muted-foreground">bpm</div>
                    <Badge 
                      variant={getHeartRateStatus(watchData.heartRate) === 'warning' ? 'destructive' : 'default'}
                      className="mt-2"
                    >
                      {getHeartRateStatus(watchData.heartRate) === 'warning' ? 'Anormal' : 'Normal'}
                    </Badge>
                  </div>
                  
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Activity className="w-5 h-5 text-accent" />
                      <span className="font-semibold">SpO₂</span>
                    </div>
                    <div className="text-3xl font-bold text-accent">
                      {Math.round(watchData.spo2)}%
                    </div>
                    <div className="text-sm text-muted-foreground">Saturación</div>
                    <Badge 
                      variant={
                        getSpO2Status(watchData.spo2) === 'danger' ? 'destructive' : 
                        getSpO2Status(watchData.spo2) === 'warning' ? 'secondary' : 'default'
                      }
                      className="mt-2"
                    >
                      {getSpO2Status(watchData.spo2) === 'danger' ? 'Crítico' : 
                       getSpO2Status(watchData.spo2) === 'warning' ? 'Bajo' : 'Normal'}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SIMAPBandSection;