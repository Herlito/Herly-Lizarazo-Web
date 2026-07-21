/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Info, HelpCircle } from 'lucide-react';
import { FaqItem } from '../types';

interface FaqSectionProps {
  items: FaqItem[];
}

export default function FaqSection({ items }: FaqSectionProps) {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div id="faq-wrapper" className="max-w-3xl mx-auto space-y-4">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            id={`faq-item-${item.id}`}
            className="border border-[#c4c7c7]/30 bg-white/50 rounded-sm transition-all duration-300"
          >
            {/* Header Accordion Trigger */}
            <button
              onClick={() => toggleFaq(item.id)}
              className="w-full p-5 flex justify-between items-center text-left focus:outline-none group"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                <HelpCircle className="w-4.5 h-4.5 text-[#c5a880] shrink-0" />
                <span className="font-serif text-sm md:text-base font-medium text-[#211a12] group-hover:text-[#735c00] transition-colors">
                  {item.question}
                </span>
              </div>
              <div className="p-1 rounded-full group-hover:bg-[#faecdd] transition-colors">
                {isOpen ? (
                  <ChevronUp className="w-4 h-4 text-[#211a12]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#211a12]" />
                )}
              </div>
            </button>

            {/* Accordion Content Panel */}
            <div
              className={`transition-all duration-500 overflow-hidden ${
                isOpen ? 'max-h-80 border-t border-[#c4c7c7]/20' : 'max-h-0'
              }`}
            >
              <div className="p-5 text-xs md:text-sm text-[#444748] leading-relaxed font-sans bg-[#fff8f4]/40">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
