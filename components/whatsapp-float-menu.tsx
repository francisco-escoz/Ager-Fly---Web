"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

type Option = {
  label: string;
  phoneE164: string; // ej: "5491123456789" (sin +)
  message?: string;
};

type WhatsAppFloatMenuProps = {
  options: Option[];
  defaultMessage?: string;
};

export default function WhatsAppFloatMenu({
  options,
  defaultMessage = "Hola! Quisiera hacer una consulta.",
}: WhatsAppFloatMenuProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const normalized = useMemo(() => {
    return options.map((o) => ({
      ...o,
      href: `https://wa.me/${o.phoneE164}?text=${encodeURIComponent(
        o.message ?? defaultMessage
      )}`,
    }));
  }, [options, defaultMessage]);

  // Cerrar al clickear afuera
  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (!open) return;
      if (!wrapperRef.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  // Cerrar con Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!open) return;
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div ref={wrapperRef} className="fixed bottom-5 right-5 z-50">
      {/* MENÚ ABSOLUTO (no agranda el contenedor) */}
      <div
        className={[
          "absolute right-0 bottom-16",
          "w-48 rounded-xl shadow-xl border border-white/10 bg-black/80 backdrop-blur-md",
          "transition-all duration-200",
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-2 pointer-events-none",
        ].join(" ")}
        aria-hidden={!open}
      >
        <div className="p-2">
          {normalized.map((o) => (
            <a
              key={o.label}
              href={o.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-sm text-white hover:bg-white/10 rounded-lg transition"
              onClick={() => setOpen(false)}
            >
              {o.label}
            </a>
          ))}
        </div>
      </div>

      {/* BOTÓN (solo ícono, chico) */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="WhatsApp"
        className="
          w-10 h-10 sm:w-16 sm:h-16
          flex items-center justify-center
          rounded-full
          bg-green-500 hover:bg-green-600
          shadow-lg
          transition
        "
      >
        <Image
          src="/images/Redes_sociales/whatsapp-logo.png"
          alt="WhatsApp"
          width={56}
          height={56}
          className="object-contain"
        />
      </button>
    </div>
  );
}