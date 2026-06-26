"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import {
  Minus,
  Plus,
  ShoppingCart,
  Trash2,
  Wrench,
  PackageCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type CategoriaId =
  | "todos"
  | "estructura"
  | "propulsion"
  | "electronica"
  | "pulverizacion"
  | "bateria";

type Kit = {
  id: string;
  categoria: Exclude<CategoriaId, "todos">;
  nombre: string;
  descripcion: string;
  problema: string;
  incluye: string[];
  precio: number;
  moneda: "USD";
  stock: boolean;
  imagenes: string[];
};

type ItemCarrito = {
  producto: Kit;
  cantidad: number;
};

const WHATSAPP_COMERCIAL = "5491130183256";
const STORAGE_KEY = "agerfly-carrito";

const categorias: { id: CategoriaId; nombre: string }[] = [
  { id: "todos", nombre: "Todos" },
  { id: "estructura", nombre: "Estructura" },
  { id: "propulsion", nombre: "Propulsión" },
  { id: "electronica", nombre: "Electrónica" },
  { id: "pulverizacion", nombre: "Pulverización" },
  { id: "bateria", nombre: "Batería" },
];

const kits: Kit[] = [
  {
    id: "kit-reparacion-brazo",
    categoria: "estructura",
    nombre: "Kit de reparación de brazo",
    descripcion:
      "Kit completo para reparar el conjunto de brazo ante rotura estructural o daño por impacto.",
    problema:
      "Pensado para casos donde se rompe un brazo o queda comprometido el conjunto de propulsión asociado.",
    incluye: [
      "Brazo estructural",
      "Motor principal",
      "ESC",
      "Hélice",
      "Clip de fijación",
      "Quiebre / unión estructural",
      "Bulones y fijaciones",
      "Herramientas necesarias para montaje",
    ],
    precio: 1450,
    moneda: "USD",
    stock: true,
    imagenes: [
      "/images/kits/placeholder-1.png",
      "/images/kits/placeholder-2.png",
      "/images/kits/placeholder-3.png",
    ],
  },
  {
    id: "kit-reparacion-motor",
    categoria: "propulsion",
    nombre: "Kit de reparación de motor",
    descripcion:
      "Conjunto de repuestos para reemplazo o reparación del sistema de propulsión.",
    problema:
      "Ideal cuando el motor sufrió daño, pérdida de rendimiento o falla asociada al conjunto motor-hélice.",
    incluye: [
      "Motor principal",
      "Base de motor",
      "Hélice CW/CCW según configuración",
      "Bulones",
      "Conectores",
      "Herramientas básicas de ajuste",
    ],
    precio: 920,
    moneda: "USD",
    stock: true,
    imagenes: ["/images/kits/placeholder-1.png", "/images/kits/placeholder-2.png"],
  },
  {
    id: "kit-reparacion-electronica",
    categoria: "electronica",
    nombre: "Kit de reparación electrónica",
    descripcion:
      "Kit orientado a diagnóstico y reemplazo de componentes electrónicos críticos.",
    problema:
      "Pensado para fallas de control, comunicación, potencia o conexiones internas.",
    incluye: [
      "ESC",
      "Cableado interno",
      "Conectores",
      "Distribuidor de potencia",
      "Fusibles / protecciones",
      "Herramientas de diagnóstico básico",
    ],
    precio: 1180,
    moneda: "USD",
    stock: true,
    imagenes: ["/images/kits/placeholder-1.png", "/images/kits/placeholder-2.png"],
  },
  {
    id: "kit-reparacion-pulverizacion",
    categoria: "pulverizacion",
    nombre: "Kit de reparación de pulverización",
    descripcion:
      "Kit para mantenimiento o reparación del sistema de aplicación del producto.",
    problema:
      "Recomendado ante obstrucciones, daños en aspersores, mangueras o fallas en el circuito de pulverización.",
    incluye: [
      "Aspersor",
      "Mangueras",
      "Filtros",
      "Conectores",
      "Abrazaderas",
      "Sellos",
      "Herramientas de limpieza y montaje",
    ],
    precio: 690,
    moneda: "USD",
    stock: true,
    imagenes: ["/images/kits/placeholder-1.png", "/images/kits/placeholder-2.png"],
  },
  {
    id: "kit-reparacion-bateria",
    categoria: "bateria",
    nombre: "Kit de conexión de batería",
    descripcion:
      "Kit para reparación o reemplazo de componentes asociados a la conexión de energía.",
    problema:
      "Pensado para daños en conectores, soportes, cableado de potencia o fijaciones de batería.",
    incluye: [
      "Conector de batería",
      "Cableado de potencia",
      "Soporte de batería",
      "Bulones",
      "Fijaciones",
      "Herramientas de montaje",
    ],
    precio: 540,
    moneda: "USD",
    stock: true,
    imagenes: ["/images/kits/placeholder-1.png", "/images/kits/placeholder-2.png"],
  },
];

function formatearPrecio(valor: number) {
  return `USD ${valor.toLocaleString("es-AR")}`;
}

export default function KitReparacionPage() {
  const [categoriaActiva, setCategoriaActiva] =
    useState<CategoriaId>("todos");

  const [carrito, setCarrito] = useState<ItemCarrito[]>([]);
  const [carritoCargado, setCarritoCargado] = useState(false);
  const [imagenesActivas, setImagenesActivas] = useState<Record<string, number>>(
    {}
  );

  const [kitSeleccionado, setKitSeleccionado] = useState<Kit | null>(null);

  useEffect(() => {
    const guardado = localStorage.getItem(STORAGE_KEY);

    if (guardado) {
      try {
        setCarrito(JSON.parse(guardado));
      } catch {
        setCarrito([]);
      }
    }

    setCarritoCargado(true);
  }, []);

  useEffect(() => {
    if (!carritoCargado) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(carrito));
  }, [carrito, carritoCargado]);

  const kitsFiltrados = useMemo(() => {
    if (categoriaActiva === "todos") return kits;
    return kits.filter((kit) => kit.categoria === categoriaActiva);
  }, [categoriaActiva]);

  const total = carrito.reduce(
    (acc, item) => acc + item.producto.precio * item.cantidad,
    0
  );

  const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  function agregarAlCarrito(producto: Kit) {
    setCarrito((actual) => {
      const existe = actual.find((item) => item.producto.id === producto.id);

      if (existe) {
        return actual.map((item) =>
          item.producto.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }

      return [...actual, { producto, cantidad: 1 }];
    });
  }

  function sumarCantidad(productoId: string) {
    setCarrito((actual) =>
      actual.map((item) =>
        item.producto.id === productoId
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      )
    );
  }

  function restarCantidad(productoId: string) {
    setCarrito((actual) =>
      actual
        .map((item) =>
          item.producto.id === productoId
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        )
        .filter((item) => item.cantidad > 0)
    );
  }

  function eliminarProducto(productoId: string) {
    setCarrito((actual) =>
      actual.filter((item) => item.producto.id !== productoId)
    );
  }

  function cambiarImagen(productoId: string, index: number) {
    setImagenesActivas((actual) => ({
      ...actual,
      [productoId]: index,
    }));
  }

  function solicitarCotizacion() {
    const detalle = carrito
      .map(
        (item) =>
          `• ${item.producto.nombre} x${item.cantidad} - ${formatearPrecio(
            item.producto.precio * item.cantidad
          )}`
      )
      .join("\n");

    const mensaje = `Hola Ager Fly, quiero solicitar una cotización por los siguientes productos:

${detalle}

Total estimado: ${formatearPrecio(total)}

¿Me podrían confirmar disponibilidad, precio final y forma de entrega?`;

    window.open(
      `https://wa.me/${WHATSAPP_COMERCIAL}?text=${encodeURIComponent(mensaje)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <main className="min-h-screen bg-[#050a18] text-white">
      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.22),_transparent_45%)]">
        <div className="container mx-auto px-4 py-20">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-blue-400">
            Kits de reparación
          </p>

          <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
                Soluciones completas para reparar fallas específicas
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                A diferencia de los repuestos individuales, los kits de
                reparación reúnen los componentes y herramientas necesarios para
                resolver un problema puntual del dron.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <Wrench className="mb-4 h-7 w-7 text-blue-400" />
                  <h2 className="text-lg font-semibold">
                    Reparación por problema
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Por ejemplo, si se rompe un brazo, el kit puede incluir
                    brazo, motor, ESC, hélice, clip, quiebre, bulones y
                    herramientas necesarias.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <PackageCheck className="mb-4 h-7 w-7 text-blue-400" />
                  <h2 className="text-lg font-semibold">
                    Todo en una sola solicitud
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Evitá comprar pieza por pieza y asegurá que el cliente
                    reciba todo lo necesario para la reparación en campo.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-blue-500/20 bg-white/[0.04] p-6 shadow-2xl shadow-blue-950/30 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600">
                  <ShoppingCart className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-sm text-slate-400">Carrito</p>
                  <p className="text-2xl font-semibold">
                    {cantidadTotal} producto{cantidadTotal === 1 ? "" : "s"}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm text-slate-400">Total estimado</p>

              <p className="text-3xl font-semibold">
                {formatearPrecio(total)}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <div className="sticky top-16 z-30 -mx-4 border-b border-white/10 bg-[#050a18]/95 px-4 py-4 backdrop-blur">
          <div className="flex gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categorias.map((categoria) => (
              <button
                key={categoria.id}
                onClick={() => setCategoriaActiva(categoria.id)}
                className={`whitespace-nowrap rounded-full border px-5 py-2.5 text-sm transition ${
                  categoriaActiva === categoria.id
                    ? "border-blue-500 bg-blue-600 text-white"
                    : "border-white/10 bg-white/[0.03] text-slate-300 hover:border-blue-500/60 hover:text-white"
                }`}
              >
                {categoria.nombre}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]">
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-semibold md:text-4xl">
                {categorias.find((c) => c.id === categoriaActiva)?.nombre}
              </h2>

              <p className="mt-2 text-slate-400">
                {kitsFiltrados.length} kit
                {kitsFiltrados.length === 1 ? "" : "s"} disponible
                {kitsFiltrados.length === 1 ? "" : "s"}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {kitsFiltrados.map((kit) => {
                const imagenActiva = imagenesActivas[kit.id] ?? 0;

                return (
                  <article
                    key={kit.id}
                    onClick={() => setKitSeleccionado(kit)}
                    className="group cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-blue-500/50"
                  >
                    <div className="relative h-64 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950">
                      <Image
                        src={kit.imagenes[imagenActiva]}
                        alt={kit.nombre}
                        fill
                        className="object-contain p-8 transition duration-300 group-hover:scale-105"
                      />

                      <div className="absolute left-4 top-4 rounded-full border border-green-400/30 bg-green-500/10 px-3 py-1 text-xs text-green-300">
                        {kit.stock ? "Disponible" : "Sin stock"}
                      </div>
                    </div>

                    <div className="border-t border-white/10 p-5">
                      <div className="mb-4 flex gap-2">
                        {kit.imagenes.map((_, index) => (
                          <button
                            key={index}
                            onClick={(e) => {
                              e.stopPropagation();
                              cambiarImagen(kit.id, index);
                            }}
                            className={`h-2.5 rounded-full transition-all ${
                              imagenActiva === index
                                ? "w-8 bg-blue-500"
                                : "w-2.5 bg-slate-600 hover:bg-slate-400"
                            }`}
                            aria-label={`Ver imagen ${index + 1}`}
                          />
                        ))}
                      </div>

                      <h3 className="text-xl font-semibold">{kit.nombre}</h3>

                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-400">
                        {kit.descripcion}
                      </p>

                      <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                        <p className="text-sm font-medium text-blue-300">
                          Problema que resuelve
                        </p>
                        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-400">
                          {kit.problema}
                        </p>
                      </div>

                      <div className="mt-5">
                        <p className="text-2xl font-semibold">
                          {formatearPrecio(kit.precio)}
                        </p>
                      </div>

                      <div className="mt-5 flex gap-2">
                        <Button
                          variant="outline"
                          onClick={(e) => {
                            e.stopPropagation();
                            setKitSeleccionado(kit);
                          }}
                          className="flex-1 border-white/10 bg-transparent text-white hover:bg-white/10"
                        >
                          Ver detalle
                        </Button>

                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            agregarAlCarrito(kit);
                          }}
                          className="flex-1 bg-blue-600 hover:bg-blue-500"
                        >
                          Agregar
                        </Button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <aside className="h-fit rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/20 lg:sticky lg:top-36">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold">Solicitud</h2>
                <p className="text-sm text-slate-400">
                  Productos seleccionados
                </p>
              </div>

              <ShoppingCart className="h-6 w-6 text-blue-400" />
            </div>

            {carrito.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-white/15 p-6 text-center">
                <p className="text-slate-300">Tu carrito está vacío.</p>
                <p className="mt-2 text-sm text-slate-500">
                  Agregá kits o repuestos para armar tu solicitud.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {carrito.map((item) => (
                  <div
                    key={item.producto.id}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-medium text-white">
                          {item.producto.nombre}
                        </h3>

                        <p className="mt-1 text-sm text-slate-400">
                          {formatearPrecio(item.producto.precio)} c/u
                        </p>
                      </div>

                      <button
                        onClick={() => eliminarProducto(item.producto.id)}
                        className="rounded-lg p-2 text-slate-400 hover:bg-white/10 hover:text-white"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-white/10">
                        <button
                          onClick={() => restarCantidad(item.producto.id)}
                          className="p-2 text-slate-300 hover:text-white"
                        >
                          <Minus className="h-4 w-4" />
                        </button>

                        <span className="min-w-10 text-center text-sm">
                          {item.cantidad}
                        </span>

                        <button
                          onClick={() => sumarCantidad(item.producto.id)}
                          className="p-2 text-slate-300 hover:text-white"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      <p className="font-semibold">
                        {formatearPrecio(item.producto.precio * item.cantidad)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6 border-t border-white/10 pt-5">
              <div className="flex items-center justify-between text-slate-300">
                <span>Total estimado</span>
                <span className="text-xl font-semibold text-white">
                  {formatearPrecio(total)}
                </span>
              </div>

              <Button
                disabled={carrito.length === 0}
                onClick={solicitarCotizacion}
                className="mt-5 w-full bg-blue-600 hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Solicitar cotización
              </Button>

              <p className="mt-3 text-center text-xs leading-5 text-slate-500">
                La solicitud no confirma compra. Un asesor comercial validará
                disponibilidad, precio final y forma de entrega.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <Dialog
        open={!!kitSeleccionado}
        onOpenChange={(open) => {
          if (!open) setKitSeleccionado(null);
        }}
      >
        <DialogContent className="max-h-[90vh] max-w-6xl overflow-y-auto border-white/10 bg-[#050a18] text-white">
          {kitSeleccionado && (
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="relative h-[320px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 md:h-[480px]">
                  <Image
                    src={
                      kitSeleccionado.imagenes[
                        imagenesActivas[kitSeleccionado.id] ?? 0
                      ]
                    }
                    alt={kitSeleccionado.nombre}
                    fill
                    className="object-contain p-8 md:p-12"
                  />
                </div>

                <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
                  {kitSeleccionado.imagenes.map((imagen, index) => (
                    <button
                      key={imagen}
                      onClick={() => cambiarImagen(kitSeleccionado.id, index)}
                      className={`relative h-20 w-24 shrink-0 overflow-hidden rounded-2xl border bg-slate-900 ${
                        (imagenesActivas[kitSeleccionado.id] ?? 0) === index
                          ? "border-blue-500"
                          : "border-white/10"
                      }`}
                    >
                      <Image
                        src={imagen}
                        alt={`${kitSeleccionado.nombre} ${index + 1}`}
                        fill
                        className="object-contain p-2"
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <DialogHeader>
                  <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
                    Kit de reparación
                  </p>

                  <DialogTitle className="text-3xl font-semibold md:text-4xl">
                    {kitSeleccionado.nombre}
                  </DialogTitle>

                  <DialogDescription className="text-base leading-7 text-slate-400">
                    {kitSeleccionado.descripcion}
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-6 rounded-3xl border border-blue-500/20 bg-blue-500/5 p-5">
                  <p className="text-sm font-medium text-blue-300">
                    Problema que resuelve
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {kitSeleccionado.problema}
                  </p>
                </div>

                <div className="mt-6">
                  <p className="mb-3 text-sm font-medium uppercase tracking-widest text-slate-400">
                    Incluye
                  </p>

                  <ul className="grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
                    {kitSeleccionado.incluye.map((item) => (
                      <li
                        key={item}
                        className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-slate-400">Precio estimado</p>
                      <p className="text-4xl font-semibold">
                        {formatearPrecio(kitSeleccionado.precio)}
                      </p>
                    </div>

                    <div className="rounded-full border border-green-400/30 bg-green-500/10 px-3 py-1 text-xs text-green-300">
                      {kitSeleccionado.stock ? "Disponible" : "Sin stock"}
                    </div>
                  </div>

                  <Button
                    onClick={() => agregarAlCarrito(kitSeleccionado)}
                    className="mt-5 w-full bg-blue-600 hover:bg-blue-500"
                  >
                    Agregar al carrito
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}