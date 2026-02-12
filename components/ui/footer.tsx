import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 gap-x-20 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold mb-4">
              <div className="flex justify-center">
                <Link
                  href="/#inicio"
                  className="inline-block transition-transform duration-300 ease-out hover:scale-110"
                >
                  <div className="relative w-[150px] h-[100px]">
                    <Image
  src="/images/logoblanco-notagline-2.png"
  alt="Logo AgerFly"
  fill
  sizes="(max-width: 768px) 180px, 240px"
  className="object-contain"
/>

                  </div>
                </Link>
              </div>
            </div>


            <p className="text-slate-400 mb-6 text-center">
              Droning the sky with solutions that fly.
            </p>

            {/* Redes sociales (externos) */}
            {/* /images/Redes_sociales/b-fb.png */}
            <div className="flex items-center justify-center gap-5">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1LuX5MKFwk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group p-2 rounded-md transition-colors hover:bg-white/5"
              >
                <Image
                  src="/images/Redes_sociales/b-fb.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="opacity-70 group-hover:opacity-100 transition-opacity"
                />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/ager.fly"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group p-2 rounded-md transition-colors hover:bg-white/5"
              >
                <Image
                  src="/images/Redes_sociales/b-ig.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="opacity-70 group-hover:opacity-100 transition-opacity"
                />
              </a>

              {/* X */}
              <a
                href="https://x.com/ager_fly"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="group p-2 rounded-md transition-colors hover:bg-white/5"
              >
                <Image
                  src="/images/Redes_sociales/b-x.png"
                  alt="X"
                  width={24}
                  height={24}
                  className="opacity-70 group-hover:opacity-100 transition-opacity"
                />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/ager-fly"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group p-2 rounded-md transition-colors hover:bg-white/5"
              >
                <Image
                  src="/images/Redes_sociales/b-ld.png"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="opacity-70 group-hover:opacity-100 transition-opacity"
                />
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@AgerFly"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="group p-2 rounded-md transition-colors hover:bg-white/5"
              >
                <Image
                  src="/images/Redes_sociales/b-yt.png"
                  alt="YouTube"
                  width={24}
                  height={24}
                  className="opacity-70 group-hover:opacity-100 transition-opacity"
                />
              </a>
            </div>



          </div>

          {/* Productos */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-blue-400">Productos</h4>
            <ul className="space-y-3 text-slate-400">
              {/* Si tenés una sección con id="condor-80" en la home, esto va perfecto */}
              <li>
                <Link href="/#condor-80" className="hover:text-blue-400">
                  Cóndor C80
                </Link>
              </li>

              {/* Tu ruta real según la carpeta app/repuestos */}
              {/* <li>
                <Link href="/repuestos" className="hover:text-blue-400">
                  Repuestos
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Soporte */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-blue-400">Soporte</h4>
            <ul className="space-y-3 text-slate-400">
              <li>
                <Link href="/soporte" className="hover:text-blue-400">
                  Servicio postventa
                </Link>
              </li>

              {/* No existe app/descargas hoy: lo dejo como “Próximamente” para no romper */}
              {/* <li>
                <span className="text-slate-500 cursor-not-allowed">
                  Descargas (próximamente)
                </span>
              </li> */}

              <li>
                <Link href="/contacto" className="hover:text-blue-400">
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-blue-400">Empresa</h4>
            <ul className="space-y-3 text-slate-400">
              <li>
                <Link href="/nosotros" className="hover:text-blue-400">
                  Acerca de Ager Fly
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap gap-6 text-sm text-slate-500 mb-4 md:mb-0">
              <Link
                href="/privacidad"
                className="hover:text-slate-300 transition-colors"
              >
                Política de Privacidad
              </Link>

              <Link
                href="/terminos"
                className="hover:text-slate-300 transition-colors"
              >
                Términos de Uso
              </Link>

            </div>

            <p className="text-sm text-slate-400">
              &copy; {new Date().getFullYear()} Ager Fly. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
