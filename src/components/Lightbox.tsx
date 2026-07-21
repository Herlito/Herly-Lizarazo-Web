/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Tag } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    // Lock page scroll when open
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, onClose, onPrev, onNext]);

  if (currentIndex === null) return null;
  const activeItem = items[currentIndex];

  return (
    <div
      id="lightbox-container"
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#211a12]/98 text-white p-4 md:p-8 animate-fade-in"
    >
      {/* Top Header Controls */}
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto z-10">
        <div className="flex flex-col">
          <span className="font-serif text-lg tracking-widest text-[#c5a880] uppercase">STUDIO</span>
          <span className="text-[10px] uppercase tracking-wider text-gray-400 font-sans">
            Muestra Seleccionada • {currentIndex + 1} de {items.length}
          </span>
        </div>
        <button
          id="lightbox-close"
          onClick={onClose}
          className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300 group focus:outline-none focus:ring-2 focus:ring-[#fed65b]"
          aria-label="Cerrar visor"
        >
          <X className="w-6 h-6 transition-transform group-hover:scale-110" />
        </button>
      </div>

      {/* Main Image Slider Frame */}
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto flex-grow my-4 md:my-8 relative">
        {/* Left Arrow Button */}
        <button
          id="lightbox-prev"
          onClick={onPrev}
          className="absolute left-2 md:-left-4 z-10 p-3 bg-white/10 hover:bg-white/25 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#fed65b]"
          aria-label="Imagen anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Center Image Container */}
        <div className="w-full h-full max-h-[65vh] md:max-h-[75vh] flex items-center justify-center p-2 relative group select-none">
          <img
            id="lightbox-active-img"
            src={activeItem.src}
            alt={activeItem.alt}
            className="max-w-full max-h-full object-contain shadow-2xl rounded-sm transition-all duration-500"
          />
        </div>

        {/* Right Arrow Button */}
        <button
          id="lightbox-next"
          onClick={onNext}
          className="absolute right-2 md:-right-4 z-10 p-3 bg-white/10 hover:bg-white/25 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#fed65b]"
          aria-label="Siguiente imagen"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Footer Details Panel */}
      <div className="w-full max-w-4xl mx-auto text-center border-t border-white/10 pt-4 pb-2 z-10">
        <h3 className="font-serif text-xl md:text-2xl tracking-wide mb-2 text-[#fff8f4]">
          {activeItem.title}
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-gray-400 font-sans">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>{activeItem.location}</span>
          </div>
          <div className="h-3 w-px bg-white/20 hidden sm:block"></div>
          <div className="flex items-center gap-1.5">
            <Tag className="w-3.5 h-3.5 text-[#c5a880]" />
            <span className="uppercase tracking-widest text-[10px]">
              {activeItem.category === 'bodas-destino'
                ? 'Bodas Destino'
                : activeItem.category === 'fotografia'
                ? 'Fotografía'
                : 'Video Teaser'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
