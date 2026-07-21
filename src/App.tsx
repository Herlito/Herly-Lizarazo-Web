/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Camera,
  Film,
  Heart,
  Calendar,
  ChevronDown,
  MapPin,
  Tag,
  ArrowRight,
  Sparkles,
  Clock,
  ShieldCheck,
  Check,
  Quote,
  Instagram,
  Compass
} from 'lucide-react';

// Sub-components
import Navbar from './components/Navbar';
import Lightbox from './components/Lightbox';
import InquiryForm from './components/InquiryForm';
import FaqSection from './components/FaqSection';
import TestimonialSection from './components/TestimonialSection';

// Static Data
import { GALLERY_ITEMS, SERVICE_COLLECTIONS, FAQS, TESTIMONIALS } from './data';

export default function App() {
  // State managers
  const [activeFilter, setActiveFilter] = useState<'todos' | 'fotografia' | 'video' | 'bodas-destino'>('todos');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [selectedInquiryPackage, setSelectedInquiryPackage] = useState<string>('fotografia');

  // Filtered gallery items
  const filteredGallery = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === 'todos') return true;
    return item.category === activeFilter;
  });

  // Lightbox handlers on filtered set
  const handleOpenLightbox = (itemId: string) => {
    const idx = filteredGallery.findIndex((item) => item.id === itemId);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const handlePrevLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev === 0 ? filteredGallery.length - 1 : prev! - 1
    );
  };

  const handleNextLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev === filteredGallery.length - 1 ? 0 : prev! + 1
    );
  };

  // Inquiry triggers
  const handleOpenInquiryWithPackage = (packageId: string) => {
    setSelectedInquiryPackage(packageId);
    setIsInquiryOpen(true);
  };

  // Simple scroll reveal handler
  useEffect(() => {
    const handleScrollReveal = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const elemTop = rect.top;
        const elemBottom = rect.bottom;
        
        // Element is visible if it enters viewport
        const isVisible = elemTop < window.innerHeight - 50;
        if (isVisible) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScrollReveal);
    // Initial check
    setTimeout(handleScrollReveal, 100);

    return () => window.removeEventListener('scroll', handleScrollReveal);
  }, []);

  return (
    <div className="bg-[#fff8f4] text-[#211a12] font-sans antialiased selection:bg-[#fed65b]/30 selection:text-[#211a12] min-h-screen flex flex-col justify-between overflow-x-hidden">
      
      {/* Header Navigation */}
      <Navbar onOpenInquiry={() => handleOpenInquiryWithPackage('fotografia')} />

      {/* Main Container */}
      <main className="flex-grow">
        
        {/* HERO SECTION */}
        <section
          id="inicio"
          className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
        >
          {/* Hero Background Photo */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7TEdWLO2edA6yyfZf-3Oielr-dNuL4ytREy3krrz1VbCOno3eFSNllHZVHqIYtZNB-OT6-0IIltkHHyCC-HQZFc6X2gvapNW0Wo4aP8LgzodWGHPwPup2pcr6hn8TNSffi0xwkQsxXZ86lgNLSKy1nhiJAHsv0_PytJmzoXlAsx2iPov8d-G5olDLa4Yk0r3-5mpGmb0PwcJ5cDgs4-J4-lnGwYVMfKR162-MqX51uAC6ogOcdcho"
              alt="Boda de lujo en un jardín italiano al atardecer"
              className="w-full h-full object-cover scale-[1.01] brightness-90 animate-fade-in"
            />
            {/* Subtle dark gradient overlay to make elegant typography readable */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#211a12]/30 via-transparent to-[#211a12]/40" />
            <div className="absolute inset-0 bg-black/15 backdrop-blur-[1px]" />
          </div>

          {/* Hero Typography & Content */}
          <div className="relative z-10 text-center px-6 md:px-12 max-w-5xl mx-auto w-full text-white space-y-8 select-none">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 animate-fade-in">
              <Sparkles className="w-4 h-4 text-[#fed65b]" />
              <span className="text-[10px] uppercase tracking-widest font-semibold font-sans">
                Fotografía & Cinematografía Exclusiva
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light tracking-wide leading-tight text-white drop-shadow-xl max-w-4xl mx-auto">
              Capturando la magia de tu historia de amor
            </h1>

            <p className="text-base sm:text-lg md:text-xl font-sans font-light tracking-wide text-white/95 max-w-2xl mx-auto drop-shadow-md">
              Fotografía y cinematografía de bodas documentales, sofisticadas y emocionales.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4">
              <a
                href="#portafolio"
                className="ghost-btn-white px-8 py-4 text-xs uppercase tracking-widest w-full sm:w-auto text-center"
              >
                Ver Portafolio
              </a>
              <button
                onClick={() => handleOpenInquiryWithPackage('video')}
                className="ghost-btn px-8 py-4 text-xs uppercase tracking-widest bg-white text-[#211a12] border-white hover:bg-transparent hover:text-white w-full sm:w-auto text-center"
              >
                Reserva tu Fecha
              </button>
            </div>
          </div>

          {/* Animated Scroll Down Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce flex flex-col items-center gap-1">
            <span className="text-[9px] uppercase tracking-widest text-white/70 font-sans">
              Descubrir más
            </span>
            <ChevronDown className="w-5 h-5 text-white/95" />
          </div>
        </section>


        {/* PHILOSOPHY & ABOUT SECTION */}
        <section
          id="nosotros"
          className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Image Side */}
            <div className="lg:col-span-6 relative reveal-on-scroll">
              <div className="relative p-1">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2NwlpJ1zLe3UDSbPamZEL8eSUR6tILvg62d5Klk_5RX3T9KcDP2UzSIt0Xy_MCDNVlIa5nhopFfcPp5yb6bmhPTakTjv9ZfPY6sOhnvlgO7N_DRQIYrRaoae97MFOOZGNxRm_A0ejIcplQBtWHHfbDvmYUGgJN1EXhfdAuR6ZXe0cZ3OjEXVzQCACUwPVqvZNKMvXZUXBDAYyb_zU7ptbEwiVmVuIDfC2DYIsAzjzl8YZlj4Kaz38"
                  alt="Equipo de fotografía editorial en blanco y negro"
                  className="w-full h-auto aspect-[3/4] object-cover grayscale shadow-2xl rounded-sm transition-transform duration-700 hover:scale-[1.02]"
                />
                {/* Decorative Offset Golden Border */}
                <div className="absolute inset-0 border border-[#c5a880]/40 pointer-events-none translate-x-4 translate-y-4 rounded-sm -z-10" />
              </div>
            </div>

            {/* Right Text Philosophy Side */}
            <div className="lg:col-span-6 space-y-6 reveal-on-scroll">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#c5a880] font-sans block">
                  Nuestra Visión
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#211a12] leading-tight font-light">
                  Creamos recuerdos cinematográficos sin poses forzadas...
                </h2>
              </div>

              <div className="h-px bg-[#c4c7c7]/30 w-16 my-4" />

              <p className="text-base text-[#444748] font-sans font-light leading-relaxed">
                Creemos fervientemente en el poder de los momentos espontáneos. Nuestro enfoque de estilo <strong>"New Editorial"</strong> combina la estética minimalista y pulida de la alta moda con una narrativa cinematográfica clásica, natural y emotiva.
              </p>

              <p className="text-base text-[#444748] font-sans font-light leading-relaxed">
                Actuamos como observadores silenciosos y respetuosos a lo largo de su gran día. Esto permite que la verdadera complicidad y la emoción respiren orgánicamente, mientras capturamos con precisión la elegancia atemporal de su celebración.
              </p>

              {/* Special Quote highlight */}
              <div className="bg-[#faecdd] p-6 border-l-4 border-[#c5a880] italic text-sm text-[#211a12] rounded-r-sm font-sans">
                "Buscamos la luz natural perfecta, el suspiro antes del abrazo y los detalles silenciosos que definen quiénes son como pareja."
              </div>

              <div className="pt-4">
                <button
                  onClick={() => handleOpenInquiryWithPackage('fotografia')}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#211a12] hover:text-[#735c00] transition-colors gold-rule pb-1"
                >
                  Contáctanos hoy <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </section>


        {/* SELECTED PORTFOLIO SECTION */}
        <section
          id="portafolio"
          className="py-20 md:py-32 bg-[#fff1e4]/45 border-y border-[#c4c7c7]/20"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            {/* Header section with categories */}
            <div className="text-center space-y-6 mb-16 reveal-on-scroll">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#c5a880] font-sans block">
                  Galería Curada
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-[#211a12]">
                  Portafolio Seleccionado
                </h2>
              </div>
              
              {/* Category Filters */}
              <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 pt-2">
                {(['todos', 'fotografia', 'video', 'bodas-destino'] as const).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => {
                      setActiveFilter(filter);
                    }}
                    className={`px-4 py-2 text-xs uppercase tracking-widest font-sans font-medium transition-all rounded-full border ${
                      activeFilter === filter
                        ? 'bg-[#211a12] text-white border-[#211a12] shadow-sm'
                        : 'bg-white/40 text-[#444748] border-[#c4c7c7]/30 hover:bg-[#fff1e4] hover:text-[#211a12]'
                    }`}
                  >
                    {filter === 'todos'
                      ? 'Todos'
                      : filter === 'fotografia'
                      ? 'Fotografía'
                      : filter === 'video'
                      ? 'Video Teasers'
                      : 'Bodas Destino'}
                  </button>
                ))}
              </div>
            </div>

            {/* Bento Grid Gallery */}
            <div
              id="gallery-bento-grid"
              className="grid grid-cols-1 md:grid-cols-12 gap-3 auto-rows-[250px] md:auto-rows-[300px]"
            >
              {filteredGallery.length > 0 ? (
                filteredGallery.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleOpenLightbox(item.id)}
                    className={`relative group overflow-hidden border border-transparent hover:border-[#c5a880]/40 transition-all duration-700 shadow-sm cursor-pointer ${item.sizeClass}`}
                  >
                    {/* Image */}
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    />

                    {/* Overlay Frame hover effect */}
                    <div className="absolute inset-0 bg-[#211a12]/35 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-6" />

                    {/* Corner Borders on hover */}
                    <div className="absolute inset-4 border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none scale-95 group-hover:scale-100" />

                    {/* Details overlay panel */}
                    <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-gradient-to-t from-[#211a12]/90 via-[#211a12]/40 to-transparent flex flex-col justify-end text-white">
                      <span className="text-[9px] uppercase tracking-widest text-[#fed65b] font-semibold mb-1 flex items-center gap-1 font-sans">
                        <Compass className="w-3 h-3" />
                        {item.location}
                      </span>
                      <h3 className="font-serif text-lg tracking-wide leading-snug">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-12 py-20 text-center text-[#444748] font-sans">
                  No hay elementos disponibles en esta categoría de momento.
                </div>
              )}
            </div>

            {/* Footer action trigger */}
            <div className="text-center mt-12 reveal-on-scroll">
              <button
                onClick={() => handleOpenInquiryWithPackage('paquete-completo')}
                className="ghost-btn px-8 py-3.5 text-xs uppercase tracking-widest"
              >
                Explorar Galería Completa
              </button>
            </div>

          </div>
        </section>


        {/* EXPERIENCIA & PROCESS SECTION */}
        <section
          id="experiencia"
          className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            <div className="lg:col-span-1 space-y-4 reveal-on-scroll">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#c5a880] font-sans block">
                El Proceso
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-[#211a12] font-light leading-tight">
                La experiencia de vivir tu gran día sin presiones.
              </h2>
              <p className="text-sm text-[#444748] leading-relaxed font-sans font-light">
                Planificar una boda requiere maestría. Nuestro objetivo es que la cobertura visual sea el aspecto más natural, reconfortante e inolvidable de su planificación.
              </p>
              <div className="pt-2">
                <a
                  href="#tarifas"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#211a12] hover:text-[#735c00] transition-colors gold-rule pb-0.5"
                >
                  Ver Tarifas Detalladas <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Step Features list */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Feature 1 */}
              <div className="space-y-3.5 p-6 bg-white border border-[#c4c7c7]/20 shadow-sm rounded-sm reveal-on-scroll">
                <div className="w-10 h-10 rounded-full bg-[#faecdd] flex items-center justify-center border border-[#c5a880]/20 text-[#c5a880]">
                  <Camera className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg text-[#211a12] font-semibold">
                  Estilo Editorial Sutil
                </h3>
                <p className="text-xs text-[#444748] leading-relaxed font-sans font-light">
                  No dirigimos posturas robóticas. Buscamos capturar la fluidez, guiándolos suavemente solo cuando la iluminación lo requiera para retratar su versión más elegante y sincera.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="space-y-3.5 p-6 bg-white border border-[#c4c7c7]/20 shadow-sm rounded-sm reveal-on-scroll">
                <div className="w-10 h-10 rounded-full bg-[#faecdd] flex items-center justify-center border border-[#c5a880]/20 text-[#c5a880]">
                  <Film className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg text-[#211a12] font-semibold">
                  Narrativa Cinematográfica
                </h3>
                <p className="text-xs text-[#444748] leading-relaxed font-sans font-light">
                  Nuestros videos de boda utilizan diseño de sonido envolvente, diálogos ambientales entrelazados y una colorimetría cuidada al milímetro para crear una película inolvidable.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="space-y-3.5 p-6 bg-white border border-[#c4c7c7]/20 shadow-sm rounded-sm reveal-on-scroll">
                <div className="w-10 h-10 rounded-full bg-[#faecdd] flex items-center justify-center border border-[#c5a880]/20 text-[#c5a880]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg text-[#211a12] font-semibold">
                  Redundancia & Seguridad
                </h3>
                <p className="text-xs text-[#444748] leading-relaxed font-sans font-light">
                  La seguridad de sus memorias es primordial. Grabamos en doble tarjeta de forma instantánea y realizamos copias de seguridad triples en la nube antes de dejar su boda.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="space-y-3.5 p-6 bg-white border border-[#c4c7c7]/20 shadow-sm rounded-sm reveal-on-scroll">
                <div className="w-10 h-10 rounded-full bg-[#faecdd] flex items-center justify-center border border-[#c5a880]/20 text-[#c5a880]">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg text-[#211a12] font-semibold">
                  Adelanto en 72 Horas
                </h3>
                <p className="text-xs text-[#444748] leading-relaxed font-sans font-light">
                  Sabemos que están ansiosos por ver el resultado. Recibirán un set curado de 30 imágenes editadas listas para compartir en un plazo de tres días hábiles.
                </p>
              </div>

            </div>

          </div>
        </section>


        {/* EXCLUSIVE SERVICES & INVESTMENT SECTION */}
        <section
          id="tarifas"
          className="py-24 md:py-36 bg-[#fff1e4]/50 border-t border-[#c4c7c7]/20"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            {/* Header */}
            <div className="text-center space-y-4 mb-20 reveal-on-scroll">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#c5a880] font-sans block">
                Colecciones
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#211a12] font-light">
                Servicios Exclusivos
              </h2>
              <div className="h-0.5 bg-[#c5a880] w-12 mx-auto mt-4" />
            </div>

            {/* Service Pricing Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              
              {SERVICE_COLLECTIONS.map((service, index) => {
                const animDelayClass = index === 1 ? 'delay-150' : index === 2 ? 'delay-300' : '';
                return (
                  <div
                    key={service.id}
                    id={`service-card-${service.id}`}
                    className={`bg-white p-8 md:p-10 border border-[#c4c7c7]/20 flex flex-col justify-between hover:border-[#c5a880]/70 transition-all duration-500 rounded-sm relative shadow-sm hover:shadow-xl reveal-on-scroll ${animDelayClass} ${
                      service.isMostPopular ? 'ring-2 ring-[#c5a880]/40 lg:scale-[1.03]' : ''
                    }`}
                  >
                    {service.isMostPopular && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#211a12] text-[#fff8f4] text-[9px] font-sans uppercase tracking-widest font-bold py-1 px-4 border border-[#c5a880]/30 rounded-sm">
                        Más Solicitado
                      </div>
                    )}

                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="font-serif text-2xl text-[#211a12] font-medium">
                          {service.name}
                        </h3>
                        <p className="text-xs text-[#444748] font-sans font-light leading-relaxed min-h-[40px]">
                          {service.description}
                        </p>
                      </div>

                      <div className="h-px bg-[#c4c7c7]/20" />

                      {/* Pricing block */}
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase tracking-wider text-gray-400 font-sans block">
                          Inversión desde
                        </span>
                        <div className="flex items-baseline gap-1.5">
                          <span className="font-mono text-3xl font-bold text-[#211a12]">
                            €{service.basePrice}
                          </span>
                          <span className="text-xs text-[#444748] font-sans font-light">
                            EUR
                          </span>
                        </div>
                      </div>

                      <div className="h-px bg-[#c4c7c7]/20" />

                      {/* Feature Bullet Checklist */}
                      <ul className="space-y-4">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <Check className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                            <span className="text-xs text-[#444748] font-sans font-light">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-10">
                      <button
                        onClick={() => handleOpenInquiryWithPackage(service.id)}
                        className={`ghost-btn w-full py-3.5 text-xs uppercase tracking-widest text-center cursor-pointer ${
                          service.isMostPopular
                            ? 'bg-[#211a12] text-white border-[#211a12] hover:bg-transparent hover:text-[#211a12]'
                            : ''
                        }`}
                      >
                        Más información
                      </button>
                    </div>
                  </div>
                );
              })}

            </div>

            {/* Note */}
            <p className="text-center text-[10px] text-[#444748]/70 uppercase tracking-widest mt-12 font-sans">
              * Ofrecemos opciones completamente personalizadas para escapadas de dos e íntimas. Consúltanos.
            </p>

          </div>
        </section>


        {/* REVIEWS & TESTIMONIALS SECTION */}
        <section
          className="py-24 md:py-32 bg-white"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            {/* Header */}
            <div className="text-center space-y-3 mb-16 reveal-on-scroll">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#c5a880] font-sans block">
                Testimonios
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-[#211a12] font-light">
                Palabras de Amor de las Parejas
              </h2>
            </div>

            {/* Testimonials Slideshow */}
            <div className="reveal-on-scroll">
              <TestimonialSection testimonials={TESTIMONIALS} />
            </div>

          </div>
        </section>


        {/* FREQUENTLY ASKED QUESTIONS SECTION */}
        <section
          className="py-24 md:py-36 bg-[#fff1e4]/50 border-t border-[#c4c7c7]/20"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            {/* Header */}
            <div className="text-center space-y-4 mb-16 reveal-on-scroll">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#c5a880] font-sans block">
                Respuestas
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-[#211a12] font-light">
                Preguntas Frecuentes
              </h2>
              <div className="h-0.5 bg-[#c5a880] w-12 mx-auto mt-4" />
            </div>

            {/* Collapsible FAQ container */}
            <div className="reveal-on-scroll">
              <FaqSection items={FAQS} />
            </div>

          </div>
        </section>


        {/* LUXURIOUS CTA OUTRO CONTACT BANNER */}
        <section
          className="relative py-32 md:py-48 px-6 text-center text-white overflow-hidden"
        >
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7rAbEZpPFB5TZOHDjq4JiNo-LUb1nLCiahJWAKeFPSLHpcsDDvCsSQ9CaV1fb747sPoDAYQPYW6ujdWAyvO7FFptn7cFhXZmNNYNyO5uQPBw7ksAjEHNVyJKlFNdl3DQMrasyzT7l8yXN7KmEQwy8yBaJz-ibf_Rn2jmEuRkqxLeDdxfJsXXDEzTq_WOGvsxowKsmikKG4aYp3agNA2mh6Z98oUkqhYPGg3LXoSg41LtL2jy2cIJ7"
              alt="Boda y baile cinemático bajo hileras de bombillas"
              className="w-full h-full object-cover brightness-[0.4]"
            />
            {/* Dark tint */}
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto space-y-8 select-none">
            <h2 className="text-3xl md:text-5xl font-serif text-white font-light tracking-wide leading-tight">
              Escribamos juntos el primer capítulo de tu legado visual
            </h2>

            <p className="text-base md:text-lg text-white/90 font-sans font-light max-w-2xl mx-auto leading-relaxed">
              Las fechas para las temporadas de bodas de 2026 y 2027 se reservan con bastante antelación. Contáctanos hoy para reservar una cita privada por Zoom para conocernos y planificar su cobertura.
            </p>

            <div className="pt-4 flex justify-center">
              <button
                onClick={() => handleOpenInquiryWithPackage('paquete-completo')}
                className="ghost-btn px-10 py-4 text-xs uppercase tracking-widest bg-white text-[#211a12] border-white hover:bg-transparent hover:text-white transition-all duration-300 font-semibold"
              >
                Consultar Disponibilidad
              </button>
            </div>
          </div>
        </section>

      </main>


      {/* FOOTER */}
      <footer
        id="footer"
        className="w-full py-16 px-6 md:px-12 bg-white border-t border-[#c4c7c7]/50"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          
          {/* Logo brand */}
          <div className="text-center md:text-left space-y-1.5">
            <h2 className="text-2xl font-serif tracking-widest text-[#211a12]">
              HERLY
            </h2>
            <p className="text-[10px] text-[#444748] uppercase tracking-widest font-sans">
              Fotografía y cinematografía de bodas de lujo.
            </p>
          </div>

          {/* Social and quick utility links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            <a
              href="#"
              className="text-xs text-[#444748] hover:text-[#735c00] uppercase tracking-widest font-sans transition-colors font-medium border-b border-transparent hover:border-[#c5a880] pb-0.5"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-xs text-[#444748] hover:text-[#735c00] uppercase tracking-widest font-sans transition-colors font-medium border-b border-transparent hover:border-[#c5a880] pb-0.5"
            >
              Vimeo
            </a>
            <a
              href="#"
              className="text-xs text-[#444748] hover:text-[#735c00] uppercase tracking-widest font-sans transition-colors font-medium border-b border-transparent hover:border-[#c5a880] pb-0.5"
            >
              Pinterest
            </a>
            <a
              href="#"
              className="text-xs text-[#444748] hover:text-[#735c00] uppercase tracking-widest font-sans transition-colors font-medium border-b border-transparent hover:border-[#c5a880] pb-0.5"
            >
              Privacidad
            </a>
            <a
              href="#"
              className="text-xs text-[#444748] hover:text-[#735c00] uppercase tracking-widest font-sans transition-colors font-medium border-b border-transparent hover:border-[#c5a880] pb-0.5"
            >
              Términos
            </a>
          </div>

          {/* Copyright line */}
          <div className="text-center md:text-right text-[11px] text-[#444748]/70 font-sans">
            © 2026 Herly Lizarazo Photography. <br />Todos los derechos reservados.
          </div>

        </div>
      </footer>


      {/* INTERACTIVE POP-UP LIGHTBOX VIEW */}
      {lightboxIndex !== null && (
        <Lightbox
          items={filteredGallery}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={handlePrevLightbox}
          onNext={handleNextLightbox}
        />
      )}

      {/* INTERACTIVE BOOKING / PRICE CALCULATOR MODAL */}
      {isInquiryOpen && (
        <InquiryForm
          services={SERVICE_COLLECTIONS}
          initialSelectedPackageId={selectedInquiryPackage}
          onClose={() => setIsInquiryOpen(false)}
        />
      )}

    </div>
  );
}
