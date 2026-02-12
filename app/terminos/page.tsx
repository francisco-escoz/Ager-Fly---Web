import SiteHeader from "@/components/ui/site-header";
import Footer from "@/components/ui/footer";

export default function Terminos() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <SiteHeader />

      <section className="px-6 pt-14 pb-24">
        <div className="max-w-4xl mx-auto">
          <header className="mb-10 bg-transparent">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Términos de Uso
            </h1>
            <p className="mt-3 text-slate-300 text-base md:text-lg leading-7">
              Última actualización:{" "}
              <span className="text-slate-200">12 de febrero de 2026</span>
            </p>
          </header>

          <div className="space-y-10 text-slate-200/90 leading-8">
            <p className="text-slate-300">
              Los presentes Términos de Uso regulan el acceso y uso del sitio web
              de <span className="text-slate-100 font-semibold">Ager Fly</span>. Al
              acceder, navegar o utilizar este sitio, el usuario acepta quedar
              vinculado por estos términos y se compromete a cumplir con la
              normativa aplicable.
            </p>

            {/* Identificación */}
            <section className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Identificación del titular del sitio
              </h2>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-slate-300">
                  <span className="text-slate-100 font-semibold">
                    Razón social:
                  </span>{" "}
                  Ager Fly Aerospace Company S.R.L
                  <br />
                  <span className="text-slate-100 font-semibold">
                    Nombre comercial:
                  </span>{" "}
                  Ager Fly
                  <br />
                  <span className="text-slate-100 font-semibold">CUIT:</span>{" "}
                  30-71895205-7
                  <br />
                  <span className="text-slate-100 font-semibold">
                    Domicilio legal:
                  </span>{" "}
                  Tejedor 578, Parque Chacabuco, Ciudad Autónoma de Buenos Aires,
                  República Argentina
                  <br />
                  <span className="text-slate-100 font-semibold">Contacto:</span>{" "}
                  <span className="text-slate-100 font-medium">
                    legal@agerfly.com
                  </span>
                </p>
              </div>
            </section>


            {/* Aceptación */}
            <section className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Aceptación de los términos
              </h2>
              <p className="text-slate-300">
                El acceso, navegación o utilización del sitio implica la aceptación
                plena y sin reservas de estos Términos de Uso vigentes al momento
                del acceso, así como de la Política de Privacidad.
              </p>
              <p className="text-slate-300">
                En caso de que el usuario no esté de acuerdo con estos términos,
                deberá abstenerse de utilizar el sitio.
              </p>
            </section>

            {/* 1 */}
            <section className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                1. Uso del sitio
              </h2>
              <p className="text-slate-300">
                El usuario se compromete a utilizar el sitio de manera lícita,
                responsable y conforme a estos Términos. Queda prohibido interferir
                con su funcionamiento, intentar acceder a áreas restringidas,
                introducir código malicioso, automatizar accesos sin autorización o
                realizar acciones que afecten la seguridad, integridad o
                disponibilidad del sitio.
              </p>
            </section>

            {/* 2 */}
            <section className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                2. Derechos de autor y uso del contenido
              </h2>
              <p className="text-slate-300">
                Todos los contenidos del sitio —incluyendo textos, imágenes, renders,
                fotografías, videos, documentos técnicos, catálogos, fichas, manuales,
                diagramas, diseños, interfaces y software— son propiedad de Ager Fly
                o se utilizan bajo autorización y se encuentran protegidos por las
                leyes de propiedad intelectual.
              </p>
              <p className="text-slate-300">
                Queda prohibida su copia, reproducción, distribución, publicación,
                modificación o uso comercial sin autorización escrita previa del
                titular correspondiente. Se permite la descarga o impresión de
                contenidos únicamente para uso personal y no comercial, siempre que
                no se modifiquen ni se eliminen los avisos de derechos.
              </p>
            </section>

            {/* 3 */}
            <section className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                3. Marcas y propiedad industrial
              </h2>
              <p className="text-slate-300">
                Las marcas comerciales, logotipos, nombres comerciales e identidades
                visuales exhibidas en el sitio pertenecen a Ager Fly o a terceros. Su
                uso sin autorización escrita previa del titular de los derechos se
                encuentra expresamente prohibido.
              </p>
            </section>

            {/* 4 */}
            <section className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                4. Contenido informativo
              </h2>
              <p className="text-slate-300">
                El contenido del sitio se brinda con fines informativos y de
                referencia. Ager Fly procura mantener la información actualizada y
                correcta, pero no garantiza su exactitud, integridad, disponibilidad
                permanente ni ausencia de errores.
              </p>
              <p className="text-slate-300">
                La información publicada no constituye una oferta vinculante ni
                sustituye asesoramiento técnico, comercial o contractual específico,
                el cual será definido exclusivamente a través de canales formales.
              </p>
            </section>

            {/* 5 */}
            <section className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                5. Renders, imágenes y datos técnicos
              </h2>
              <p className="text-slate-300">
                Las imágenes, renders, ilustraciones, animaciones, videos y demás
                representaciones visuales exhibidas en el sitio tienen fines
                ilustrativos y referenciales. El producto final, sus componentes,
                materiales, colores, dimensiones y configuraciones pueden diferir de
                lo mostrado.
              </p>
              <p className="text-slate-300">
                Asimismo, las especificaciones técnicas, prestaciones, alcances,
                capacidades y demás datos publicados pueden estar sujetos a cambios
                por mejoras de ingeniería, validaciones, disponibilidad regional o
                requisitos normativos, y deberán confirmarse por canales formales.
              </p>
            </section>

            {/* 6 */}
            <section className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                6. Limitación de responsabilidad
              </h2>
              <p className="text-slate-300">
                Ager Fly será responsable únicamente en aquellos casos y bajo los
                alcances expresamente previstos por la legislación vigente, y dentro
                de los límites que dicha normativa establece.
              </p>
              <p className="text-slate-300">
                En la máxima medida permitida por la ley, Ager Fly no será responsable
                por daños directos o indirectos derivados del acceso, uso o
                imposibilidad de uso del sitio, incluyendo —sin limitarse— pérdidas de
                datos, pérdidas económicas, lucro cesante, pérdida de chance, daños
                consecuentes, interrupciones, fallas, errores, defectos, demoras o la
                presencia de virus u otros componentes dañinos.
              </p>
              <p className="text-slate-300">
                El usuario reconoce que cualquier decisión tomada en base al contenido
                del sitio se realiza bajo su exclusiva responsabilidad. En la máxima
                medida permitida por la ley, la responsabilidad total de Ager Fly por
                reclamos vinculados al uso del sitio quedará limitada al monto
                efectivamente abonado por el usuario por dicho acceso, si lo hubiere.
              </p>
            </section>

            {/* 7 */}
            <section className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                7. Disponibilidad de productos y variaciones regionales
              </h2>
              <p className="text-slate-300">
                Los productos, servicios y descripciones mostrados en el sitio pueden
                variar según el país, región, normativa aplicable, disponibilidad,
                versiones técnicas o condiciones operativas. Para confirmar alcance,
                configuración o condiciones comerciales, el usuario deberá comunicarse
                con Ager Fly a través de los canales oficiales.
              </p>
            </section>

            {/* 8 */}
            <section className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                8. Enlaces a terceros
              </h2>
              <p className="text-slate-300">
                El sitio puede contener enlaces a sitios o servicios de terceros.
                Ager Fly no controla ni asume responsabilidad alguna por su contenido,
                políticas o prácticas. El acceso a dichos enlaces se realiza bajo
                exclusiva responsabilidad del usuario.
              </p>
            </section>

            {/* 9 */}
            <section className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                9. Buena fe del usuario e indemnidad
              </h2>
              <p className="text-slate-300">
                El usuario se obliga a utilizar el sitio de buena fe, de forma lícita
                y conforme a la normativa vigente. Cualquier uso doloso, fraudulento,
                negligente o contrario a estos Términos será de exclusiva
                responsabilidad del usuario.
              </p>
              <p className="text-slate-300">
                El usuario se compromete a indemnizar y mantener indemne a Ager Fly,
                sus socios, directores, empleados, colaboradores y proveedores frente
                a cualquier reclamo, sanción, daño, perjuicio, pérdida o gasto
                —incluidos honorarios legales razonables— que se derive directa o
                indirectamente de: (i) el uso indebido del sitio, (ii) el incumplimiento
                de estos Términos, y/o (iii) la violación de derechos de terceros
                imputable al usuario.
              </p>
            </section>

            {/* 10 */}
            <section className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                10. Modificaciones y notificaciones
              </h2>
              <p className="text-slate-300">
                Ager Fly podrá modificar estos Términos de Uso en cualquier momento.
                Las modificaciones entrarán en vigencia desde su publicación en el
                sitio. El uso continuado del sitio implica la aceptación de dichos
                cambios.
              </p>
              <p className="text-slate-300">
                Cuando los cambios afecten de manera sustancial la prestación de
                servicios, condiciones comerciales o aspectos relevantes del sitio,
                Ager Fly podrá notificar a los usuarios a través de los canales de
                contacto disponibles.
              </p>
            </section>

            {/* 11 */}
            <section className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                11. No renuncia
              </h2>
              <p className="text-slate-300">
                La falta o demora de Ager Fly en exigir el cumplimiento estricto de
                estos Términos no se interpretará como renuncia a sus derechos, los
                cuales podrán ejercerse en cualquier momento.
              </p>
            </section>

            {/* 12 */}
            <section className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                12. Legislación aplicable y jurisdicción
              </h2>
              <p className="text-slate-300">
                Estos Términos de Uso se rigen por la legislación vigente en la
                República Argentina. Cualquier controversia derivada del uso del
                sitio o de estos términos será sometida a la jurisdicción de los
                tribunales competentes de{" "}
                <span className="text-slate-100 font-medium">
                  la Ciudad Autónoma de Buenos Aires
                </span>
                , renunciando el usuario a cualquier otro fuero que pudiera
                corresponder.
              </p>
              <p className="text-slate-300">
                Si alguna disposición de estos Términos fuera declarada inválida o
                inaplicable, ello no afectará la validez de las restantes
                disposiciones, que continuarán plenamente vigentes.
              </p>
            </section>

            {/* 13 */}
            <section className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                13. Contacto
              </h2>
              <p className="text-slate-300">
                Para consultas relacionadas con estos Términos de Uso, puede
                contactarse con Ager Fly a través del correo electrónico{" "}
                <span className="text-slate-100 font-medium">
                  legal@agerfly.com
                </span>.
              </p>
            </section>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
