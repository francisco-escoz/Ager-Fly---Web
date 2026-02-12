"use client";

import SiteHeader from "@/components/ui/site-header";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";

const WHATSAPP_COMERCIAL = "5491130183256";
const WHATSAPP_PARTNERS = "5492474562583";

const waLink = (phone: string, text: string) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

const gmailWebCompose = (to: string, subject = "", body = "") =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    to
  )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

const mailtoLink = (to: string, subject = "", body = "") =>
  `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

function openEmailSmart(to: string, subject = "", body = "") {
  const ua = navigator.userAgent || "";
  const isiOS = /iPhone|iPad|iPod/i.test(ua);
  const isAnd = /Android/i.test(ua);

  if (!isiOS && !isAnd) {
    window.open(gmailWebCompose(to, subject, body), "_blank", "noopener,noreferrer");
    return;
  }

  if (isAnd) {
    window.location.href = mailtoLink(to, subject, body);
    return;
  }

  const encodedTo = encodeURIComponent(to);
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  const iosGmailUrl = `googlegmail:///co?to=${encodedTo}&subject=${encodedSubject}&body=${encodedBody}`;

  window.location.href = iosGmailUrl;

  setTimeout(() => {
    window.location.href = mailtoLink(to, subject, body);
  }, 900);
}

export default function Contacto() {
  return (
    <div className="flex min-h-screen flex-col bg-[#050a18]">
      <SiteHeader />

      <main className="flex-1 bg-gradient-to-b from-[#050914] to-[#020617] text-white pt-24">
        {/* HEADER */}
        <section className="pb-20 px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Contáctanos
          </h1>
          <p className="text-slate-400 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            Estamos aquí para ayudarte. Elegí el canal correcto según tu consulta
            y nuestro equipo se pondrá en contacto a la brevedad.
          </p>
        </section>

        {/* BLOQUES */}
        <section className="pb-28 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* ================= CONSULTAS COMERCIALES ================= */}
            <div className="bg-[#0a1229] border border-blue-500/20 rounded-2xl p-6 sm:p-8 md:p-10">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-400">
                Consultas Comerciales
              </h2>

              <p className="text-slate-300 mb-8 leading-relaxed text-justify text-sm sm:text-base">
                Para información sobre nuestros drones agrícolas, cotizaciones,
                disponibilidad, características técnicas o asesoramiento previo a la compra.
              </p>

              <div className="space-y-8">

                {/* WhatsApp Comercial */}
                <div>
                  <p className="text-sm text-slate-400 mb-4">
                    WhatsApp Comercial
                  </p>

                  <Button
                    asChild
                    size="lg"
                    className="
                      w-full sm:w-auto
                      bg-blue-600 hover:bg-blue-700
                      text-white
                      px-6 sm:px-10 py-5
                      text-base sm:text-lg font-semibold
                      rounded-xl
                      transition-all duration-300
                      sm:transform sm:hover:scale-105
                      shadow-[0_0_30px_rgba(59,130,246,0.3)]
                      whitespace-normal
                    "
                  >
                    <a
                      href={waLink(
                        WHATSAPP_COMERCIAL,
                        "Hola Ager Fly\nEstoy interesado en recibir informacion comercial sobre sus drones agricolas."
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center"
                    >
                      Contactanos
                    </a>
                  </Button>
                </div>

                {/* Email Comercial */}
                <div>
                  <p className="text-sm text-slate-400 mb-2">
                    Correo electrónico
                  </p>
                  <button
                    type="button"
                    onClick={() =>
                      openEmailSmart(
                        "ventas@agerfly.com",
                        "Consulta comercial",
                        "Hola Ager Fly,\n\nQuisiera recibir información comercial sobre sus drones agrícolas."
                      )
                    }
                    className="text-base sm:text-lg font-medium text-white hover:text-blue-400 transition"
                  >
                    ventas@agerfly.com
                  </button>
                </div>
              </div>
            </div>

            {/* ================= TRABAJÁ CON NOSOTROS ================= */}
            <div className="bg-[#0a1229] border border-green-500/20 rounded-2xl p-6 sm:p-8 md:p-10">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-green-400">
                Trabajá con Ager Fly
              </h2>

              <p className="text-slate-300 mb-8 leading-relaxed text-justify text-sm sm:text-base">
                Si querés ser revendedor, taller autorizado o partner técnico,
                este es el canal indicado.
              </p>

              <div className="space-y-8">

                {/* WhatsApp Partners */}
                <div>
                  <p className="text-sm text-slate-400 mb-4">
                    WhatsApp Partners
                  </p>

                  <Button
                    asChild
                    size="lg"
                    className="
                      w-full sm:w-auto
                      bg-blue-600 hover:bg-blue-700
                      text-white
                      px-6 sm:px-10 py-5
                      text-base sm:text-lg font-semibold
                      rounded-xl
                      transition-all duration-300
                      sm:transform sm:hover:scale-105
                      shadow-[0_0_30px_rgba(59,130,246,0.3)]
                      whitespace-normal
                    "
                  >
                    <a
                      href={waLink(
                        WHATSAPP_PARTNERS,
                        "Hola Ager Fly!\nMe gustaría contactarlos para trabajar como revendedor, taller autorizado o partner."
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center"
                    >
                      Contactar para Partnership
                    </a>
                  </Button>
                </div>

                {/* Email Partners */}
                <div>
                  <p className="text-sm text-slate-400 mb-2">
                    Correo institucional
                  </p>
                  <button
                    type="button"
                    onClick={() =>
                      openEmailSmart(
                        "partners@agerfly.com",
                        "Alianza / Partner",
                        "Hola Ager Fly,\n\nMe gustaría contactarlos para trabajar como partner o revendedor."
                      )
                    }
                    className="text-base sm:text-lg font-medium text-white hover:text-green-400 transition"
                  >
                    partners@agerfly.com
                  </button>
                </div>

              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
