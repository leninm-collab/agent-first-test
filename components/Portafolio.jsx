import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const categories = ["Todos", "Logotipos", "Branding", "Redes Sociales", "Impreso"];

const projects = [
  {
    title: "Logo Restaurante Bella Vista Lenin",
    category: "Logotipos",
    gradient: "linear-gradient(135deg, #d4a843, #8B4513)",
    initials: "BV",
    desc: "Identidad visual elegante para restaurante gourmet",
  },
  {
    title: "Branding Boutique Moda",
    category: "Branding",
    gradient: "linear-gradient(135deg, #9b59b6, #3498db)",
    initials: "BM",
    desc: "Manual de marca completo para tienda de moda",
  },
  {
    title: "Pack Redes Sociales Gym",
    category: "Redes Sociales",
    gradient: "linear-gradient(135deg, #e74c3c, #f39c12)",
    initials: "GF",
    desc: "30 plantillas para Instagram y Facebook",
  },
  {
    title: "Logo Tech Startup",
    category: "Logotipos",
    gradient: "linear-gradient(135deg, #1abc9c, #2980b9)",
    initials: "TS",
    desc: "Logotipo moderno para empresa tecnológica",
  },
  {
    title: "Catálogo Inmobiliaria",
    category: "Impreso",
    gradient: "linear-gradient(135deg, #2c3e50, #d4a843)",
    initials: "CI",
    desc: "Catálogo de 24 páginas para propiedades",
  },
  {
    title: "Identidad Clínica Dental",
    category: "Branding",
    gradient: "linear-gradient(135deg, #00b4d8, #90e0ef)",
    initials: "CD",
    desc: "Branding completo para clínica odontológica",
  },
  {
    title: "Flyers Evento Musical",
    category: "Impreso",
    gradient: "linear-gradient(135deg, #6c3483, #e91e63)",
    initials: "EM",
    desc: "Diseño de flyers para concierto y festival",
  },
  {
    title: "Feed Instagram Café",
    category: "Redes Sociales",
    gradient: "linear-gradient(135deg, #795548, #ff8f00)",
    initials: "CA",
    desc: "Diseño de feed coherente para cafetería",
  },
  {
    title: "Logo Constructora",
    category: "Logotipos",
    gradient: "linear-gradient(135deg, #37474f, #f57f17)",
    initials: "CO",
    desc: "Logotipo sólido para empresa constructora",
  },
];

export default function Portafolio() {
  const [active, setActive] = useState("Todos");

  const filtered =
    active === "Todos" ? projects : projects.filter((p) => p.category === active);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 3500, stopOnMouseEnter: true })]
  );

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  const updateState = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canGoToPrev());
    setCanNext(emblaApi.canGoToNext());
    setSelectedIndex(emblaApi.selectedSnap());
    setSnapCount(emblaApi.snapList().length);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", updateState);
    emblaApi.on("init", updateState);
    emblaApi.on("reInit", updateState);
    updateState();
    return () => {
      emblaApi.off("select", updateState);
      emblaApi.off("init", updateState);
      emblaApi.off("reInit", updateState);
    };
  }, [emblaApi, updateState]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
      setSelectedIndex(0);
    }
  }, [active, emblaApi]);

  return (
    <section id="portafolio" className="py-24 bg-[#111]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#d4a843] text-sm font-bold uppercase tracking-widest mb-3 block">
            Nuestro trabajo
          </span>
          <h2 className="section-title text-white mb-4">
            <span
              style={{
                background: "linear-gradient(135deg, #d4a843, #f0c96a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Portafolio
            </span>
          </h2>
          <p className="text-[#888] text-lg max-w-xl mx-auto">
            Proyectos reales que demuestran nuestra calidad y creatividad en cada trabajo.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === cat
                  ? "bg-[#d4a843] text-[#0d0d0d]"
                  : "bg-[#1a1a1a] text-[#888] border border-[#2a2a2a] hover:border-[#d4a843] hover:text-[#d4a843]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {filtered.map((p) => (
                <div
                  key={p.title}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4"
                >
                  <div
                    className="group relative overflow-hidden rounded-2xl cursor-pointer h-full"
                    style={{ background: "#1a1a1a", border: "1px solid #2a2a2a" }}
                  >
                    {/* Visual */}
                    <div
                      className="h-48 flex items-center justify-center relative overflow-hidden"
                      style={{ background: p.gradient }}
                    >
                      <span className="text-white font-black text-5xl opacity-80 group-hover:scale-110 transition-transform duration-300">
                        {p.initials}
                      </span>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <ExternalLink
                          size={28}
                          className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                    </div>
                    {/* Info */}
                    <div className="p-4">
                      <span className="text-[#d4a843] text-xs font-bold uppercase tracking-wider">
                        {p.category}
                      </span>
                      <h3 className="text-white font-bold mt-1 mb-1">{p.title}</h3>
                      <p className="text-[#888] text-sm">{p.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prev / Next buttons */}
          <button
            onClick={() => emblaApi?.goToPrev()}
            disabled={!canPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] text-[#d4a843] flex items-center justify-center transition-all hover:bg-[#d4a843] hover:text-[#0d0d0d] disabled:opacity-30 disabled:cursor-not-allowed z-10"
            aria-label="Anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => emblaApi?.goToNext()}
            disabled={!canNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] text-[#d4a843] flex items-center justify-center transition-all hover:bg-[#d4a843] hover:text-[#0d0d0d] disabled:opacity-30 disabled:cursor-not-allowed z-10"
            aria-label="Siguiente"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dot indicators */}
        {snapCount > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: snapCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.goTo(i)}
                aria-label={`Ir a slide ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === selectedIndex
                    ? "bg-[#d4a843] w-5"
                    : "bg-[#333] hover:bg-[#666]"
                }`}
              />
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-[#888] mb-4">¿Te gustó lo que ves? ¡Trabajemos juntos!</p>
          <button
            onClick={() => {
              const el = document.querySelector("#contacto");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-gold"
          >
            Iniciar mi Proyecto
          </button>
        </div>
      </div>
    </section>
  );
}
