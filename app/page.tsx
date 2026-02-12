import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SiteHeader from "@/components/ui/site-header"
import Footer from "@/components/ui/footer";
import { Package } from "lucide-react";
import Link from "next/link";
import {
  Play,
  ChevronDown,
  Download,
  Phone,
  Shield,
  Gauge,
  Droplets,
  MapPin,
  Award,
  Settings,
  Mail,
} from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <SiteHeader />
      {/* Hero Section */}

      <section
        className="relative h-[70vh] md:min-h-screen bg-slate-950 overflow-hidden"
        id="inicio"
      >
        {/* Fondo */}
        <div className="absolute inset-0">
          <Image
            src="/images/principal.png"
            alt="CÓNDOR C80 en campo de soja"
            fill
            priority
            className="object-cover origin-center max-md:scale-[1.18] max-md:translate-y-[-40px]"
          />
          <div className="absolute inset-0 bg-slate-950/55" />
        </div>

        {/* Contenido */}
        <div className="relative z-10 h-full w-full text-white">
          {/* TÍTULO */}
          <div className="absolute top-[12%] left-1/2 -translate-x-1/2 text-center px-4 w-full">
            <h1 className="whitespace-nowrap font-bold tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
              CÓNDOR C80
            </h1>
          </div>

          {/* TEXTO INFERIOR */}
          <div className="absolute bottom-[22%] left-1/2 -translate-x-1/2 text-center px-4 w-[min(90%,850px)]">
            <p className="text-slate-300 leading-relaxed text-[clamp(0.95rem,1.2vw,1.15rem)]">
              Revolucionando la agricultura con tecnología avanzada de pulverización,
              sistemas de vuelo inteligentes y eficiencia incomparable para operaciones
              agrícolas modernas.
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-blue-400 animate-bounce z-10">
          <ChevronDown className="w-8 h-8" />
        </div>
      </section>


      {/* Product Overview */}
      <section className="py-16 bg-slate-900" id="caracteristicas">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Construido para la Excelencia Agrícola</h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              El CÓNDOR C80 representa la cúspide de la tecnología de drones agrícolas, combinando sistemas avanzados de
              pulverización, capacidades de vuelo inteligentes y construcción robusta para revolucionar las operaciones
              agrícolas modernas.
            </p>
          </div>

          {/* ===================== BLOQUE 1 ===================== */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 mb-20">
            {/* Fondo en mobile (misma imagen) */}
            <div className="absolute inset-0 lg:hidden">
              <Image
                src="/images/carga.png"
                alt="Capacidad de carga CÓNDOR C80"
                fill
                sizes="100vw"
                className="object-cover opacity-60"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/40 to-slate-900/20" />

            </div>

            <div className="relative z-10 p-10">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* TEXTO */}
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6">Capacidad de Carga Incomparable</h3>
                  <p className="text-lg text-slate-300 mb-8 leading-relaxed text-justify">
                    Con una carga de pulverización de 80 L y una carga máxima de esparcimiento de 85 kg, el C80 ofrece cobertura y
                    eficiencia excepcionales. El sistema de tanque de gran capacidad reduce la frecuencia de recarga, permitiendo
                    períodos de operación extendidos y máxima productividad en el campo.
                  </p>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-slate-900/40 border border-blue-500/20 p-4 rounded-lg backdrop-blur">
                      <div className="text-4xl md:text-4xl font-bold text-yellow-500 mb-2">
                        80 L
                      </div>

                      <div className="text-slate-300">Carga de Pulverización</div>
                    </div>
                    <div className="bg-slate-900/40 border border-blue-500/20 p-4 rounded-lg backdrop-blur">
                      <div className="text-4xl md:text-4xl font-bold text-yellow-500 mb-2">
                        85 kg
                      </div>

                      <div className="text-slate-300">Carga de Esparcimiento</div>
                    </div>
                  </div>
                </div>

                {/* Imagen al costado SOLO desktop (misma imagen) */}
                <div className="hidden lg:block">
                  <div className="relative w-full min-h-[420px] rounded-2xl overflow-hidden border border-slate-700">
                    <Image
                      src="/images/carga.png"
                      alt="Capacidad de carga CÓNDOR C80"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover opacity-60"
                    />


                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===================== BLOQUE 2 ===================== */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-700/70 bg-gradient-to-b from-slate-900/40 to-slate-950 mb-20 shadow-[0_0_0_1px_rgba(148,163,184,0.08),0_20px_60px_rgba(0,0,0,0.45)]">
            {/* Fondo en mobile SIN recorte */}
            <div className="absolute inset-0 lg:hidden">
              <div className="relative w-full h-full min-h-[420px]">
                <Image
                  src="/images/modularizacion2.png"
                  alt="Personalización e integración CÓNDOR C80"
                  fill
                  className="object-contain object-center opacity-50 blur-[1px]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/55 to-slate-950/25" />
            </div>



            <div className="relative z-10 p-8 md:p-10">
              <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
                {/* Imagen SOLO desktop */}
                <div className="hidden lg:block">
                  <div className="relative w-full min-h-[460px] rounded-2xl overflow-hidden border border-slate-700/70 bg-slate-950/40">
                    {/* Glow suave atrás */}
                    <div className="absolute -inset-24 bg-[radial-gradient(circle_at_35%_30%,rgba(56,189,248,0.18),transparent_55%)]" />

                    {/* Imagen sin recorte */}
                    <div className="absolute inset-0 p-6 xl:p-8">
                      <Image
                        src="/images/modularizacion2.png"
                        alt="Personalización e integración CÓNDOR C80"
                        fill
                        className="object-contain object-center opacity-50 blur-[1px]"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />


                    </div>

                    {/* Viñeta para integrarla */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/35" />
                  </div>
                </div>

                {/* TEXTO */}
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6">
                    Personalización e Integración Abierta
                  </h3>

                  <p className="text-lg text-slate-300 mb-8 leading-relaxed text-justify mr-6">
                    El CÓNDOR C80 está preparado para integrar módulos adicionales según tu operación: sensores,
                    actuadores, telemetría o accesorios especiales. Nuestro sistema permite comunicación directa
                    con equipos externos mediante interfaces estándar.
                  </p>


                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-2.5 h-2.5 bg-sky-400 rounded-full shadow-[0_0_18px_rgba(56,189,248,0.45)]" />
                      <span className="text-slate-300">Soporte para UART, I2C y CAN para periféricos y sensores</span>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-2.5 h-2.5 bg-sky-400 rounded-full shadow-[0_0_18px_rgba(56,189,248,0.45)]" />
                      <span className="text-slate-300">Salidas PWM para control de accesorios y dispositivos auxiliares</span>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-2.5 h-2.5 bg-sky-400 rounded-full shadow-[0_0_18px_rgba(56,189,248,0.45)]" />
                      <span className="text-slate-300">GPIO configurables para señales, triggers y automatizaciones</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* ===================== BLOQUE 3 ===================== */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-800">
            {/* Fondo en mobile (misma imagen) */}
            <div className="absolute inset-0 lg:hidden">
              <Image
                src="/images/aspersion.png"
                alt="Sistema de pulverización CÓNDOR C80"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-40"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/40 to-slate-900/20" />

            </div>

            <div className="relative z-10 p-10">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* TEXTO */}
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6">Sistema de Pulverización</h3>
                  <p className="text-lg text-slate-300 mb-8 leading-relaxed text-justify">
                    La atomización rotativa de precisión permite una distribución uniforme de gotas y una cobertura eficiente en distintos escenarios de aplicación.
                    El sistema se adapta a diferentes tipos de cultivos y requisitos operativos, entregando una aplicación precisa con desperdicio mínimo y alta efectividad.
                  </p>

                  <div className="bg-slate-900/40 border border-blue-500/20 p-6 rounded-lg backdrop-blur">
                    <h4 className="font-semibold text-blue-400 mb-3">Beneficios Clave:</h4>
                    <ul className="space-y-2 text-slate-300">
                      <li>• Distribución uniforme del tamaño de gotas</li>
                      <li>• Reducción de deriva química y desperdicio</li>
                      <li>• Patrones de pulverización adaptativos para diferentes cultivos</li>
                      <li>• Penetración y cobertura mejoradas</li>
                    </ul>
                  </div>
                </div>

                {/* Imagen al costado SOLO desktop (misma imagen) */}
                <div className="hidden lg:block">
                  <div className="relative w-full min-h-[420px] rounded-2xl overflow-hidden ">
                    <Image
                      src="/images/aspersion.png"
                      alt="Sistema de pulverización CÓNDOR C80"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover opacity-40"
                    />


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Technical Specifications */}
      <section className="py-24 bg-slate-950" id="especificaciones">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Especificaciones Técnicas
            </h2>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Diseñado para el rendimiento, construido para la confiabilidad. Cada componente diseñado para sobresalir
              en entornos agrícolas exigentes.
            </p>
          </div>


          <Tabs defaultValue="general" className="w-full">
            <div className="bg-slate-900 border border-slate-800 rounded-md p-2 w-full max-w-[1224px] mx-auto mb-12">
              <TabsList className="flex flex-wrap justify-center gap-2 bg-slate-900 rounded-md p-2">
                <TabsTrigger
                  value="general"
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white txt_especificacion"
                >
                  General
                </TabsTrigger>
                <TabsTrigger
                  value="vuelo"
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white txt_especificacion"
                >
                  Rendimiento de Vuelo
                </TabsTrigger>
                <TabsTrigger
                  value="pulverizacion"
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white txt_especificacion"
                >
                  Sistema de Pulverización
                </TabsTrigger>
                <TabsTrigger
                  value="sensores"
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white txt_especificacion"
                >
                  Sensores
                </TabsTrigger>
                <TabsTrigger
                  value="energia"
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white txt_especificacion"
                >
                  Sistema de Energía
                </TabsTrigger>
              </TabsList>
            </div>



            <TabsContent value="general" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="bg-slate-900 border border-slate-800">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4 titulos_especificaciones">Dimensiones</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Plegado</span>
                        <span className="text-white">1,1 m × 1,05 m × 0,75 m</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Desplegado</span>
                        <span className="text-white">3 m × 3 m × 1,75 m</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Peso en vacio</span>
                        <span className="text-white">68 kg</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-900 border border-slate-800">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4 titulos_especificaciones">Condiciones de Operación</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Temperatura</span>
                        <span className="text-white">-10°C a 44°C</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Resistencia al Viento</span>
                        <span className="text-white">8 m/s</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Clasificación IP</span>
                        <span className="text-white">IP67</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-900 border border-slate-800">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4 titulos_especificaciones">Carga Útil</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Peso Máximo de Despegue (MTOW)</span>
                        <span className="text-white">148 kg</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Tanque de Esparcimiento</span>
                        <span className="text-white">85 kg</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Tanque de Pulverización</span>
                        <span className="text-white">80 L</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="vuelo" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="bg-slate-900 border border-slate-800">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4 titulos_especificaciones">Rendimiento de Vuelo</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Tiempo Máximo de Vuelo</span>
                        <span className="text-white">17 min</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Velocidad Máxima de Vuelo</span>
                        <span className="text-white">55 km/h</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-900 border border-slate-800">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4 titulos_especificaciones">Navegación</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-400">GNSS</span>
                        <span className="text-white">GPS+GLONASS+BeiDou+Galileo</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Precisión LIDAR</span>
                        <span className="text-white">±3.5 cm</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Compatibilidad con SATCOM</span>
                        <span className="text-white">Si</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-900 border border-slate-800">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4 titulos_especificaciones">Control Remoto</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Alcance Máximo</span>
                        <span className="text-white">1500 m</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Frecuencia</span>
                        <span className="text-white">2.4 GHz</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Transmisión de Video</span>
                        <span className="text-white">1080p/30fps</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="pulverizacion" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-24">
                <Card className="bg-slate-900 border border-slate-800">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4 titulos_especificaciones">Sistema de Pulverización</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Ancho de Pulverización</span>
                        <span className="text-white">5-12 m</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Caudal Máximo</span>
                        <span className="text-white">30 L/min</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Aspersores</span>
                        <span className="text-white">2 o 4 Centrífugos de 9L/min</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-900 border border-slate-800">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4 titulos_especificaciones">Cobertura</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Cobertura Máxima</span>
                        <span className="text-white">24 ha/h</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Tasa de Aplicación</span>
                        <span className="text-white">30 L/min</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Tamaño de Gota</span>
                        <span className="text-white">35-500 μm</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="sensores" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-24">
                {/* <Card className="bg-slate-900 border border-slate-800">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4 titulos_especificaciones">Sistema de Radar</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Tipo</span>
                        <span className="text-white">Array Faseado Activo</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Rango de Detección</span>
                        <span className="text-white">1.5-50 m</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Campo de Visión</span>
                        <span className="text-white">100°×100°</span>
                      </div>
                    </div>
                  </CardContent>
                </Card> */}

                <Card className="bg-slate-900 border border-slate-800">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4 titulos_especificaciones">Sistema de Visión</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Cámaras</span>
                        <span className="text-white">HD Digital</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Rango de Detección</span>
                        <span className="text-white">hasta 20km m</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Resolución</span>
                        <span className="text-white">1920×1080</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-900 border border-slate-800">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4 titulos_especificaciones">Sensores</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-400">IMU</span>
                        <span className="text-white">Triple redundancia</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Barómetro</span>
                        <span className="text-white">Doble redundancia</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Pitot</span>
                        <span className="text-white">Sensor de velocidad aerodinámica</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="energia" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="bg-slate-900 border border-slate-800">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4 titulos_especificaciones">Sistema de Batería</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Tipo</span>
                        <span className="text-white">LiPo 14S</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Capacidad</span>
                        <span className="text-white">30,000 mAh</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Voltaje</span>
                        <span className="text-white">58.8 V</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-900 border border-slate-800">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4 titulos_especificaciones">Generador</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Tipo</span>
                        <span className="text-white">Generador inverter</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Tipo de Combustible</span>
                        <span className="text-white">Nafta / GLP / Gas</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Tiempo de Arranque</span>
                        <span className="text-white">Automático / Manual / Remoto</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-900 border border-slate-800">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4 titulos_especificaciones">Carga</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Cargador</span>
                        <span className="text-white">Inteligente de doble canal</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Tiempo de Carga</span>
                        <span className="text-white">25 min</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Intercambio en Caliente</span>
                        <span className="text-white">Soportado</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-24 bg-slate-900" id="aplicaciones">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Aplicaciones Versátiles</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Desde pulverización de precisión hasta operaciones de esparcimiento, el CÓNDOR C80 se adapta a diversas
              necesidades agrícolas con versatilidad incomparable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-lg transition-shadow bg-slate-800 border border-slate-700 hover:border-yellow-600">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-600/20 border border-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600/30 transition-colors">
                  <Droplets className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Pulverización de Cultivos</h3>
                <p className="text-slate-300 text-sm">
                  Aplicación precisa de pesticidas, herbicidas y fungicidas con cobertura uniforme y deriva mínima.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow bg-slate-800 border border-slate-700 hover:border-yellow-600">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-600/20 border border-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600/30 transition-colors">
                  <Gauge className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Esparcimiento de Fertilizantes</h3>
                <p className="text-slate-300 text-sm">
                  Distribución eficiente de fertilizantes granulares y semillas con tasas y patrones de aplicación
                  precisos.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow bg-slate-800 border border-slate-700 hover:border-yellow-600">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-600/20 border border-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600/30 transition-colors">
                  <Package className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Levantamiento de Carga</h3>
                <p className="text-slate-300 text-sm">
                  Transporte aéreo de insumos y cargas adecuándose a las necesidades del cliente.
                </p>
              </CardContent>
            </Card>


            <Card className="group hover:shadow-lg transition-shadow bg-slate-800 border border-slate-700 hover:border-yellow-600">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-600/20 border border-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600/30 transition-colors">
                  <Shield className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Respuesta de Emergencia</h3>
                <p className="text-slate-300 text-sm">
                  Despliegue rápido para control de brotes de plagas y operaciones de protección de cultivos de
                  emergencia.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* CONTACTO / COTIZACIÓN */}
      <section className="py-16 md:py-24 bg-slate-950" id="contacto">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-10 md:mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              Contacto
            </h2>
            <p className="text-base md:text-lg text-slate-300 leading-7">
              Consultas técnicas, información comercial o solicitud de cotización.
            </p>
          </div>

          {/* Card */}
          <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 md:p-14 text-center">
            <p className="text-slate-300 text-base sm:text-lg mb-8 md:mb-10 max-w-3xl mx-auto">
              Nuestro equipo analiza cada solicitud de forma personalizada para
              ofrecerte la mejor solución según tus necesidades operativas.
            </p>

            <Button
              asChild
              size="lg"
              className="
          w-full sm:w-auto
          justify-center
          bg-blue-600 hover:bg-blue-700
          text-white
          px-6 sm:px-10 py-5
          text-base sm:text-lg font-semibold
          rounded-xl
          transition-all duration-300
          sm:transform sm:hover:scale-105
          shadow-[0_0_30px_rgba(59,130,246,0.3)]
          whitespace-normal text-center
        "
            >
              <Link href="/contacto" className="w-full sm:w-auto">
                Contactar con un especialista
              </Link>
            </Button>
          </div>
        </div>
      </section>



      {/* Footer */}
      <Footer />

    </div>
  )
}
