/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface GalleryItem {
  id: string;
  src: string;
  category: 'fotografia' | 'video' | 'bodas-destino';
  title: string;
  location: string;
  alt: string;
  sizeClass: string; // for tailwind bento grid positioning
  aspectRatio: string;
}

export interface ServiceCollection {
  id: string;
  name: string;
  description: string;
  features: string[];
  isMostPopular?: boolean;
  basePrice?: number;
  moreInfoUrl?: string;
}

export interface InquiryFormData {
  coupleNames: string;
  email: string;
  telephone: string;
  weddingDate: string;
  venueName: string;
  packageType: string;
  details: string;
  guestCount: string;
  wantsDrone: boolean;
  wantsEngagementSession: boolean;
  wantsPrintedAlbum: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'servicios' | 'logistica' | 'entregas';
}

export interface Testimonial {
  id: string;
  coupleNames: string;
  location: string;
  quote: string;
  image: string;
  year: string;
}
