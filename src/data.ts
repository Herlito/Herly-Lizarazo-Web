/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GalleryItem, ServiceCollection, FaqItem, Testimonial } from './types';

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFNm3n_AaPD57AweuIN6v074miWAv2rNChErPpP3DL4VJ3616gPgOnFkJfFqP1ruebF061ceUzsNDd2e_BF5nLkXf0l7F8Ytbe4L0gBorYMdTWZqe3kKxYU2vsfK9-2ePEQ8XtG21k151f2aBElK5Nz_tu0nBD0UluxTjJfT01iPj2q_Uv26nX9fiAhbmroSLC-ciW38q2hV9ppQfN6TiooHwTEOI4Y63yvFq-dFnfeZexc5D9-9rl',
    category: 'bodas-destino',
    title: 'Boda en los Acantilados',
    location: 'Villa Cimbrone, Costa Amalfitana, Italia',
    alt: 'Pareja de novios elegante en los acantilados de la Costa Amalfitana al atardecer.',
    sizeClass: 'md:col-span-8 row-span-2',
    aspectRatio: '4/3',
  },
  {
    id: '2',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXVB7_OHZlC7BO3XY_Vfldk6Ybb39f5kO1NjW-tjVSbQ5g23tKpFfg75xQhqGUKx6l7AvAHwFkMRAHnFLdtlF5aYjKGNpXhGZPbLbQC1Yh1DFxMJxuBEmErNcBPXUbt9U1RC4pxtxPGHyU07dbIEEgic4I5g_AUjmYkPGt3uR0q9K_s-BRJwiduWRHRFU6_On51BXO6ufPdlX2fkMTagHjMfIFeTzenNAwr18Yv6IZSx-Hxcp_Kw0D',
    category: 'fotografia',
    title: 'La Ceremonia Dorada',
    location: 'Toscana, Italia',
    alt: 'Novios riéndose y compartiendo un momento íntimo durante sus votos en el altar al atardecer.',
    sizeClass: 'md:col-span-4 row-span-2',
    aspectRatio: '3/4',
  },
  {
    id: '3',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4d5cuPrXt1EYvySetxfoJ6toektBLzFxKgSZbY581O19ZYpcPC-3rOSH9W5HsSbrspbmdx9W7czzLURTOx5oVeuFXoLDYOzJTU9gzA1OjZ0PPxxzv_ibb2SdnWoXsmayf7on-hz3tkWeWDtxglBqGrwzyYm2-vGidx7tMOXc8o0-1BIoK4m8y2kooB_g7BAeIrUPWYYomdf47iARME5d8zxaVgctK37DfljR52GatUIE_YrLAPc_t',
    category: 'fotografia',
    title: 'El Vestido "New Editorial"',
    location: 'Cotswolds, Reino Unido',
    alt: 'Bespoke vestido de novia de encaje colgando elegantemente al lado de un ventanal clásico.',
    sizeClass: 'md:col-span-4 row-span-1',
    aspectRatio: '3/4',
  },
  {
    id: '4',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSd_4olrQaRNJimAyEu_dT4ZzlW-bURA1MXN8n3IYo5CW4mPL9eAFbeQWRWuIslkHouo_7tWY-wCgKK9HKCKT6E1xKH_gr9doHA3fRPHjtk7mURtxFuhupm8d7LpVxI5mhQQs_8r_XAYxt2Hy9PLH7nXezPYNQkVbXO7zLjiG3DzByU81oS9Scx4HR9XvCAQW9e1cm430J9QojJNEnI5yAWRU5Z3DxYBqh1y7g_RRw-YkwqVFcpLbm',
    category: 'fotografia',
    title: 'Detalle de Alianzas',
    location: 'Siena, Italia',
    alt: 'Alianzas de boda de lujo reposando sobre un cojín de terciopelo rosa pastel.',
    sizeClass: 'md:col-span-4 row-span-1',
    aspectRatio: '4/3',
  },
  {
    id: '5',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7rAbEZpPFB5TZOHDjq4JiNo-LUb1nLCiahJWAKeFPSLHpcsDDvCsSQ9CaV1fb747sPoDAYQPYW6ujdWAyvO7FFptn7cFhXZmNNYNyO5uQPBw7ksAjEHNVyJKlFNdl3DQMrasyzT7l8yXN7KmEQwy8yBaJz-ibf_Rn2jmEuRkqxLeDdxfJsXXDEzTq_WOGvsxowKsmikKG4aYp3agNA2mh6Z98oUkqhYPGg3LXoSg41LtL2jy2cIJ7',
    category: 'video',
    title: 'Celebración Bajo las Luces',
    location: 'Provenza, Francia',
    alt: 'Pareja feliz bailando abrazada bajo hileras de luces en una recepción al aire libre de lujo.',
    sizeClass: 'md:col-span-4 row-span-1',
    aspectRatio: '4/3',
  },
  {
    id: '6',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlpwjIckJ_GEO_tJdzKWqQe7KmEYdjkBpXqBR06PMpznE6Cw0z9M82Xwkuy-ZtzFafVKGk-dstLzes-7TRbCxK-FV1HKZREqQ4yiCyvQUNkHPeXSfAr6eovgXcVMHWoSAZaj7DlGeMwuWAXWsCPUtgynwiOKTwoUfRGEmU8u6Jk1-uPcZXUUY7R99MOjXJo5TG1cGqU5TecyHIlW3t6H-dqaTcunMzNZckBXsVx9RdEMJKT__gHlWz',
    category: 'video',
    title: 'Emoción Genuina',
    location: 'Catedral de Mallorca, España',
    alt: 'Retrato en blanco y negro del novio secándose una lágrima durante los votos matrimoniales.',
    sizeClass: 'md:col-span-12 row-span-1',
    aspectRatio: '21/9',
  }
];

export const SERVICE_COLLECTIONS: ServiceCollection[] = [
  {
    id: 'fotografia',
    name: 'Fotografía',
    description: 'Cobertura documental y editorial completa del día de su boda para revivir la elegancia eterna.',
    features: [
      '10 horas de cobertura continua',
      '2 fotógrafos principales para múltiples ángulos',
      'Galería online privada de alta resolución',
      'Entrega de 600+ fotos curadas y editadas',
      'Derechos de impresión personal completos',
    ],
    isMostPopular: false,
    basePrice: 2800,
  },
  {
    id: 'video',
    name: 'Video Cinematográfico',
    description: 'Una película de boda narrativa con sonido de ambiente premium y etalonaje de grado cinematográfico.',
    features: [
      '10 horas de cobertura continua',
      'Highlight film cinemático de 5-7 minutos',
      'Documental completo de ceremonia y discursos',
      'Tomas aéreas con dron profesional (sujeto a clima)',
      'Diseño de audio inmersivo y música licenciada',
    ],
    isMostPopular: true,
    basePrice: 3500,
  },
  {
    id: 'paquete-completo',
    name: 'Paquete Completo',
    description: 'La experiencia definitiva de cobertura visual para documentar con maestría cada detalle íntimo.',
    features: [
      'Cobertura ilimitada durante el día del evento',
      '2 Fotógrafos + 2 Cineastas de boda',
      'Sesión de fotos de compromiso (Preboda) incluida',
      'Álbum Fine Art premium impreso a mano',
      'Video resumido para redes sociales (Reel/Short)',
    ],
    isMostPopular: false,
    basePrice: 5900,
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    coupleNames: 'Sofía & Alejandro',
    location: 'Boda en Florencia, Italia',
    quote: 'No sabíamos qué esperar porque no nos gusta posar, pero el equipo nos hizo sentir increíblemente cómodos. Capturaron momentos de los que ni nos percatamos, logrando una narrativa visual elegante y atemporal.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=400',
    year: '2025'
  },
  {
    id: '2',
    coupleNames: 'Valentina & Mateo',
    location: 'Boda en la Costa Brava',
    quote: 'La cinematografía superó todo lo que podíamos soñar. El nivel de detalle, la iluminación natural y el etalonaje del video son puro arte cinematográfico. Es como revivir nuestra película de amor favorita.',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=400',
    year: '2024'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: '¿Cuál es su estilo de fotografía?',
    answer: 'Definimos nuestro estilo como "New Editorial". Fusionamos la elegancia, estética y detalles de la alta moda con un enfoque puramente documental. Buscamos capturar la realidad tal cual sucede, sin forzar poses incómodas, dándole protagonismo a las emociones reales y a la iluminación natural.',
    category: 'servicios'
  },
  {
    id: 'faq-2',
    question: '¿Viajan para bodas de destino?',
    answer: '¡Absolutamente! Más de la mitad de nuestras bodas son bodas de destino. Hemos tenido el honor de documentar historias de amor en Italia, Francia, el Reino Unido y por toda España. Contamos con tarifas integradas de viaje muy transparentes y simplificadas para evitar cualquier sorpresa.',
    category: 'logistica'
  },
  {
    id: 'faq-3',
    question: '¿Cuánto tiempo tardan en entregar las fotos y videos?',
    answer: 'Para fotografía, enviamos un adelanto de 30-40 imágenes durante las primeras 72 horas después de la boda para que puedan compartir con amigos y familia. La galería online completa con el trabajo finalizado se entrega en un plazo máximo de 6 a 8 semanas. Los videos cinemáticos se entregan en un rango de 10 a 12 semanas.',
    category: 'entregas'
  },
  {
    id: 'faq-4',
    question: '¿Cómo funciona el proceso de reserva?',
    answer: 'Una vez que hayamos conversado de sus planes mediante nuestro formulario de disponibilidad, firmamos un contrato digital y requerimos un depósito de reserva del 30% para asegurar formalmente su fecha. El resto se divide en plazos cómodos antes de la boda.',
    category: 'logistica'
  }
];
