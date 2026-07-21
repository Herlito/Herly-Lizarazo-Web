/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  X,
  Check,
  Calendar as CalendarIcon,
  MapPin,
  Users,
  DollarSign,
  Heart,
  Sparkles,
  Info
} from 'lucide-react';
import { InquiryFormData, ServiceCollection } from '../types';

interface InquiryFormProps {
  onClose: () => void;
  services: ServiceCollection[];
  initialSelectedPackageId?: string;
}

export default function InquiryForm({
  onClose,
  services,
  initialSelectedPackageId = 'fotografia',
}: InquiryFormProps) {
  // Form State
  const [formData, setFormData] = useState<InquiryFormData>({
    coupleNames: '',
    email: '',
    telephone: '',
    weddingDate: '',
    venueName: '',
    packageType: initialSelectedPackageId,
    details: '',
    guestCount: '100-150',
    wantsDrone: false,
    wantsEngagementSession: false,
    wantsPrintedAlbum: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Dynamic Add-on prices
  const ADDON_PRICES = {
    drone: 450,
    engagement: 400,
    album: 550,
  };

  // Calculate dynamic price
  const activePackage = services.find((s) => s.id === formData.packageType);
  const basePrice = activePackage?.basePrice || 0;
  const addonCost =
    (formData.wantsDrone ? ADDON_PRICES.drone : 0) +
    (formData.wantsEngagementSession ? ADDON_PRICES.engagement : 0) +
    (formData.wantsPrintedAlbum ? ADDON_PRICES.album : 0);
  const totalPrice = basePrice + addonCost;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const selectPackage = (packageId: string) => {
    setFormData((prev) => ({ ...prev, packageType: packageId }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.coupleNames || !formData.email || !formData.weddingDate) {
      alert('Por favor complete los campos requeridos (Nombres, Correo electrónico y Fecha de boda)');
      return;
    }

    setIsSubmitting(true);

    // Simulate luxury API call or submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Save submission to localStorage
      const submissions = JSON.parse(localStorage.getItem('studio_inquiries') || '[]');
      submissions.push({
        ...formData,
        id: Date.now().toString(),
        totalPriceEstimate: totalPrice,
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem('studio_inquiries', JSON.stringify(submissions));
    }, 1500);
  };

  return (
    <div
      id="inquiry-modal"
      className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-[#211a12]/70 backdrop-blur-sm overflow-y-auto"
    >
      <div
        id="inquiry-content"
        className="relative bg-[#fff8f4] text-[#211a12] w-full max-w-4xl rounded-sm shadow-2xl border border-[#c4c7c7]/30 flex flex-col md:flex-row overflow-hidden my-8 max-h-[90vh]"
      >
        {/* Close button */}
        <button
          id="close-inquiry-modal"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white/80 hover:bg-white text-[#211a12] rounded-full shadow-md hover:scale-105 transition-all"
          aria-label="Cerrar formulario"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          // Success Screen
          <div
            id="success-panel"
            className="w-full py-16 px-8 md:px-16 text-center flex flex-col items-center justify-center space-y-6"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-[#fed65b]/20 blur animate-pulse"></div>
              <div className="relative w-20 h-20 rounded-full bg-[#faecdd] border border-[#c5a880]/30 flex items-center justify-center">
                <Heart className="w-10 h-10 text-[#c5a880] animate-bounce" fill="#c5a880" />
              </div>
            </div>
            <h3 className="font-serif text-3xl md:text-4xl text-[#211a12] tracking-wide">
              ¡Disponibilidad Consultada!
            </h3>
            <p className="font-sans text-sm md:text-base text-[#444748] max-w-lg mx-auto leading-relaxed">
              Gracias, <strong>{formData.coupleNames}</strong>. Hemos recibido los detalles para su boda el{' '}
              <strong>{formData.weddingDate}</strong> en <strong>{formData.venueName || 'por confirmar'}</strong>.
            </p>
            <div className="bg-[#fff1e4] p-6 rounded border border-[#c5a880]/20 max-w-md w-full text-left font-sans text-sm space-y-3">
              <div className="flex justify-between font-serif font-semibold text-base border-b border-[#c4c7c7] pb-2">
                <span>Colección Estimada</span>
                <span>{activePackage?.name}</span>
              </div>
              <div className="flex justify-between text-xs text-[#444748]">
                <span>Inversión Estimada:</span>
                <span className="font-semibold font-mono">€{totalPrice} EUR</span>
              </div>
              {formData.wantsDrone && <div className="text-xs text-[#444748]">• Incluye Tomás con Dron (+€{ADDON_PRICES.drone})</div>}
              {formData.wantsEngagementSession && <div className="text-xs text-[#444748]">• Incluye Sesión Preboda (+€{ADDON_PRICES.engagement})</div>}
              {formData.wantsPrintedAlbum && <div className="text-xs text-[#444748]">• Incluye Álbum Impreso Fine Art (+€{ADDON_PRICES.album})</div>}
            </div>
            <p className="font-sans text-xs text-[#444748]/70">
              Nos pondremos en contacto a través de <strong>{formData.email}</strong> dentro de las próximas 24 horas laborables.
            </p>
            <button
              onClick={onClose}
              className="ghost-btn px-10 py-3 text-xs uppercase tracking-widest"
            >
              Cerrar Ventana
            </button>
          </div>
        ) : (
          <>
            {/* Left Column: Interactive Pricing Calculator */}
            <div
              id="calc-left-column"
              className="w-full md:w-1/2 bg-[#faecdd] p-6 md:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#c4c7c7]/30 overflow-y-auto"
            >
              <div>
                <div className="flex items-center gap-2 mb-2 text-[#c5a880]">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-[10px] font-sans uppercase tracking-widest font-semibold">
                    Inversión Exclusiva
                  </span>
                </div>
                <h3 className="font-serif text-2xl tracking-wide mb-4 text-[#211a12]">
                  Planificador de Colección
                </h3>
                <p className="font-sans text-xs text-[#444748] mb-6 leading-relaxed">
                  Seleccione su colección base y configure los servicios exclusivos de forma interactiva para estimar su presupuesto.
                </p>

                {/* Package selector tabs */}
                <div className="space-y-3 mb-6">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-[#211a12] block">
                    1. Colección Base
                  </label>
                  {services.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => selectPackage(item.id)}
                      className={`p-3.5 rounded-sm border cursor-pointer transition-all duration-300 flex items-center justify-between ${
                        formData.packageType === item.id
                          ? 'bg-white border-[#211a12] shadow-sm scale-[1.01]'
                          : 'bg-[#fff8f4]/60 border-[#c4c7c7]/40 hover:bg-[#fff8f4]/90'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                            formData.packageType === item.id
                              ? 'border-[#211a12] bg-[#211a12]'
                              : 'border-[#c4c7c7]'
                          }`}
                        >
                          {formData.packageType === item.id && (
                            <div className="w-1.5 h-1.5 rounded-full bg-white" />
                          )}
                        </div>
                        <div>
                          <h4 className="font-serif text-sm font-semibold text-[#211a12]">
                            {item.name}
                          </h4>
                        </div>
                      </div>
                      <span className="font-mono text-xs font-semibold text-[#211a12]">
                        €{item.basePrice}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Custom Addons checklists */}
                <div className="space-y-3 mb-6">
                  <label className="text-[10px] uppercase font-bold tracking-wider text-[#211a12] block">
                    2. Servicios Adicionales Fine Art
                  </label>

                  {/* Drone coverage */}
                  <label className="flex items-center justify-between p-3 bg-[#fff8f4]/40 hover:bg-[#fff8f4]/80 rounded border border-[#c4c7c7]/30 cursor-pointer select-none transition-colors">
                    <div className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        name="wantsDrone"
                        checked={formData.wantsDrone}
                        onChange={handleCheckboxChange}
                        className="rounded border-[#c4c7c7] text-[#211a12] focus:ring-[#c5a880]"
                      />
                      <span className="text-xs text-[#211a12]">Tomas de Dron Profesional</span>
                    </div>
                    <span className="font-mono text-xs text-[#444748]">+€{ADDON_PRICES.drone}</span>
                  </label>

                  {/* Engagement pre-wedding */}
                  <label className="flex items-center justify-between p-3 bg-[#fff8f4]/40 hover:bg-[#fff8f4]/80 rounded border border-[#c4c7c7]/30 cursor-pointer select-none transition-colors">
                    <div className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        name="wantsEngagementSession"
                        checked={formData.wantsEngagementSession}
                        onChange={handleCheckboxChange}
                        className="rounded border-[#c4c7c7] text-[#211a12] focus:ring-[#c5a880]"
                      />
                      <span className="text-xs text-[#211a12]">Sesión de Compromiso Preboda</span>
                    </div>
                    <span className="font-mono text-xs text-[#444748]">+€{ADDON_PRICES.engagement}</span>
                  </label>

                  {/* Printed Fine Art Album */}
                  <label className="flex items-center justify-between p-3 bg-[#fff8f4]/40 hover:bg-[#fff8f4]/80 rounded border border-[#c4c7c7]/30 cursor-pointer select-none transition-colors">
                    <div className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        name="wantsPrintedAlbum"
                        checked={formData.wantsPrintedAlbum}
                        onChange={handleCheckboxChange}
                        className="rounded border-[#c4c7c7] text-[#211a12] focus:ring-[#c5a880]"
                      />
                      <span className="text-xs text-[#211a12]">Álbum de Fotos Fine Art Impreso</span>
                    </div>
                    <span className="font-mono text-xs text-[#444748]">+€{ADDON_PRICES.album}</span>
                  </label>
                </div>
              </div>

              {/* Total display bar */}
              <div className="bg-white p-4 rounded border border-[#c4c7c7]/50 flex items-center justify-between mt-4">
                <div className="flex items-center gap-1 text-[#444748]">
                  <DollarSign className="w-4 h-4 text-[#c5a880]" />
                  <span className="text-xs font-semibold uppercase tracking-wider font-sans">
                    Presupuesto Estimado:
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-serif text-xl md:text-2xl font-bold text-[#211a12] block">
                    €{totalPrice}
                  </span>
                  <span className="text-[9px] uppercase text-[#444748]/70 block tracking-widest">
                    EUR • Todo Incluido
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Inquiry Details Form */}
            <form
              id="calc-right-column"
              onSubmit={handleSubmit}
              className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto"
            >
              <div className="space-y-4">
                <h3 className="font-serif text-xl tracking-wide text-[#211a12]">
                  Detalles de la Pareja
                </h3>

                {/* Input: Couple names */}
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-semibold tracking-wider text-[#444748] flex items-center gap-1">
                    Nuestros Nombres <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="coupleNames"
                    value={formData.coupleNames}
                    onChange={handleInputChange}
                    placeholder="Ej. Sofía & Alejandro"
                    required
                    className="w-full text-xs p-3 rounded-sm border border-[#c4c7c7] bg-white text-[#211a12] focus:border-[#211a12] focus:ring-0 outline-none transition-colors"
                  />
                </div>

                {/* Grid Input: Email & Telephone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-semibold tracking-wider text-[#444748]">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="ejemplo@correo.com"
                      required
                      className="w-full text-xs p-3 rounded-sm border border-[#c4c7c7] bg-white text-[#211a12] focus:border-[#211a12] focus:ring-0 outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-semibold tracking-wider text-[#444748]">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleInputChange}
                      placeholder="+34 600 000 000"
                      className="w-full text-xs p-3 rounded-sm border border-[#c4c7c7] bg-white text-[#211a12] focus:border-[#211a12] focus:ring-0 outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Grid Input: Wedding Date & Venue */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-semibold tracking-wider text-[#444748] flex items-center gap-1">
                      <CalendarIcon className="w-3.5 h-3.5 text-[#c5a880]" />
                      Fecha de Boda <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="weddingDate"
                      value={formData.weddingDate}
                      onChange={handleInputChange}
                      required
                      className="w-full text-xs p-3 rounded-sm border border-[#c4c7c7] bg-white text-[#211a12] focus:border-[#211a12] focus:ring-0 outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-semibold tracking-wider text-[#444748] flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#c5a880]" />
                      Finca / Lugar
                    </label>
                    <input
                      type="text"
                      name="venueName"
                      value={formData.venueName}
                      onChange={handleInputChange}
                      placeholder="Ej. Finca Son Marroig"
                      className="w-full text-xs p-3 rounded-sm border border-[#c4c7c7] bg-white text-[#211a12] focus:border-[#211a12] focus:ring-0 outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Guest select dropdown */}
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-semibold tracking-wider text-[#444748] flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-[#c5a880]" />
                    Invitados Estimados
                  </label>
                  <select
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleInputChange}
                    className="w-full text-xs p-3 rounded-sm border border-[#c4c7c7] bg-white text-[#211a12] focus:border-[#211a12] focus:ring-0 outline-none transition-colors cursor-pointer"
                  >
                    <option value="menos de 50">Íntima (Menos de 50 invitados)</option>
                    <option value="50-100">Boutique (50 - 100 invitados)</option>
                    <option value="100-150">Clásica (100 - 150 invitados)</option>
                    <option value="150-250">Gran Evento (150 - 250 invitados)</option>
                    <option value="mas de 250">Gala (Más de 250 invitados)</option>
                  </select>
                </div>

                {/* Textarea: Custom details */}
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-semibold tracking-wider text-[#444748]">
                    Cuéntanos tu historia de amor y detalles de su día
                  </label>
                  <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleInputChange}
                    rows={2.5}
                    placeholder="Nos encantaría saber de sus planes, estilo del evento, o cualquier petición de cobertura especial..."
                    className="w-full text-xs p-3 rounded-sm border border-[#c4c7c7] bg-white text-[#211a12] focus:border-[#211a12] focus:ring-0 outline-none transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Submit button */}
              <button
                id="submit-inquiry-button"
                type="submit"
                disabled={isSubmitting}
                className="ghost-btn w-full py-3.5 text-xs uppercase tracking-widest bg-[#211a12] text-white hover:bg-transparent hover:text-[#211a12] transition-all duration-300 flex items-center justify-center gap-2 mt-6 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Procesando...</span>
                  </>
                ) : (
                  <>
                    <Heart className="w-4 h-4 text-[#fed65b]" fill="#fed65b" />
                    <span>Solicitar Disponibilidad</span>
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
