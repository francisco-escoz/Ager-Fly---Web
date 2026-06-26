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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, ChevronDown } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

type NavLink =
  | {
    label: string;
    href: string;
  }
  | {
    label: string;
    children: {
      href: string;
      label: string;
    }[];
  };


const links: NavLink[] = [
  // {
  //   label: "Productos",
  //   children: [
  //     { href: "/", label: "Cóndor C80" },
  //     { href: "/repuestos", label: "Repuestos" },
  //     { href: "/kit-reparacion", label: "Kit de reparación" },
  //   ],
  // },
  { href: "/soporte", label: "Soporte" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-blue-500/20 bg-[#050a18]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 transition-transform duration-300 ease-out hover:scale-105"
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
          <nav className="hidden nav:flex items-center gap-3 nav:gap-4 xl:gap-6 2xl:gap-8 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {links.map((l) =>
              "children" in l ? (
                <DropdownMenu key={l.label}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="
      px-2 nav:px-3 text-slate-300 hover:text-white hover:bg-slate-800 
      whitespace-nowrap text-sm xl:text-base
      outline-none focus:outline-none
      focus-visible:ring-0 focus-visible:ring-offset-0
      data-[state=open]:bg-slate-800 data-[state=open]:text-white
    "
                    >
                      {l.label}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className="bg-slate-900 border-slate-800 text-slate-200">
                    {l.children.map((child) => (
                      <DropdownMenuItem
                        key={child.href}
                        asChild
                        className="cursor-pointer focus:bg-slate-800 focus:text-white"
                      >
                        <Link href={child.href}>{child.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button
                  key={l.href}
                  variant="ghost"
                  asChild
                  className="px-2 nav:px-3 text-slate-300 hover:text-white hover:bg-slate-800 whitespace-nowrap text-sm xl:text-base"
                >
                  <Link href={l.href}>{l.label}</Link>
                </Button>
              )
            )}
          </nav>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                aria-label="Abrir menú"
                className="nav:hidden ml-2 h-10 w-10 p-0 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-slate-500 [&_svg]:h-6 [&_svg]:w-6"
              >
                <Menu size={28} />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="left"
              className="bg-slate-900 border-slate-800 w-72 [&_button>svg]:text-white"
            >
              <SheetHeader>
                <VisuallyHidden>
                  <SheetTitle>Menú</SheetTitle>
                </VisuallyHidden>
                <VisuallyHidden>
                  <SheetDescription>
                    Navegación principal del sitio
                  </SheetDescription>
                </VisuallyHidden>
              </SheetHeader>

              <div className="mt-6">
                <nav className="flex flex-col">
                  {links.map((l) =>
                    "children" in l ? (
                      <div key={l.label} className="mb-2">
                        <p className="px-3 py-2 text-sm uppercase tracking-wide text-slate-400">
                          {l.label}
                        </p>

                        <div className="flex flex-col pl-3">
                          {l.children.map((child) => (
                            <SheetClose asChild key={child.href}>
                              <Link
                                href={child.href}
                                className="px-3 py-3 rounded-md text-slate-200 hover:bg-slate-800"
                              >
                                {child.label}
                              </Link>
                            </SheetClose>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <SheetClose asChild key={l.href}>
                        <Link
                          href={l.href}
                          className="px-3 py-3 rounded-md text-slate-200 hover:bg-slate-800"
                        >
                          {l.label}
                        </Link>
                      </SheetClose>
                    )
                  )}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}