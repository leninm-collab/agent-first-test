import { Layers, Award, BookOpen, Share2, Printer, Monitor } from "lucide-react";

const services = [
  {
    icon: Award,
    title: "Diseño de Logotipos",
    desc: "Creamos logotipos únicos y memorables que representan la esencia de tu marca con estilo y profesionalismo.",
    price: "Desde $50",
    tag: "Más popular",
  },
  {
    icon: Layers,
    title: "Identidad Corporativa",
    desc: "Manual de marca completo: colores, tipografías, papelería y todos los elementos visuales de tu empresa.",
    price: "Desde $120",
    tag: null,
  },
  {
    icon: Share2,
    title: "Redes Sociales",
    desc: "Diseño de posts, stories, banners y plantillas para que tu presencia digital sea coherente y atractiva.",
    price: "Desde $30",
    tag: null,
  },
  {
    icon: Printer,
    title: "Publicidad Impresa",
    desc: "Flyers, tarjetas de presentación, carteles, banners y todo material impreso con diseño impactante.",
    price: "Desde $25",
    tag: null,
  },
  {
    icon: BookOpen,
    title: "Diseño Editorial",
    desc: "Revistas, catálogos, brochures y libros con maquetación profesional y atractiva para tu audiencia.",
    price: "Desde $80",
    tag: null,
  },
  {
    icon: Monitor,
    title: "Diseño Digital",
    desc: "Banners web, presentaciones, infografías y piezas digitales optimizadas para todos los formatos.",
    price: "Desde $35",
    tag: null,
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#d4a843] text-sm font-bold uppercase tracking-widest mb-3 block">
            ¿Qué ofrecemos?
          </span>
          <h2 className="section-title text-white mb-4">
            Nuestros{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #d4a843, #f0c96a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Servicios
            </span>
          </h2>
          <p className="text-[#888] text-lg max-w-xl mx-auto">
            Soluciones creativas para cada necesidad de tu negocio, con calidad garantizada y precios accesibles.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="card-dark p-6 relative group">
                {s.tag && (
                  <span className="absolute top-4 right-4 bg-[#d4a843] text-[#0d0d0d] text-xs font-bold px-3 py-1 rounded-full">
                    {s.tag}
                  </span>
                )}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "linear-gradient(135deg, #d4a843, #f0c96a)" }}
                >
                  <Icon size={22} className="text-[#0d0d0d]" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-[#888] text-sm leading-relaxed mb-4">{s.desc}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#2a2a2a]">
                  <span className="text-[#d4a843] font-bold text-sm">{s.price}</span>
                  <button
                    onClick={() => {
                      const el = document.querySelector("#contacto");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-[#d4a843] text-sm font-semibold hover:underline"
                  >
                    Cotizar →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}