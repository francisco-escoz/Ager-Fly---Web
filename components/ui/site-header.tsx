"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const links = [
  { href: "/", label: "Condor C80" },
  // { href: "/repuestos", label: "Repuestos" },
  { href: "/soporte", label: "Soporte" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function SiteHeader() {
  return (
    <header className="backdrop-blur sticky top-0 z-50 border-b border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="
    flex-shrink-0
    transition-transform
    duration-300
    ease-out
    hover:scale-105
  "
          >
            <Image
              src="/images/logoblanco-notagline.png"
              alt="Logo Ager Fly"
              width={400}
              height={100}
              className="h-16 w-auto"
              priority
            />
          </Link>


          {/* Desktop nav */}
          <nav
            className="
              hidden nav:flex items-center
              gap-3 nav:gap-4 xl:gap-6 2xl:gap-8
              overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
            "
          >
            {links.map((l) => (
              <Button
                key={l.href}
                variant="ghost"
                asChild
                className="px-2 nav:px-3 text-slate-300 hover:text-white hover:bg-slate-800 whitespace-nowrap text-sm xl:text-base"
              >
                <Link href={l.href}>{l.label}</Link>
              </Button>
            ))}
          </nav>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                aria-label="Abrir menú"
                className="
                  nav:hidden ml-2
                  h-10 w-10 p-0 flex items-center justify-center
                  text-slate-300 hover:text-white hover:bg-slate-800
                  focus-visible:ring-2 focus-visible:ring-slate-500
                  [&_svg]:h-6 [&_svg]:w-6
                "
              >
                <Menu size={28} />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="left"
              className="bg-slate-900 border-slate-800 w-72 [&_button>svg]:text-white"
            >
              {/* ✅ Requerido por Radix para accesibilidad */}
              <SheetHeader>
                <VisuallyHidden>
                  <SheetTitle>Menú</SheetTitle>
                </VisuallyHidden>
                <VisuallyHidden>
                  <SheetDescription>Navegación principal del sitio</SheetDescription>
                </VisuallyHidden>
              </SheetHeader>

              <div className="mt-6">
                <nav className="flex flex-col">
                  {links.map((l) => (
                    <SheetClose asChild key={l.href}>
                      <Link
                        href={l.href}
                        className="px-3 py-3 rounded-md text-slate-200 hover:bg-slate-800"
                      >
                        {l.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
