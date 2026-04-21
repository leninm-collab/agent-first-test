import { useState } from "react";
import { Mail, MessageCircle, Clock, CheckCircle } from "lucide-react";

const serviceOptions = [
  "Diseño de Logotipo",
  "Identidad Corporativa",
  "Redes Sociales",
  "Publicidad Impresa",
  "Diseño Editorial",
  "Diseño Digital",
  "Otro",
];

export default function Contacto() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending
    setSent(true);
    setForm({ name: "", email: "", service: "", message: "" });
  };

  return (
    <section id="contacto" className="py-24 bg-[#111]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#d4a843] text-sm font-bold uppercase tracking-widest mb-3 block">
            Hablemos
          </span>
          <h2 className="section-title text-white mb-4">
            Solicita tu{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #d4a843, #f0c96a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Cotización
            </span>
          </h2>
          <p className="text-[#888] text-lg max-w-xl mx-auto">
            Cuéntanos tu proyecto y te responderemos en menos de 24 horas con una propuesta personalizada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8">
            {sent ? (
              <div className="text-center py-10">
                <CheckCircle size={56} className="text-[#d4a843] mx-auto mb-4" />
                <h3 className="text-white font-bold text-xl mb-2">¡Mensaje Enviado!</h3>
                <p className="text-[#888]">
                  Gracias por contactarnos. Te responderemos pronto con tu cotización.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="btn-outline-gold mt-6 text-sm"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-[#ccc] text-sm font-medium block mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                    className="w-full bg-[#242424] border border-[#333] rounded-xl px-4 py-3 text-white placeholder-[#555] focus:outline-none focus:border-[#d4a843] transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="text-[#ccc] text-sm font-medium block mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                    className="w-full bg-[#242424] border border-[#333] rounded-xl px-4 py-3 text-white placeholder-[#555] focus:outline-none focus:border-[#d4a843] transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="text-[#ccc] text-sm font-medium block mb-2">
                    Servicio de interés *
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#242424] border border-[#333] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d4a843] transition-colors text-sm"
                  >
                    <option value="">Selecciona un servicio</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-[#ccc] text-sm font-medium block mb-2">
                    Cuéntanos tu proyecto *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Describe brevemente lo que necesitas..."
                    className="w-full bg-[#242424] border border-[#333] rounded-xl px-4 py-3 text-white placeholder-[#555] focus:outline-none focus:border-[#d4a843] transition-colors text-sm resize-none"
                  />
                </div>
                <button type="submit" className="btn-gold w-full text-center text-base">
                  Enviar Solicitud
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <div className="card-dark p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d4a843] to-[#f0c96a] flex items-center justify-center flex-shrink-0">
                <MessageCircle size={22} className="text-[#0d0d0d]" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">WhatsApp</h4>
                <p className="text-[#888] text-sm mb-3">
                  Escríbenos directamente para una respuesta más rápida.
                </p>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold text-sm inline-block"
                >
                  Abrir WhatsApp
                </a>
              </div>
            </div>

            <div className="card-dark p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d4a843] to-[#f0c96a] flex items-center justify-center flex-shrink-0">
                <Mail size={22} className="text-[#0d0d0d]" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Correo Electrónico</h4>
                <p className="text-[#888] text-sm mb-1">elcapri.diseno@gmail.com</p>
                <p className="text-[#555] text-xs">Respondemos en menos de 24 horas</p>
              </div>
            </div>

            <div className="card-dark p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d4a843] to-[#f0c96a] flex items-center justify-center flex-shrink-0">
                <Clock size={22} className="text-[#0d0d0d]" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Horario de Atención</h4>
                <p className="text-[#888] text-sm">Lunes a Viernes: 9:00 AM – 6:00 PM</p>
                <p className="text-[#888] text-sm">Sábados: 9:00 AM – 1:00 PM</p>
              </div>
            </div>

            {/* Process */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6">
              <h4 className="text-[#d4a843] font-bold mb-4 text-sm uppercase tracking-wider">
                ¿Cómo trabajamos?
              </h4>
              {[
                { n: "01", t: "Consulta", d: "Nos cuentas tu idea y necesidades" },
                { n: "02", t: "Propuesta", d: "Te enviamos cotización y concepto" },
                { n: "03", t: "Diseño", d: "Creamos y refinamos hasta que quede perfecto" },
                { n: "04", t: "Entrega", d: "Recibes todos los archivos finales" },
              ].map((step) => (
                <div key={step.n} className="flex items-start gap-3 mb-4 last:mb-0">
                  <span className="text-[#d4a843] font-black text-sm w-6 flex-shrink-0">
                    {step.n}
                  </span>
                  <div>
                    <div className="text-white font-semibold text-sm">{step.t}</div>
                    <div className="text-[#888] text-xs">{step.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}