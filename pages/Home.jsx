import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";
import Portafolio from "@/components/Portafolio";
import Testimonios from "@/components/Testimonios";
import Contacto from "@/components/Contacto";

export default function Home() {
  return (
    <div>
      <Hero />
      <Servicios />
      <Portafolio />
      <Testimonios />
      <Contacto />
    </div>
  );
}