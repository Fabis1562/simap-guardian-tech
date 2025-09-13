import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield, User, Lock, LogIn, HardHat, UserCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LoginSection = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.username || !formData.password || !formData.role) {
      toast({
        title: "Error de validación",
        description: "Por favor, complete todos los campos requeridos.",
        variant: "destructive",
      });
      return;
    }

    // Simulate login process
    toast({
      title: "Acceso exitoso",
      description: `Bienvenido ${formData.username}. Rol: ${formData.role}`,
      variant: "default",
    });

    // Reset form
    setFormData({ username: '', password: '', role: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="ingreso" className="py-20 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Acceso para Mineros y Supervisores
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Ingrese sus credenciales para acceder al sistema de monitoreo SIMAP
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Login Card */}
            <Card className="shadow-2xl bg-card/95 backdrop-blur-sm">
              <CardHeader className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-10 h-10 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl text-primary">Iniciar Sesión</CardTitle>
                <p className="text-muted-foreground">
                  Acceda al sistema de monitoreo de seguridad
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Username */}
                  <div className="space-y-2">
                    <Label htmlFor="username" className="text-sm font-medium">
                      Nombre de Usuario
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="username"
                        type="text"
                        placeholder="Ingrese su nombre de usuario"
                        value={formData.username}
                        onChange={(e) => handleInputChange('username', e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium">
                      Contraseña
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="Ingrese su contraseña"
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  {/* Role Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="role" className="text-sm font-medium">
                      Rol
                    </Label>
                    <Select value={formData.role} onValueChange={(value) => handleInputChange('role', value)}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Seleccione su rol" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="minero">
                          <div className="flex items-center space-x-2">
                            <HardHat className="w-4 h-4" />
                            <span>Minero</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="supervisor">
                          <div className="flex items-center space-x-2">
                            <UserCheck className="w-4 h-4" />
                            <span>Supervisor</span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary shadow-glow text-lg py-3"
                    size="lg"
                  >
                    <LogIn className="w-5 h-5 mr-2" />
                    Ingresar al Sistema
                  </Button>
                </form>

                {/* Additional Info */}
                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground text-center">
                    ¿Problemas para acceder? Contacte al administrador del sistema
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Info Panel */}
            <div className="space-y-8">
              {/* Access Levels */}
              <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20">
                <CardHeader>
                  <CardTitle className="text-primary-foreground flex items-center space-x-2">
                    <UserCheck className="w-6 h-6" />
                    <span>Niveles de Acceso</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 p-3 bg-primary-foreground/10 rounded-lg">
                      <HardHat className="w-5 h-5 text-primary-foreground mt-1" />
                      <div>
                        <h4 className="font-semibold text-primary-foreground">Minero</h4>
                        <p className="text-sm text-primary-foreground/80">
                          Acceso a datos personales, estado de salud y alertas individuales
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 p-3 bg-primary-foreground/10 rounded-lg">
                      <UserCheck className="w-5 h-5 text-primary-foreground mt-1" />
                      <div>
                        <h4 className="font-semibold text-primary-foreground">Supervisor</h4>
                        <p className="text-sm text-primary-foreground/80">
                          Control total del sistema, monitoreo de todos los trabajadores y generación de reportes
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Security Features */}
              <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20">
                <CardHeader>
                  <CardTitle className="text-primary-foreground flex items-center space-x-2">
                    <Shield className="w-6 h-6" />
                    <span>Seguridad del Sistema</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-primary-foreground/80 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span>Autenticación de doble factor</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span>Encriptación de datos end-to-end</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span>Registro de auditoría completo</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span>Sesiones con tiempo límite</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;