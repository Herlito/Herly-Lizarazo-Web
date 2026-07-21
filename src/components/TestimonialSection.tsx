/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialSection({ testimonials }: TestimonialSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Auto-slide every 8 seconds
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 8000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const active = testimonials[activeIndex];

  return (
    <div id="testimonial-carousel" className="max-w-4xl mx-auto relative px-4">
      {/* Testimonial card */}
      <div className="bg-[#faecdd]/40 border border-[#c5a880]/20 p-8 md:p-14 rounded-sm flex flex-col items-center text-center relative overflow-hidden">
        {/* Quote watermark background */}
        <Quote className="absolute -top-4 -left-4 w-32 h-32 text-[#c5a880]/5 select-none rotate-180" />

        {/* Floating golden quote icon */}
        <div className="w-12 h-12 rounded-full bg-[#faecdd] flex items-center justify-center border border-[#c5a880]/20 mb-6">
          <Quote className="w-5 h-5 text-[#c5a880]" />
        </div>

        {/* Testimonial Quote */}
        <blockquote className="font-serif text-lg md:text-xl lg:text-2xl text-[#211a12] italic leading-relaxed mb-8 max-w-2xl">
          "{active.quote}"
        </blockquote>

        {/* Couple Info & Photo */}
        <div className="flex flex-col items-center">
          <h4 className="font-serif text-base md:text-lg font-semibold text-[#211a12]">
            {active.coupleNames}
          </h4>
          <p className="text-xs uppercase tracking-widest text-[#444748] mt-1 font-sans">
            {active.location} • {active.year}
          </p>
        </div>

        {/* Slider Navigation Controls */}
        <div className="flex items-center gap-4 mt-8">
          <button
            onClick={prevTestimonial}
            className="p-2.5 rounded-full border border-[#c4c7c7] hover:bg-[#211a12] hover:text-white transition-all focus:outline-none"
            aria-label="Opinión anterior"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          {/* Stots indicators */}
          <div className="flex items-center gap-1.5">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'bg-[#c5a880] w-6' : 'bg-[#c4c7c7]'
                }`}
                aria-label={`Ir a opinión ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-2.5 rounded-full border border-[#c4c7c7] hover:bg-[#211a12] hover:text-white transition-all focus:outline-none"
            aria-label="Siguiente opinión"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
