import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Heart, Activity, AlertTriangle, Shield, MapPin } from "lucide-react";
import mineMapImage from "@/assets/mine-map.jpg";

interface Worker {
  id: number;
  name: string;
  heartRate: number;
  spo2: number;
  status: 'safe' | 'warning' | 'danger';
  zone: string;
  gasRisk: boolean;
  x: number;
  y: number;
}

const MonitoringSection = () => {
  const [workers, setWorkers] = useState<Worker[]>([
    { id: 1, name: "Carlos Mendoza", heartRate: 78, spo2: 98, status: 'safe', zone: "Túnel A", gasRisk: false, x: 25, y: 35 },
    { id: 2, name: "Ana Rodriguez", heartRate: 92, spo2: 94, status: 'warning', zone: "Túnel B", gasRisk: true, x: 65, y: 20 },
    { id: 3, name: "Miguel Santos", heartRate: 85, spo2: 97, status: 'safe', zone: "Zona Central", gasRisk: false, x: 45, y: 60 },
    { id: 4, name: "Sofia Herrera", heartRate: 115, spo2: 88, status: 'danger', zone: "Túnel C", gasRisk: true, x: 80, y: 75 },
    { id: 5, name: "Roberto Luna", heartRate: 82, spo2: 96, status: 'safe', zone: "Entrada", gasRisk: false, x: 15, y: 80 },
  ]);

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setWorkers(prevWorkers => 
        prevWorkers.map(worker => ({
          ...worker,
          heartRate: Math.max(60, Math.min(130, worker.heartRate + (Math.random() - 0.5) * 10)),
          spo2: Math.max(85, Math.min(100, worker.spo2 + (Math.random() - 0.5) * 3)),
          status: worker.heartRate > 110 || worker.spo2 < 90 ? 'danger' : 
                   worker.heartRate > 100 || worker.spo2 < 95 ? 'warning' : 'safe'
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'safe': return 'bg-success';
      case 'warning': return 'bg-warning';
      case 'danger': return 'bg-destructive';
      default: return 'bg-muted';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'safe': return 'Seguro';
      case 'warning': return 'Precaución';
      case 'danger': return 'Peligro';
      default: return 'Desconocido';
    }
  };

  return (
    <section id="monitoreo" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Monitoreo en Tiempo Real: El Mapa de Seguridad
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interfaz de usuario del sistema SIMAP-Angel para supervisión continua 
            de trabajadores y condiciones ambientales
          </p>
        </div>

        {/* Mine Map */}
        <Card className="mb-8 shadow-corporate">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="w-6 h-6 text-primary" />
              <span>Mapa de la Mina - Ubicaciones en Tiempo Real</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <img 
                src={mineMapImage} 
                alt="Mapa de la mina" 
                className="w-full h-96 object-cover rounded-lg"
              />
              
              {/* Worker Locations */}
              {workers.map((worker) => (
                <div
                  key={worker.id}
                  className={`absolute w-4 h-4 rounded-full ${getStatusColor(worker.status)} 
                             border-2 border-white shadow-lg animate-pulse cursor-pointer
                             hover:scale-150 transition-transform duration-200`}
                  style={{ 
                    left: `${worker.x}%`, 
                    top: `${worker.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  title={`${worker.name} - ${getStatusText(worker.status)}`}
                />
              ))}
              
              {/* Legend */}
              <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg p-4 space-y-2">
                <h4 className="font-semibold text-sm">Estado de Trabajadores</h4>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                  <span className="text-xs">Seguro</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-warning rounded-full"></div>
                  <span className="text-xs">Precaución</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-destructive rounded-full"></div>
                  <span className="text-xs">Peligro</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Workers Panel */}
        <Card className="shadow-corporate">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <User className="w-6 h-6 text-primary" />
              <span>Panel de Trabajadores Activos</span>
              <Badge variant="secondary" className="ml-auto">
                {workers.length} trabajadores en mina
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Trabajador</th>
                    <th className="text-left py-3 px-4 font-semibold">Estado</th>
                    <th className="text-left py-3 px-4 font-semibold">Ubicación</th>
                    <th className="text-left py-3 px-4 font-semibold">Frecuencia Cardíaca</th>
                    <th className="text-left py-3 px-4 font-semibold">SpO₂</th>
                    <th className="text-left py-3 px-4 font-semibold">Riesgos</th>
                  </tr>
                </thead>
                <tbody>
                  {workers.map((worker) => (
                    <tr key={worker.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${getStatusColor(worker.status)}`}></div>
                          <span className="font-medium">{worker.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <Badge 
                          variant={worker.status === 'safe' ? 'default' : 'destructive'}
                          className={
                            worker.status === 'safe' ? 'bg-success' : 
                            worker.status === 'warning' ? 'bg-warning' : 'bg-destructive'
                          }
                        >
                          {getStatusText(worker.status)}
                        </Badge>
                      </td>
                      <td className="py-4 px-4 text-muted-foreground">{worker.zone}</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2">
                          <Heart className={`w-4 h-4 ${worker.heartRate > 100 ? 'text-destructive' : 'text-success'}`} />
                          <span className={worker.heartRate > 100 ? 'text-destructive font-semibold' : 'text-foreground'}>
                            {Math.round(worker.heartRate)} bpm
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2">
                          <Activity className={`w-4 h-4 ${worker.spo2 < 95 ? 'text-destructive' : 'text-success'}`} />
                          <span className={worker.spo2 < 95 ? 'text-destructive font-semibold' : 'text-foreground'}>
                            {Math.round(worker.spo2)}%
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        {worker.gasRisk ? (
                          <div className="flex items-center space-x-2">
                            <AlertTriangle className="w-4 h-4 text-warning" />
                            <span className="text-warning text-sm font-medium">Gas Peligroso</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-2">
                            <Shield className="w-4 h-4 text-success" />
                            <span className="text-success text-sm">Ambiente Seguro</span>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Summary Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-6 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-success">
                  {workers.filter(w => w.status === 'safe').length}
                </div>
                <div className="text-sm text-muted-foreground">Trabajadores Seguros</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-warning">
                  {workers.filter(w => w.status === 'warning').length}
                </div>
                <div className="text-sm text-muted-foreground">En Precaución</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-destructive">
                  {workers.filter(w => w.status === 'danger').length}
                </div>
                <div className="text-sm text-muted-foreground">En Peligro</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-warning">
                  {workers.filter(w => w.gasRisk).length}
                </div>
                <div className="text-sm text-muted-foreground">Riesgo Ambiental</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MonitoringSection;