import React from "react";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/ui/site-header";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";

export default function Nosotros() {
  const equipo = [
    {
      nombre: "Ing. Matías Andriano",
      rol: "Cofundador",
      puesto: "Diseño estructural y desarrollo",
      foto: "/images/socios/matias.png",
    },
    {
      nombre: "Sr. Francisco Escoz",
      rol: "Cofundador",
      puesto: "Desarrollo de software",
      foto: "/images/socios/francisco.png",
    },
    {
      nombre: "Ing. José Escoz",
      rol: "Cofundador",
      puesto: "Integración y control",
      foto: "/images/socios/jose.png",
    },
    {
      nombre: "Ing. Leandro Paoli",
      rol: "Cofundador",
      puesto: "Diseño e integración",
      foto: "/images/socios/lean.png",
    },
    {
      nombre: "Ing. Ezequiel Portillo",
      rol: "Cofundador",
      puesto: "Instrumentación y periféricos",
      foto: "/images/socios/ezequiel.png",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[#050a18]">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section - Identidad Institucional */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden border-b border-gray-800/50">
          <div className="container mx-auto relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              Liderando la evolución del <br />
              <span className="text-blue-500 italic font-light">
                agro argentino.
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Somos una empresa AgTech nacida para cerrar la brecha entre la
              tecnología aeroespacial y la realidad del productor local. Como
              pioneros en el desarrollo e integración de drones modulares en
              Argentina, transformamos la forma en que el campo aplica sus
              recursos.
            </p>
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent opacity-50" />
        </section>

        {/* Sección: Misión, Visión y Valores */}
        <section className="py-24 bg-[#070e24]">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Misión */}
              <div className="p-8 rounded-2xl bg-gray-900/40 border border-gray-800 hover:border-yellow-600 transition-all">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Nuestra Misión
                </h3>
                <p className="text-gray-400 leading-relaxed text-justify">
                  Diseñar, integrar y comercializar drones para el sector
                  productivo, brindando soluciones tecnológicas eficientes que
                  optimicen procesos y reduzcan el impacto ambiental.
                </p>
              </div>

              {/* Visión */}
              <div className="p-8 rounded-2xl bg-gray-900/40 border border-gray-800 hover:border-yellow-600 transition-all">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Nuestra Visión
                </h3>
                <p className="text-gray-400 leading-relaxed text-justify">
                  Convertirse en una empresa referente en el desarrollo de drones
                  para la agricultura y la industria, impulsando la innovación
                  tecnológica aeronáutica desde Argentina hacia la región.
                </p>
              </div>

              {/* Pilares */}
              <div className="p-8 rounded-2xl bg-gray-900/40 border border-gray-800 hover:border-yellow-600 transition-all">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Pilares Ager Fly
                </h3>
                <ul className="text-gray-400 space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-1 w-1 bg-blue-500 rounded-full" />
                    Diseño Modular
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1 w-1 bg-blue-500 rounded-full" />
                    Aeronaves personalizables
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1 w-1 bg-blue-500 rounded-full" />
                    Tecnología de última generación
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1 w-1 bg-blue-500 rounded-full" />
                    Diseño y integración 100% nacional
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Sección: Objetivos Estratégicos */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-12 text-center underline decoration-blue-500 underline-offset-[12px]">
                Objetivos de Impacto
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-6 p-6">
                  <span className="text-4xl font-black text-yellow-600/80 italic">
                    01
                  </span>
                  <p className="text-gray-300 italic text-justify">
                    <strong className="text-white">
                      Eliminar los tiempos de espera:
                    </strong>{" "}
                    Tener un equipo de soporte altamente preparado
                    que brinde soluciones ante cualquier eventualidad.
                  </p>
                </div>
                <div className="flex gap-6 p-6">
                  <span className="text-4xl font-black text-yellow-600/80 italic">
                    02
                  </span>
                  <p className="text-gray-300 italic text-justify">
                    <strong className="text-white">
                      Personalización del Hardware:
                    </strong>{" "}
                    Sistema modular que permite adaptar el dron a distintas aplicaciones. 
                    El cliente puede configurar accesorios y funciones según sus necesidades operativas.
                  </p>
                </div>
                <div className="flex gap-6 p-6">
                  <span className="text-4xl font-black text-yellow-600/80 italic">
                    03
                  </span>
                  <p className="text-gray-300 italic text-justify">
                    <strong className="text-white">
                      Formación Continua:
                    </strong>{" "}
                    Capacitar a los operarios para que extraigan el
                    máximo potencial del Condor C80 de forma segura.
                  </p>
                </div>
                <div className="flex gap-6 p-6">
                  <span className="text-4xl font-black text-yellow-600/80 italic">
                    04
                  </span>
                  <p className="text-gray-300 italic">
                    <strong className="text-white">
                      Soberanía de Datos:
                    </strong>{" "}
                    Ofrecer sistemas de software abiertos que permitan al
                    productor ser dueño de su propia información.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== EQUIPO (TÍTULO + DESCRIPCIÓN + CARDS) ===================== */}
        <section className="py-24 border-t border-gray-800/50">
          <div className="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-6 2xl:px-12">
            {/* Encabezado de la sección */}
            <div className="text-center mb-20">
              <h2 className="text-3xl font-bold text-white mb-6 underline decoration-blue-500 underline-offset-[12px]">
                Equipo de Desarrollo
              </h2>

              <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
                Un equipo multidisciplinario enfocado en ingeniería, software y
                soporte técnico local, comprometido con la innovación tecnoógica en Argentina.
              </p>
            </div>

            {/* Cards */}
            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4
                xl:grid-cols-5
                place-items-center
                gap-x-6
                gap-y-10
                md:gap-x-8
                md:gap-y-12
                xl:gap-x-16
                xl:gap-y-16
                2xl:gap-x-24
                2xl:gap-y-20
              "
            >
              {equipo.map((miembro, index) => (
                <div
                  key={index}
                  className="
    group
    w-full
    max-w-[320px]
    h-[460px]
    bg-[#0a1229]
    rounded-2xl
    border
    border-gray-800
    hover:border-yellow-600
    transition-all
    duration-300
    shadow-xl
    hover:-translate-y-1
    overflow-hidden
    flex
    flex-col
  "
                >

                  {/* FOTO */}
                  <div className="relative w-full aspect-[3/4] bg-slate-800/30 overflow-hidden">
                    {miembro.foto ? (
                      <Image
                        src={miembro.foto}
                        alt={miembro.nombre}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 20vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                        priority={index < 4}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full bg-blue-600/10 border border-blue-500/30 flex items-center justify-center shadow-inner">
                          <span className="text-blue-400 font-bold text-3xl">
                            {miembro.nombre?.[0] ?? "A"}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* TEXTO */}
                  <div className="flex-1 px-7 py-6 text-center flex flex-col justify-center gap-2">
                    <h3 className="text-xl font-bold text-white leading-tight line-clamp-2">
                      {miembro.nombre}
                    </h3>

                    <p className="text-blue-400 text-xs uppercase font-bold tracking-widest">
                      {miembro.rol}
                    </p>

                    <p className="text-slate-300 text-sm leading-snug line-clamp-2">
                      {miembro.puesto}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
<section className="py-20 md:py-24 bg-gradient-to-t from-blue-900/10 to-transparent">
  <div className="container mx-auto px-6 text-center">
    <div
      className="
        max-w-4xl mx-auto
        p-7 sm:p-10 md:p-12
        rounded-3xl sm:rounded-[3rem]
        border border-blue-500/20
        bg-[#0a1229]
      "
    >
      <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-white mb-5 sm:mb-6">
        Unite a la nueva generación del agro.
      </h2>

      <p className="text-gray-400 mb-8 sm:mb-10 text-base sm:text-lg">
        Nuestros ingenieros están listos para configurar tu próxima herramienta
        de precisión.
      </p>

      <Button
        asChild
        size="lg"
        className="
          w-full sm:w-auto
          bg-blue-600 hover:bg-blue-700
          text-white
          px-6 sm:px-10
          py-5
          text-base sm:text-lg
          font-semibold
          rounded-xl
          transition-all duration-300
          sm:transform sm:hover:scale-105
          shadow-[0_0_30px_rgba(59,130,246,0.3)]
          whitespace-normal
        "
      >
        <Link href="/contacto" className="block text-center">
          Contactar con un especialista
        </Link>
      </Button>
    </div>
  </div>
</section>

      </main>

      <Footer />
    </div>
  );
}
