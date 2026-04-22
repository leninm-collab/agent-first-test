import { motion } from "framer-motion";
import { ArrowDown, Star } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay },
});

const statsVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.7 } },
};

const statItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0d0d0d 0%, #1a1200 50%, #0d0d0d 100%)" }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #d4a843, transparent)" }}
        />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 rounded-full opacity-8"
          style={{ background: "radial-gradient(circle, #d4a843, transparent)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, #f0c96a, transparent)" }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(#d4a843 1px, transparent 1px), linear-gradient(90deg, #d4a843 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-32 left-1/4 w-3 h-3 bg-[#d4a843] rounded-full opacity-40 animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#f0c96a] rounded-full opacity-30 animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-[#d4a843] rounded-full opacity-20 animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div
          {...fadeUp(0)}
          className="inline-flex items-center gap-2 bg-[#1a1a1a] border border-[#d4a843]/30 rounded-full px-4 py-2 mb-8"
        >
          <Star size={14} className="text-[#d4a843] fill-[#d4a843]" />
          <span className="text-[#d4a843] text-sm font-semibold tracking-wide">Diseño Profesional & Creativo</span>
          <Star size={14} className="text-[#d4a843] fill-[#d4a843]" />
        </motion.div>

        {/* Logo / Brand mark */}
        <motion.div {...fadeUp(0.1)} className="flex justify-center mb-6">
          <div className="relative">
            <div
              className="w-28 h-28 rounded-2xl flex items-center justify-center shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #d4a843, #f0c96a)",
                boxShadow: "0 0 60px rgba(212,168,67,0.4)",
              }}
            >
              <span className="text-[#0d0d0d] font-black text-4xl tracking-tight">EC</span>
            </div>
            <div
              className="absolute -inset-1 rounded-2xl opacity-30 blur-md"
              style={{ background: "linear-gradient(135deg, #d4a843, #f0c96a)" }}
            />
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h1 {...fadeUp(0.2)} className="text-5xl sm:text-6xl md:text-7xl font-black mb-4 leading-tight">
          <span className="text-white">Diseño Gráfico</span>
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #d4a843, #f0c96a, #fff8e1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            El Capri
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p {...fadeUp(0.3)} className="text-xl sm:text-2xl text-[#d4a843] font-semibold mb-4 tracking-wide">
          Tu visión, nuestra pasión creativa
        </motion.p>

        {/* Description */}
        <motion.p {...fadeUp(0.4)} className="text-[#aaa] text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Transformamos ideas en identidades visuales poderosas. Logotipos, branding, diseño editorial y mucho más — con calidad profesional y entrega puntual.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div {...fadeUp(0.5)} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("#portafolio")}
            className="btn-gold text-base px-8 py-3"
          >
            Ver Portafolio
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("#contacto")}
            className="btn-outline-gold text-base px-8 py-3"
          >
            Solicitar Cotización
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={statsVariants}
          className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto"
        >
          {[
            { num: "100+", label: "Proyectos" },
            { num: "5★", label: "Calificación" },
            { num: "100%", label: "Satisfacción" },
          ].map((s) => (
            <motion.div key={s.label} variants={statItem} className="text-center">
              <div className="text-2xl font-black text-[#d4a843]">{s.num}</div>
              <div className="text-[#888] text-xs mt-1">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        onClick={() => scrollTo("#servicios")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#d4a843] animate-bounce"
      >
        <ArrowDown size={28} />
      </motion.button>
    </section>
  );
}
