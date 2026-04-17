import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Instagram, 
  Phone, 
  MapPin, 
  Clock, 
  Scissors, 
  Star, 
  ChevronDown, 
  ChevronRight, 
  MessageCircle,
  Menu,
  X,
  Sparkles,
  Award,
  BookOpen
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Servicios', href: '#services' },
    { name: 'Galería', href: '#gallery' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 lg:hidden bg-paper/90 backdrop-blur-md py-4 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-xl font-serif tracking-widest uppercase text-ink">
            9 canvi
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-medium -mt-1">
            Hair Salon
          </span>
        </div>

        <button 
          className="text-ink"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-paper shadow-xl py-8 px-6 flex flex-col space-y-6"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-widest font-medium"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/34600000000"
              className="w-full text-center py-4 bg-ink text-paper text-xs uppercase tracking-widest"
            >
              Reservar Cita
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="h-full flex flex-col justify-between bg-white border-r border-[#EAE8E4] overflow-hidden">
      <div className="p-10 lg:p-16 flex-grow flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-bold block mb-6">
            9 canvi Hair Salon
          </span>
          <h1 className="text-5xl lg:text-7xl font-serif mb-8 leading-[1.1]">
            Expertos en <span className="italic text-accent block">Balayage</span> y Rubios
          </h1>
          <p className="max-w-xs text-muted text-base lg:text-lg mb-12 leading-relaxed font-light">
            En formación constante para ofrecerte las últimas tendencias en color, corte y recogidos de novia en Igualada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/34600000000" 
              className="px-8 py-4 bg-ink text-white text-[13px] uppercase font-semibold tracking-wider text-center hover:bg-accent transition-colors"
            >
              Reserva WhatsApp
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border border-ink text-ink text-[13px] uppercase font-semibold tracking-wider text-center hover:bg-ink hover:text-white transition-all"
            >
              Presupuesto
            </a>
          </div>
        </motion.div>
      </div>

      {/* Hero Featured Image */}
      <div className="hidden lg:block h-[400px] w-full grayscale contrast-125 opacity-90 group">
        <img 
          src="https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&q=80&w=1200" 
          alt="Balayage rubio perfecto por Vanessa Cegarra" 
          className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Balayage & Color",
      desc: "Técnicas avanzadas de aclaración personalizadas para un rubio natural y brillante."
    },
    {
      title: "Cortes Tendencia",
      desc: "Diseño de imagen adaptado a tus facciones y las últimas corrientes de moda."
    },
    {
      title: "Novias & Recogidos",
      desc: "Peinados exclusivos para días especiales. Elegancia y fijación profesional."
    },
    {
      title: "Tratamientos",
      desc: "Recuperación capilar profunda para cabellos procesados o debilitados."
    }
  ];

  return (
    <section id="services" className="mb-16">
      <div className="section-title">Nuestros Servicios</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {services.map((s, idx) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="service-item"
          >
            <h3 className="text-xl font-serif mb-2 font-normal">{s.title}</h3>
            <p className="text-sm text-muted leading-relaxed font-light">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ValueProposition = () => {
  return (
    <section className="mb-16">
      <div className="section-title">¿Por qué elegirnos?</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <ul className="space-y-4">
          {[
            "Diagnóstico capilar personalizado",
            "Productos de alta gama profesional",
            "Formación internacional constante",
            "Atención exclusiva por Vanessa Cegarra"
          ].map((benefit, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-muted">
              <span className="text-accent font-bold">•</span>
              {benefit}
            </li>
          ))}
        </ul>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="p-8 bg-accent/5 rounded-lg italic text-sm text-ink leading-relaxed relative"
        >
          <span className="absolute top-2 left-4 text-4xl text-accent opacity-30 serif">“</span>
          Vanessa es la única que entiende exactamente lo que mi cabello necesita. Su técnica de rubios no tiene comparación en la zona.
        </motion.div>
      </div>
    </section>
  );
};

const Philosophy = () => {
  return (
    <section className="mb-16">
      <div className="section-title">Nuestra Filosofía</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-xl font-serif italic leading-relaxed">
            "No solo cambiamos tu color, potenciamos tu esencia a través de la técnica."
          </p>
          <p className="text-sm text-muted leading-loose font-light">
            En 9 Canvi, creemos que el cabello es el marco de tu personalidad. Vanessa Cegarra, con una trayectoria dedicada a la formación continua, aplica métodos internacionales que respetan la integridad del cabello, buscando siempre ese "rubio perfecto" que parece iluminado por el sol, no diseñado en un salón.
          </p>
          <div className="flex gap-4">
             <div className="text-center">
                <span className="block text-2xl font-serif">15+</span>
                <span className="text-[10px] uppercase tracking-tighter text-muted">Años Exp.</span>
             </div>
             <div className="w-[1px] bg-muted/20" />
             <div className="text-center">
                <span className="block text-2xl font-serif">100%</span>
                <span className="text-[10px] uppercase tracking-tighter text-muted">Personalizado</span>
             </div>
          </div>
        </div>
        <div className="aspect-square bg-white border border-[#EAE8E4] overflow-hidden group">
           <img 
            src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1000" 
            alt="Técnica Balayage Detail" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-in-out"
            referrerPolicy="no-referrer"
           />
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    { url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600", alt: "Balayage técnica avanzada" },
    { url: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=600", alt: "Corte de pelo tendencia" },
    { url: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&q=80&w=600", alt: "Coloración rubio perfecto" },
    { url: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=600", alt: "Recogido de novia" }
  ];

  return (
    <section id="gallery" className="mb-16">
      <div className="section-title">Galería de Trabajos</div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.02 }}
            className="aspect-[3/4] bg-white border border-[#EAE8E4] overflow-hidden"
          >
            <img 
              src={img.url} 
              alt={img.alt} 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Brands = () => {
  const brands = ["L'Oréal Professionnel", "Kérastase", "Redken", "GHD", "Oláplex"];
  return (
    <div className="mt-16 pt-8 border-t border-muted/10">
      <span className="text-[10px] uppercase tracking-widest text-muted block mb-6">Marcas de Confianza</span>
      <div className="flex flex-wrap gap-x-8 gap-y-4 items-center">
        {brands.map(b => (
          <span key={b} className="text-xs font-serif italic text-muted/60">{b}</span>
        ))}
      </div>
    </div>
  );
};

const Process = () => {
  const steps = [
    { name: "Reserva", desc: "Coordinamos tu cita vía WhatsApp para un primer diagnóstico." },
    { name: "Diagnóstico", desc: "Análisis capilar profundo y elección de técnica ideal." },
    { name: "Transformación", desc: "Aplicación minuciosa de color y tratamientos." },
    { name: "Cuidado", desc: "Pautas de mantenimiento para que tu rubio dure meses." }
  ];

  return (
    <section className="mb-16">
      <div className="section-title">Método 9 Canvi</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <div key={i} className="space-y-4">
            <span className="text-4xl font-serif text-accent opacity-20">{i + 1}</span>
            <h4 className="text-sm uppercase tracking-widest font-bold text-ink">{step.name}</h4>
            <p className="text-xs text-muted leading-relaxed font-light">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="mb-16 py-12 border-t border-muted/10">
      <div className="section-title">Encuéntranos</div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-10">
          <div className="space-y-4">
            <h3 className="text-3xl font-serif">Visítanos en Igualada</h3>
            <p className="text-sm text-muted leading-relaxed font-light">
              Estamos en el corazón de Igualada, preparados para ofrecerte una experiencia de peluquería excepcional.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <MapPin size={20} className="text-accent shrink-0 mt-1" />
              <div>
                <span className="block text-xs uppercase tracking-widest font-bold mb-1">Dirección</span>
                <p className="text-sm text-ink/80">Av. Països Catalans, n° 85, 08700 Igualada, Barcelona</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Instagram size={20} className="text-accent shrink-0 mt-1" />
              <div>
                <span className="block text-xs uppercase tracking-widest font-bold mb-1">Síguenos</span>
                <a href="https://www.instagram.com/perruqueria_9canvi" className="text-sm text-ink/80 hover:text-accent transition-colors">@perruqueria_9canvi</a>
              </div>
            </div>
          </div>
          <div className="pt-6">
            <a 
              href="https://wa.me/34600000000"
              className="inline-block px-10 py-5 bg-ink text-white text-[13px] uppercase font-semibold tracking-widest hover:bg-accent transition-all"
            >
              Pedir Cita Ahora
            </a>
          </div>
        </div>
        <div className="aspect-video lg:aspect-square bg-ink/5 relative overflow-hidden group border border-[#EAE8E4]">
           <img 
             src="https://images.unsplash.com/photo-1521594467571-08355efe590f?auto=format&fit=crop&q=80&w=1200" 
             alt="Interior del salón premium" 
             className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
             referrerPolicy="no-referrer"
           />
           <div className="absolute inset-0 bg-ink/20 group-hover:bg-transparent transition-all pointer-events-none" />
           <div className="absolute bottom-6 left-6 bg-paper px-4 py-2 text-[10px] uppercase tracking-widest font-bold">
              Ubicación Premier
           </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "¿Es necesaria cita previa?", a: "Sí, para garantizar una atención 100% personalizada." },
    { q: "¿Dónde estamos?", a: "Av. Països Catalans, n° 85, Igualada." },
    { q: "¿Cuánto tiempo dura una sesión de Balayage?", a: "Depende del cabello, pero suele oscilar entre 3 y 5 horas para un resultado óptimo." }
  ];

  return (
    <div className="faq-small text-xs lg:text-[13px] text-muted space-y-4 pt-10 border-t border-muted/10">
      {faqs.map((f, i) => (
        <div key={i} className="faq-item">
          <span className="font-bold block text-ink mb-1">{f.q}</span>
          <span>{f.a}</span>
        </div>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer-info flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pt-10 border-t border-muted/10">
      <div className="space-y-4 md:space-y-0 md:flex gap-12 text-muted">
        <div className="contact-detail text-[13px]">
          <strong className="block text-ink text-xs mb-1 uppercase tracking-widest">Horario</strong>
          <span>Lun - Vie: 09:30 - 19:30 | Sáb: 09:00 - 14:00</span>
        </div>
        <div className="contact-detail text-[13px]">
          <strong className="block text-ink text-xs mb-1 uppercase tracking-widest">Contacto</strong>
          <span>+34 600 000 000</span>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-paper selection:bg-accent selection:text-white">
      <Navbar />
      
      <main className="lg:h-screen lg:grid lg:grid-cols-[1fr_1.5fr] overflow-hidden">
        {/* Left Column: Hero */}
        <div className="pt-24 lg:pt-0">
          <Hero />
        </div>

        {/* Right Column: Details */}
        <div className="h-full overflow-y-auto bg-paper p-10 lg:p-16 lg:pr-24 space-y-24">
          <Services />
          
          <Philosophy />
          
          <Process />

          <ValueProposition />

          <Gallery />
          
          <Contact />
          
          <div>
            <div className="section-title">Información y FAQ</div>
            <FAQ />
            <Brands />
            <Footer />
          </div>

          {/* Legal micro-copy */}
          <div className="text-[10px] uppercase tracking-widest text-muted/40 pt-10">
            © 2024 9 canvi Hair Salon | Vanessa Cegarra | Igualada, Barcelona
          </div>
        </div>
      </main>

      {/* Floating CTA (Mobile) */}
      <div className="fixed bottom-6 right-6 z-50 lg:hidden">
        <a 
          href="https://wa.me/34600000000"
          className="w-14 h-14 bg-accent text-white rounded-full shadow-2xl flex items-center justify-center"
        >
          <MessageCircle size={24} />
        </a>
      </div>
    </div>
  );
}
