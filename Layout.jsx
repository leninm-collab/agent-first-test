import { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, Palette } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Portafolio", href: "#portafolio" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Contacto", href: "#contacto" },
  ];

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-sans">
      <style>{`
        :root {
          --gold: #d4a843;
          --gold-light: #f0c96a;
          --dark: #0d0d0d;
          --dark2: #1a1a1a;
          --dark3: #242424;
        }
        html { scroll-behavior: smooth; }
        body { background: #0d0d0d; }
        .gold { color: var(--gold); }
        .bg-gold { background: var(--gold); }
        .border-gold { border-color: var(--gold); }
        .btn-gold {
          background: linear-gradient(135deg, #d4a843, #f0c96a);
          color: #0d0d0d;
          font-weight: 700;
          border-radius: 9999px;
          padding: 0.75rem 2rem;
          transition: all 0.3s;
          display: inline-block;
        }
        .btn-gold:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(212,168,67,0.4);
        }
        .btn-outline-gold {
          border: 2px solid #d4a843;
          color: #d4a843;
          font-weight: 700;
          border-radius: 9999px;
          padding: 0.7rem 2rem;
          transition: all 0.3s;
          display: inline-block;
        }
        .btn-outline-gold:hover {
          background: #d4a843;
          color: #0d0d0d;
          transform: translateY(-2px);
        }
        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          letter-spacing: -0.02em;
        }
        .card-dark {
          background: #1a1a1a;
          border: 1px solid #2a2a2a;
          border-radius: 1rem;
          transition: all 0.3s;
        }
        .card-dark:hover {
          border-color: #d4a843;
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(212,168,67,0.15);
        }
        .gradient-text {
          background: linear-gradient(135deg, #d4a843, #f0c96a, #fff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .nav-link {
          position: relative;
          color: #ccc;
          transition: color 0.3s;
          font-weight: 500;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: #d4a843;
          transition: width 0.3s;
        }
        .nav-link:hover { color: #d4a843; }
        .nav-link:hover::after { width: 100%; }
      `}</style>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d0d]/95 backdrop-blur-md border-b border-[#2a2a2a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => scrollTo("#inicio")} className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#d4a843] to-[#f0c96a] flex items-center justify-center shadow-lg">
              <Palette size={18} className="text-[#0d0d0d]" />
            </div>
            <span className="font-extrabold text-lg leading-tight">
              <span className="text-white">Diseño Gráfico</span>{" "}
              <span className="text-[#d4a843]">El Capri</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <li key={l.label}>
                <button onClick={() => scrollTo(l.href)} className="nav-link text-sm">
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            onClick={() => scrollTo("#contacto")}
            className="hidden md:block btn-gold text-sm"
          >
            Cotizar Ahora
          </button>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#1a1a1a] border-t border-[#2a2a2a] px-4 py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <button
                key={l.label}
                onClick={() => scrollTo(l.href)}
                className="text-left text-[#ccc] hover:text-[#d4a843] font-medium py-1"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contacto")}
              className="btn-gold text-sm text-center mt-2"
            >
              Cotizar Ahora
            </button>
          </div>
        )}
      </nav>

      {/* Page content */}
      <main className="pt-16">{children}</main>

      {/* Footer */}
      <footer className="bg-[#111] border-t border-[#2a2a2a] py-12 mt-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#d4a843] to-[#f0c96a] flex items-center justify-center">
                <Palette size={15} className="text-[#0d0d0d]" />
              </div>
              <span className="font-extrabold text-base">
                <span className="text-white">Diseño Gráfico</span>{" "}
                <span className="text-[#d4a843]">El Capri</span>
              </span>
            </div>
            <p className="text-[#888] text-sm leading-relaxed">
              Creatividad, profesionalismo y resultados que hablan por sí solos. Tu marca en manos expertas.
            </p>
          </div>
          <div>
            <h4 className="text-[#d4a843] font-bold mb-3 text-sm uppercase tracking-widest">Servicios</h4>
            <ul className="text-[#888] text-sm space-y-2">
              <li>Diseño de Logotipos</li>
              <li>Identidad Corporativa</li>
              <li>Diseño Editorial</li>
              <li>Redes Sociales</li>
              <li>Publicidad Impresa</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#d4a843] font-bold mb-3 text-sm uppercase tracking-widest">Contacto</h4>
            <ul className="text-[#888] text-sm space-y-2">
              <li>📧 elcapri.diseno@gmail.com</li>
              <li>📱 WhatsApp disponible</li>
              <li>🌐 blue-gray-meadow.agentui.app</li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-8 pt-6 border-t border-[#2a2a2a] text-center text-[#555] text-xs">
          © {new Date().getFullYear()} Diseño Gráfico El Capri. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}