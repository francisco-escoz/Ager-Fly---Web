"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

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
        <svg width="26" height="26" viewBox="0 0 32 32" fill="white" aria-hidden="true">
          <path d="M19.11 17.21c-.29-.14-1.7-.84-1.96-.93-.26-.1-.45-.14-.64.14-.19.29-.74.93-.91 1.12-.17.19-.34.22-.63.07-.29-.14-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.14-.64-1.54-.87-2.11-.23-.55-.47-.48-.64-.49-.17-.01-.36-.01-.55-.01-.19 0-.51.07-.77.36-.26.29-1.01.99-1.01 2.41 0 1.42 1.03 2.79 1.18 2.98.14.19 2.02 3.08 4.9 4.32.69.3 1.23.48 1.65.62.69.22 1.31.19 1.8.12.55-.08 1.7-.69 1.94-1.35.24-.66.24-1.23.17-1.35-.07-.12-.26-.19-.55-.33z" />
          <path d="M26.67 5.33A14.62 14.62 0 0 0 16.02 1C8.16 1 1.77 7.39 1.77 15.25c0 2.51.66 4.97 1.91 7.15L1.5 30.5l8.3-2.12a14.2 14.2 0 0 0 6.22 1.42h.01c7.86 0 14.25-6.39 14.25-14.25 0-3.8-1.48-7.37-4.16-10.22zM16.03 27.5h-.01c-2.08 0-4.12-.56-5.9-1.62l-.42-.25-4.93 1.26 1.32-4.81-.27-.45a12.2 12.2 0 0 1-1.84-6.38C3.98 8.5 9.27 3.2 16.03 3.2c3.26 0 6.32 1.27 8.62 3.58a12.13 12.13 0 0 1 3.56 8.61c0 6.76-5.29 12.11-12.18 12.11z" />
        </svg>
      </button>
    </div>
  );
}