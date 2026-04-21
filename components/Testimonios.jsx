import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    company: "Restaurante Bella Vista",
    text: "El Capri transformó completamente la imagen de mi restaurante. El logo quedó espectacular y mis clientes lo notan. ¡100% recomendado!",
    stars: 5,
    avatar: "MG",
    color: "#d4a843",
  },
  {
    name: "Carlos Mendoza",
    company: "Tech Solutions",
    text: "Profesionalismo y creatividad al máximo nivel. Entregaron todo a tiempo y el resultado superó mis expectativas. Definitivamente volvería a contratar.",
    stars: 5,
    avatar: "CM",
    color: "#3498db",
  },
  {
    name: "Laura Pérez",
    company: "Boutique Moda",
    text: "Mi identidad corporativa quedó perfecta. El manual de marca es muy completo y el diseño es exactamente lo que buscaba para mi tienda.",
    stars: 5,
    avatar: "LP",
    color: "#9b59b6",
  },
  {
    name: "Roberto Silva",
    company: "Gym FitPro",
    text: "Las plantillas para redes sociales son increíbles. Mis seguidores han aumentado desde que empecé a usar el diseño de El Capri.",
    stars: 5,
    avatar: "RS",
    color: "#e74c3c",
  },
];

export default function Testimonios() {
  return (
    <section id="testimonios" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#d4a843] text-sm font-bold uppercase tracking-widest mb-3 block">
            Lo que dicen nuestros clientes
          </span>
          <h2 className="section-title text-white mb-4">
            Clientes{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #d4a843, #f0c96a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Satisfechos
            </span>
          </h2>
          <p className="text-[#888] text-lg max-w-xl mx-auto">
            La confianza de nuestros clientes es nuestro mayor logro.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="card-dark p-6 relative">
              <Quote
                size={36}
                className="absolute top-4 right-4 opacity-10"
                style={{ color: "#d4a843" }}
              />
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={16} className="text-[#d4a843] fill-[#d4a843]" />
                ))}
              </div>
              {/* Text */}
              <p className="text-[#ccc] text-sm leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0"
                  style={{ background: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-bold text-sm">{t.name}</div>
                  <div className="text-[#888] text-xs">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-16 bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: "100+", label: "Proyectos Completados" },
            { num: "50+", label: "Clientes Felices" },
            { num: "3+", label: "Años de Experiencia" },
            { num: "100%", label: "Satisfacción Garantizada" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-black text-[#d4a843] mb-1">{s.num}</div>
              <div className="text-[#888] text-xs">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}