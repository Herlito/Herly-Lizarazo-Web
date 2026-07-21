/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry: () => void;
}

export default function Navbar({ onOpenInquiry }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      id="nav-main"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#fff8f4]/95 backdrop-blur-md py-4 shadow-sm border-b border-[#c4c7c7]/20'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a
          id="nav-logo"
          href="#"
          className="text-2xl md:text-3xl font-serif tracking-widest text-[#211a12] hover:opacity-80 transition-opacity"
        >
          STUDIO
        </a>

        {/* Desktop Menu */}
        <div id="desktop-menu" className="hidden md:flex items-center space-x-10">
          <a
            id="nav-link-inicio"
            href="#"
            className="text-xs uppercase tracking-widest font-semibold font-sans text-[#211a12] border-b-2 border-[#fed65b] pb-1 transition-all"
          >
            Inicio
          </a>
          <a
            id="nav-link-portafolio"
            href="#portafolio"
            className="text-xs uppercase tracking-widest font-medium font-sans text-[#444748] hover:text-[#211a12] pb-1 border-b-2 border-transparent hover:border-[#c5a880] transition-all duration-300"
          >
            Portafolio
          </a>
          <a
            id="nav-link-experiencia"
            href="#experiencia"
            className="text-xs uppercase tracking-widest font-medium font-sans text-[#444748] hover:text-[#211a12] pb-1 border-b-2 border-transparent hover:border-[#c5a880] transition-all duration-300"
          >
            Experiencia
          </a>
          <a
            id="nav-link-tarifas"
            href="#tarifas"
            className="text-xs uppercase tracking-widest font-medium font-sans text-[#444748] hover:text-[#211a12] pb-1 border-b-2 border-transparent hover:border-[#c5a880] transition-all duration-300"
          >
            Tarifas
          </a>
          <a
            id="nav-link-nosotros"
            href="#nosotros"
            className="text-xs uppercase tracking-widest font-medium font-sans text-[#444748] hover:text-[#211a12] pb-1 border-b-2 border-transparent hover:border-[#c5a880] transition-all duration-300"
          >
            Sobre Nosotros
          </a>
        </div>

        {/* CTA Button */}
        <div id="cta-container" className="hidden md:flex items-center space-x-4">
          <button
            id="nav-cta-button"
            onClick={onOpenInquiry}
            className="ghost-btn px-6 py-2.5 text-xs uppercase tracking-wider flex items-center gap-2"
          >
            <Calendar className="w-4.5 h-4.5" />
            Consultar Disponibilidad
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#211a12] hover:opacity-70 focus:outline-none"
          aria-label="Alternar menú"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-drawer"
        className={`md:hidden fixed inset-y-0 right-0 z-40 w-4/5 max-w-sm bg-[#fff8f4] shadow-2xl border-l border-[#c4c7c7]/30 transform transition-transform duration-500 ease-out p-8 flex flex-col justify-between ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="space-y-8 mt-16">
          <div className="flex flex-col space-y-6">
            <a
              id="mobile-link-inicio"
              href="#"
              onClick={() => setIsOpen(false)}
              className="text-base uppercase tracking-widest font-semibold text-[#211a12] border-l-2 border-[#fed65b] pl-4"
            >
              Inicio
            </a>
            <a
              id="mobile-link-portafolio"
              href="#portafolio"
              onClick={() => setIsOpen(false)}
              className="text-base uppercase tracking-widest font-medium text-[#444748] hover:text-[#211a12] hover:bg-[#fff1e4] pl-4 py-2 transition-colors rounded"
            >
              Portafolio
            </a>
            <a
              id="mobile-link-experiencia"
              href="#experiencia"
              onClick={() => setIsOpen(false)}
              className="text-base uppercase tracking-widest font-medium text-[#444748] hover:text-[#211a12] hover:bg-[#fff1e4] pl-4 py-2 transition-colors rounded"
            >
              Experiencia
            </a>
            <a
              id="mobile-link-tarifas"
              href="#tarifas"
              onClick={() => setIsOpen(false)}
              className="text-base uppercase tracking-widest font-medium text-[#444748] hover:text-[#211a12] hover:bg-[#fff1e4] pl-4 py-2 transition-colors rounded"
            >
              Tarifas
            </a>
            <a
              id="mobile-link-nosotros"
              href="#nosotros"
              onClick={() => setIsOpen(false)}
              className="text-base uppercase tracking-widest font-medium text-[#444748] hover:text-[#211a12] hover:bg-[#fff1e4] pl-4 py-2 transition-colors rounded"
            >
              Sobre Nosotros
            </a>
          </div>
        </div>

        <div>
          <button
            id="mobile-cta-button"
            onClick={() => {
              setIsOpen(false);
              onOpenInquiry();
            }}
            className="ghost-btn w-full py-3.5 text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            Consultar Disponibilidad
          </button>
          <p className="text-[10px] text-center text-[#444748]/60 uppercase tracking-widest mt-6">
            © 2026 Studio Wedding Photography
          </p>
        </div>
      </div>

      {/* Overlay for mobile drawer */}
      {isOpen && (
        <div
          id="mobile-overlay"
          onClick={() => setIsOpen(false)}
          className="md:hidden fixed inset-0 z-30 bg-black/25 backdrop-blur-xs"
        />
      )}
    </nav>
  );
}
