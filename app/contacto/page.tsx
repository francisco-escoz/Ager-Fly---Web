"use client";

import SiteHeader from "@/components/ui/site-header";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button"

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

function isIOS() {
  if (typeof navigator === "undefined") return false;
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function isAndroid() {
  if (typeof navigator === "undefined") return false;
  return /Android/i.test(navigator.userAgent);
}

function openEmailSmart(to: string, subject = "", body = "") {
  const ua = navigator.userAgent || "";
  const isiOS = /iPhone|iPad|iPod/i.test(ua);
  const isAnd = /Android/i.test(ua);

  // ✅ Desktop: Gmail web con prefill
  if (!isiOS && !isAnd) {
    window.open(gmailWebCompose(to, subject, body), "_blank", "noopener,noreferrer");
    return;
  }

  // ✅ Android/Samsung: SOLO mailto (estable, evita Play Store)
  if (isAnd) {
    window.location.href = mailtoLink(to, subject, body);
    return;
  }

  // ✅ iPhone/iOS: intentar Gmail app primero
  const encodedTo = encodeURIComponent(to);
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  const iosGmailUrl = `googlegmail:///co?to=${encodedTo}&subject=${encodedSubject}&body=${encodedBody}`;

  let didLeave = false;

  const markLeft = () => {
    didLeave = true;
    cleanup();
  };

  const onVisChange = () => {
    if (document.visibilityState === "hidden") markLeft();
  };

  const cleanup = () => {
    window.removeEventListener("pagehide", markLeft);
    window.removeEventListener("blur", markLeft);
    document.removeEventListener("visibilitychange", onVisChange);
  };

  // Si se abrió Gmail, Safari normalmente pierde foco / se oculta
  window.addEventListener("pagehide", markLeft);
  window.addEventListener("blur", markLeft);
  document.addEventListener("visibilitychange", onVisChange);

  // Intento abrir Gmail app
  window.location.href = iosGmailUrl;

  // Fallback SOLO si NO abrió Gmail
  window.setTimeout(() => {
    cleanup();
    if (!didLeave) {
      window.location.href = mailtoLink(to, subject, body); // mail predefinido
    }
  }, 900);
}

export default function Contacto() {
  return (
    <div className="flex min-h-screen flex-col bg-[#050a18]">
      <SiteHeader />

      <main className="flex-1 bg-gradient-to-b from-[#050914] to-[#020617] text-white pt-24">
        <section className="pt-0 pb-28 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contáctanos</h1>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Estamos aquí para ayudarte. Elegí el canal correcto según tu consulta y nuestro equipo se pondrá en contacto
            a la brevedad.
          </p>
        </section>

        <section className="pb-32 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* ================= CONSULTAS COMERCIALES ================= */}
            <div className="bg-[#0a1229] border border-blue-500/20 rounded-2xl p-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">Consultas Comerciales</h2>

              <p className="text-slate-300 mb-8 leading-relaxed text-justify">
                Para información sobre nuestros drones agrícolas, cotizaciones, disponibilidad, características técnicas
                o asesoramiento previo a la compra.
              </p>

              <div className="space-y-6">
                <div>
                  <p className="text-sm text-slate-400 mb-4">WhatsApp Comercial</p>

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
                    <a
                      href={waLink(
                        WHATSAPP_COMERCIAL,
                        "Hola Ager Fly\nEstoy interesado en recibir informacion comercial sobre sus drones agricolas."
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Contactanos
                    </a>
                  </Button>

                </div>


                <div>
                  <p className="text-sm text-slate-400 mb-1">Correo electrónico</p>
                  <button
                    type="button"
                    onClick={() =>
                      openEmailSmart(
                        "ventas@agerfly.com",
                        "Consulta comercial",
                        "Hola Ager Fly,\n\nQuisiera recibir información comercial sobre sus drones agrícolas."
                      )
                    }
                    className="text-left text-lg font-medium text-white hover:text-blue-400 transition"
                  >
                    ventas@agerfly.com
                  </button>
                </div>
              </div>
            </div>

            {/* ================= SOPORTE / POSTVENTA ================= */}
            {/* <div className="bg-[#0a1229] border border-yellow-500/20 rounded-2xl p-10">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Soporte y Postventa</h2>

              <p className="text-slate-300 mb-8 leading-relaxed">
                Asistencia técnica, capacitación operativa, reclamos, repuestos, mantenimiento y actualizaciones
                de software posteriores a la compra.
              </p>

              <div className="space-y-6">
                <div>
                  <p className="text-sm text-slate-400 mb-1">WhatsApp Soporte</p>
                  <a
                    href={waLink("Hola equipo de Ager Fly\nNecesito asistencia técnica o capacitación operativa.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-white hover:text-yellow-400 transition"
                  >
                    +54 9 11 3018-3256
                  </a>
                </div>

                <div>
                  <p className="text-sm text-slate-400 mb-1">Correo técnico</p>
                  <button
                    type="button"
                    onClick={() =>
                      openEmailSmart(
                        "soporte@agerfly.com",
                        "Soporte técnico / Capacitación",
                        "Hola equipo de Ager Fly,\n\nNecesito asistencia técnica o información sobre capacitación operativa."
                      )
                    }
                    className="text-left text-lg font-medium text-white hover:text-yellow-400 transition"
                  >
                    soporte@agerfly.com
                  </button>
                </div>

                <p className="text-xs text-slate-500 pt-2">Tiempo de respuesta estimado: 24 a 48 hs hábiles.</p>
              </div>
            </div> */}

            {/* ================= TRABAJÁ CON NOSOTROS ================= */}
            <div className="bg-[#0a1229] border border-green-500/20 rounded-2xl p-10">
              <h2 className="text-2xl font-semibold mb-4 text-green-400">Trabajá con Ager Fly</h2>

              <p className="text-slate-300 mb-8 leading-relaxed text-justify">
                Si querés ser revendedor, taller autorizado o partner técnico, este es el canal indicado.
              </p>

              <div className="space-y-6">
                <div>
                  <p className="text-sm text-slate-400 mb-4">WhatsApp Partners</p>
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
                    <a
                      href={waLink(
                        WHATSAPP_PARTNERS,
                        "Hola Ager Fly!\nMe gustaría contactarlos para trabajar como revendedor, taller autorizado o partner."
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Contactar para Partnership
                    </a>
                  </Button>

                </div>


                <div>
                  <p className="text-sm text-slate-400 mb-1">Correo institucional</p>
                  <button
                    type="button"
                    onClick={() =>
                      openEmailSmart(
                        "partners@agerfly.com",
                        "Alianza / Partner",
                        "Hola Ager Fly,\n\nMe gustaría contactarlos para trabajar como partner o revendedor."
                      )
                    }
                    className="text-left text-lg font-medium text-white hover:text-green-400 transition"
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
