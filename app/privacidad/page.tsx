import SiteHeader from "@/components/ui/site-header";
import Footer from "@/components/ui/footer";

export default function Privacidad() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <SiteHeader />

      <section className="px-6 pt-14 pb-24">
        <div className="max-w-4xl mx-auto">
          <header className="mb-10 bg-transparent">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Política de Privacidad
            </h1>
            <p className="mt-3 text-slate-300 text-base md:text-lg leading-7">
              Última actualización:{" "}
              <span className="text-slate-200">12 de febrero de 2026</span>
            </p>
          </header>

          <div className="space-y-10 text-slate-200/90 leading-8">
            <p className="text-slate-300">
              <span className="text-slate-100 font-semibold">Ager Fly</span>{" "}
              valora la privacidad de los usuarios y se compromete a proteger la
              información personal que pueda tratarse a través de este sitio web y
              de los canales de contacto disponibles.
            </p>

            {/* Aceptación */}
            <section className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Aceptación de esta política
              </h2>
              <p className="text-slate-300">
                El acceso, navegación o utilización del sitio web implica la
                aceptación plena de esta Política de Privacidad vigente al momento
                del acceso. Asimismo, cuando el usuario envía una consulta o
                solicitud a través de los canales de contacto (por ejemplo, correo
                electrónico, WhatsApp o formularios), declara haber leído y
                aceptado esta Política de Privacidad.
              </p>
            </section>

            {/* Responsable */}
            <section className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Responsable del tratamiento
              </h2>

              <p className="text-slate-300">
                El responsable del tratamiento de los datos personales es{" "}
                <span className="text-slate-100 font-medium">Ager Fly</span>, quien
                actúa conforme a la Ley 25.326 de Protección de Datos Personales y
                sus normas complementarias.
              </p>

              <p className="text-slate-300">
                Los datos completos de identificación del responsable, incluyendo
                razón social, CUIT, domicilio legal y medios de contacto, se
                encuentran detallados en la sección{" "}
                <span className="text-slate-100 font-medium">
                  “Identificación del titular del sitio”
                </span>{" "}
                de los Términos de Uso, los cuales forman parte integrante de esta
                Política de Privacidad.
              </p>
            </section>

            {/* 1 */}
            <section className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                1. Alcance
              </h2>
              <p className="text-slate-300">
                Esta Política de Privacidad aplica a la información personal que el
                usuario proporciona voluntariamente al comunicarse con Ager Fly a
                través de los canales de contacto disponibles (por ejemplo, correo
                electrónico, WhatsApp o formularios).
              </p>
              <p className="text-slate-300">
                El sitio web tiene carácter principalmente informativo. Esta
                política no aplica a sitios, plataformas o servicios de terceros a
                los que se pueda acceder mediante enlaces, los cuales se rigen por
                sus propias políticas de privacidad.
              </p>
            </section>

            {/* 2 */}
            <section className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                2. Información que recopilamos
              </h2>
              <p className="text-slate-300">
                Ager Fly no realiza perfilado de usuarios ni seguimiento
                publicitario a través de este sitio web.
              </p>
              <p className="text-slate-300">
                El sitio puede registrar automáticamente datos técnicos mínimos
                necesarios para su funcionamiento y seguridad, tales como dirección
                IP, tipo de navegador, sistema operativo, fechas/horarios de acceso
                o registros del servidor (logs técnicos). Estos datos se utilizan
                con fines de seguridad, prevención de fraudes, diagnóstico técnico
                y mantenimiento, y no se emplean para identificar personalmente al
                usuario.
              </p>
              <p className="text-slate-300">
                La recopilación de información personal ocurre únicamente cuando el
                usuario se comunica de manera voluntaria con Ager Fly por los canales
                habilitados. En dichos casos, Ager Fly podrá recibir:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li>Nombre o identificador proporcionado por el usuario.</li>
                <li>Dirección de correo electrónico.</li>
                <li>Número de teléfono.</li>
                <li>Contenido del mensaje, consulta o solicitud.</li>
                <li>
                  Datos que el usuario decida incluir (por ejemplo, empresa,
                  ubicación, necesidades operativas o información técnica).
                </li>
              </ul>
            </section>

            {/* 3 */}
            <section className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                3. Finalidad del uso de la información
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li>Responder consultas técnicas o comerciales.</li>
                <li>Brindar información sobre productos, servicios o soporte.</li>
                <li>Dar seguimiento a solicitudes iniciadas por el usuario.</li>
                <li>
                  Gestionar comunicaciones precontractuales o comerciales cuando
                  corresponda.
                </li>
                <li>
                  Cumplir obligaciones legales o requerimientos de autoridad
                  competente.
                </li>
              </ul>
            </section>

            {/* 4 */}
            <section className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                4. Base legal del tratamiento
              </h2>
              <p className="text-slate-300">
                El tratamiento de los datos personales se basa en el consentimiento
                otorgado por el usuario al comunicarse voluntariamente con Ager Fly,
                así como en la necesidad de responder consultas, gestionar
                comunicaciones precontractuales y/o cumplir obligaciones legales
                cuando corresponda.
              </p>
            </section>

            {/* 5 */}
            <section className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                5. Compartición de información
              </h2>
              <p className="text-slate-300">
                Ager Fly no vende, alquila ni comercializa datos personales.
              </p>
              <p className="text-slate-300">
                Solo se compartirá información personal en los siguientes casos:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li>Con consentimiento del usuario.</li>
                <li>
                  Por obligación legal, requerimiento judicial o autoridad
                  competente.
                </li>
                <li>
                  Con proveedores que prestan servicios de soporte tecnológico o
                  comunicaciones (por ejemplo, hosting o correo), en la medida
                  necesaria para la operación, bajo deberes de confidencialidad y
                  seguridad razonables.
                </li>
                <li>
                  En procesos societarios (reorganización, fusión o transferencia
                  de activos), cuando resulte necesario y conforme a la normativa
                  aplicable.
                </li>
              </ul>
            </section>

            {/* 6 */}
            <section className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                6. Servicios de terceros
              </h2>
              <p className="text-slate-300">
                Al comunicarse con Ager Fly a través de servicios de terceros (como
                WhatsApp, correo electrónico u otras plataformas externas), el
                tratamiento de los datos también se encuentra sujeto a las
                políticas de privacidad de dichos servicios.
              </p>
            </section>

            {/* 7 */}
            <section className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                7. Transferencias internacionales
              </h2>
              <p className="text-slate-300">
                Algunos proveedores tecnológicos utilizados por Ager Fly pueden
                procesar información en servidores ubicados fuera de la República
                Argentina. En esos casos, se procurará que el tratamiento se
                realice bajo estándares de seguridad razonables y conforme a las
                políticas de dichos proveedores.
              </p>
            </section>

            {/* 8 */}
            <section className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                8. Seguridad y conservación
              </h2>
              <p className="text-slate-300">
                Ager Fly adopta medidas razonables para proteger la información
                personal contra accesos no autorizados, pérdida, alteración o
                divulgación.
              </p>
              <p className="text-slate-300">
                Los datos personales se conservarán únicamente durante el tiempo
                necesario para cumplir las finalidades indicadas y/o para cumplir
                obligaciones legales, tras lo cual serán eliminados o anonimizados
                de forma segura, cuando resulte aplicable.
              </p>
            </section>

            {/* 9 */}
            <section className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                9. Derechos del titular de los datos
              </h2>
              <p className="text-slate-300">
                El titular de los datos personales podrá solicitar el acceso,
                rectificación, actualización o eliminación de sus datos personales
                enviando una solicitud a:{" "}
                <span className="text-slate-100 font-medium">
                  privacidad@agerfly.com
                </span>.
              </p>
              <p className="text-slate-300">
                La Agencia de Acceso a la Información Pública, en su carácter de
                órgano de control de la Ley 25.326, tiene la atribución de atender
                denuncias y reclamos que se interpongan con relación al
                incumplimiento de las normas sobre protección de datos personales.
              </p>
            </section>


            {/* 10 */}
            <section className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                10. Cambios en esta política y notificaciones
              </h2>
              <p className="text-slate-300">
                Ager Fly podrá actualizar esta Política de Privacidad en cualquier
                momento. Las modificaciones entrarán en vigencia desde su
                publicación en el sitio.
              </p>
              <p className="text-slate-300">
                Cuando los cambios afecten de manera sustancial el tratamiento de
                datos personales o la forma de contacto/gestión de solicitudes,
                Ager Fly podrá notificar a los usuarios a través de los canales de
                contacto disponibles.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
