import SiteHeader from "@/components/ui/site-header"
import Footer from "@/components/ui/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Soporte() {
  return (
    <div className="flex min-h-screen flex-col bg-[#050a18] text-white">
      <SiteHeader />

      <main className="flex-1">
        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden">
          {/* 1) Fondo REAL (en el flujo) -> define la altura */}
          <div className="relative">
            {/* Desktop/Tablet: 3 columnas */}
            <div className="hidden md:grid grid-cols-3 gap-x-10 px-10 lg:gap-x-16 lg:px-16 py-10 md:py-12">
              <div className="flex items-center justify-center">
                <img
                  src="/images/plano3.png"
                  alt="Foto de plano del dron"
                  className="w-full max-w-[520px] h-auto object-contain opacity-80"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/images/plano1.png"
                  alt="Foto de plano del dron"
                  className="w-full max-w-[520px] h-auto object-contain opacity-80"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/images/plano2.png"
                  alt="Foto de plano del dron"
                  className="w-full max-w-[520px] h-auto object-contain opacity-80 scale-[0.7]"
                />
              </div>
            </div>

            {/* Mobile: 3 imágenes chicas, una debajo de la otra */}
            <div className="md:hidden flex flex-col items-center gap-y-12 px-6 pt-10 pb-6">
              <img
                src="/images/plano3.png"
                alt=""
                className="w-full max-w-[200px] h-auto object-contain opacity-70"
              />

              <img
                src="/images/plano1.png"
                alt=""
                className="w-full max-w-[200px] h-auto object-contain opacity-70"
              />

              <img
                src="/images/plano2.png"
                alt=""
                className="w-full max-w-[200px] h-auto object-contain opacity-70 scale-[0.8]"
              />
            </div>


            {/* 2) Overlay encima del fondo */}
            <div className="absolute inset-0 bg-black/70 pointer-events-none" />

            {/* 3) Texto encima (hero real) */}
            <div className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Soporte</h1>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Acompañamiento técnico integral antes, durante y después de cada operación.
                  Nuestro objetivo es que cada equipo funcione con la máxima eficiencia,
                  seguridad y confiabilidad.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* ================= SERVICIO TECNICO ================= */}
        <section className="pt-28 pb-10 px-6 bg-gradient-to-b from-[#050a18] to-[#020617]">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* CARD MOBILE */}
              <div className="relative overflow-hidden rounded-2xl border border-blue-500/20 md:rounded-none md:border-0 md:overflow-visible">
                <div
                  className="absolute inset-0 bg-cover bg-center md:hidden"
                  style={{ backgroundImage: "url('/images/servicio_tecnico.png')" }}
                />
                {/* más traslúcido en celu */}
                <div className="absolute inset-0 bg-black/80 md:hidden" />

                <div className="relative z-10 p-10 md:p-0">
                  <h2 className="text-3xl font-bold mb-6 text-white">
                    Servicio Técnico Especializado
                  </h2>

                  <p className="text-base md:text-lg text-slate-300 md:text-slate-400 leading-7 mb-5 text-justify">
                    Soporte preventivo y correctivo para asegurar rendimiento, seguridad y vida útil del equipo.
                    Trabajamos con procesos claros, herramientas especializadas y registros trazables.
                  </p>

                  <p className="text-base md:text-lg text-slate-300 md:text-slate-400 leading-7 mb-5 text-justify">
                    Incluye diagnóstico, mantenimiento por horas de vuelo, revisión estructural/electrónica,
                    calibraciones, firmware y asistencia remota o presencial.
                  </p>

                  <p className="text-base md:text-lg text-slate-300 md:text-slate-400 leading-7 text-justify">
                    Además, gestionamos provisión y reemplazo de repuestos originales para garantizar compatibilidad
                    y desempeño.
                  </p>
                </div>

              </div>

              {/* Imagen desktop */}
              <div className="hidden md:block">
                <div className="relative h-80 rounded-2xl overflow-hidden border border-blue-500/20">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/servicio_tecnico.png')" }}
                  />
                  {/* en compu: más visible */}
                  <div className="absolute inset-0" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CAPACITACION ================= */}
        <section className="pt-10 pb-14 px-6 bg-[#020617]">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Imagen desktop (izquierda) */}
              <div className="hidden md:block">
                <div className="relative h-80 rounded-2xl overflow-hidden border border-blue-500/20">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/capacitacion.png')" }}
                  />
                  <div className="absolute inset-0" />
                </div>
              </div>

              {/* CARD MOBILE */}
              <div className="relative overflow-hidden rounded-2xl border border-blue-500/20 md:rounded-none md:border-0 md:overflow-visible">
                <div
                  className="absolute inset-0 bg-cover bg-center md:hidden"
                  style={{ backgroundImage: "url('/images/capacitacion.png')" }}
                />
                <div className="absolute inset-0 bg-black/80 md:hidden" />

                <div className="relative z-10 p-10 md:p-0">
                  <h2 className="text-3xl font-bold mb-6 text-white">
                    Capacitación Técnica y Operativa
                  </h2>

                  <p className="text-base md:text-lg text-slate-300 md:text-slate-400 leading-7 mb-5 text-justify">
                    Programas de formación para pilotos, operadores y equipos técnicos,
                    adaptados a distintos niveles y necesidades.
                  </p>

                  <p className="text-base md:text-lg text-slate-300 md:text-slate-400 leading-7 mb-5 text-justify">
                    Incluye guia de operaciones, uso del sistema de pulverización, mantenimiento básico
                    y protocolos ante fallas o emergencias.
                  </p>

                  <p className="text-base md:text-lg text-slate-300 md:text-slate-400 leading-7 text-justify">
                    Modalidad presencial o remota, con contenidos que se actualizan junto con el producto.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ================= CONTACTO (MISMO FORMATO QUE INDEX) ================= */}
        <section className="pb-28 px-6 bg-[#020617]">
          <div className="max-w-6xl mx-auto">
            {/* Título + bajada centrados */}
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-5">
                Contacto
              </h2>

              <p className="text-slate-300 text-base md:text-lg leading-7">
                Consultas técnicas, información comercial o solicitud de capacitación.
                Todo comienza desde un mismo formulario.
              </p>
            </div>

            {/* Card grande centrada */}
            <div className="rounded-2xl border border-blue-500/20 bg-white/5 px-8 py-12 md:px-14 md:py-14 text-center">
              <p className="text-slate-300 text-lg mb-10">
                Nuestro equipo analiza cada solicitud de forma personalizada para ofrecerte
                la mejor solución según tus necesidades operativas.
              </p>

              <Button
                asChild
                size="lg"
                className="
    bg-blue-600 hover:bg-blue-700
    text-white
    px-10 py-5
    text-lg font-semibold
    rounded-xl
    transition-all duration-300
    transform hover:scale-105
    shadow-[0_0_30px_rgba(59,130,246,0.3)]
  "
              >
                <Link href="/contacto">
                  Contactar con un especialista
                </Link>
              </Button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
