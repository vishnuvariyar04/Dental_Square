"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

const galleryImages = [
  {
    id: 1,
    src: "/IMG_7636.jpg",
    alt: "Modern dental clinic reception area",
    span: "row-span-2",
  },
  {
    id: 2,
    src: "/IMG_7639.jpg",
    alt: "Professional dental tools and equipment",
    span: "row-span-1",
  },
  {
    id: 3,
    src: "/IMG_7640.jpg",
    alt: "Happy patient with beautiful smile",
    span: "row-span-1",
  },
  {
    id: 4,
    src: "/IMG_7641.jpg",
    alt: "State-of-the-art dental examination room",
    span: "row-span-2",
  },
  {
    id: 5,
    src: "/IMG_7642.jpg",
    alt: "Patient receiving quality dental care",
    span: "row-span-1",
  },
  {
    id: 6,
    src: "/IMG_7643.jpg",
    alt: "Sterilized dental hygiene instruments",
    span: "row-span-1",
  },
  {
    id: 7,
    src: "/IMG_7644.jpg",
    alt: "Dentist consulting with patient",
    span: "row-span-2",
  },
  {
    id: 8,
    src: "/IMG_7645.jpg",
    alt: "Luxury dental clinic interior design",
    span: "row-span-1",
  },
  {
    id: 9,
    src: "/IMG_7646.jpg",
    alt: "Comfortable waiting area with modern amenities",
    span: "row-span-1",
  },
  {
    id: 10,
    src: "/IMG_7649.jpg",
    alt: "Advanced dental treatment room",
    span: "row-span-2",
  },
  {
    id: 11,
    src: "/IMG_7636.jpg",
    alt: "Premium dental chair and equipment",
    span: "row-span-1",
  },
  {
    id: 12,
    src: "/IMG_7639.jpg",
    alt: "Precision dental instruments",
    span: "row-span-1",
  },
  {
    id: 13,
    src: "/IMG_7640.jpg",
    alt: "Welcoming reception desk",
    span: "row-span-1",
  },
  {
    id: 14,
    src: "/IMG_7641.jpg",
    alt: "Satisfied patient after treatment",
    span: "row-span-2",
  },
  {
    id: 15,
    src: "/IMG_7642.jpg",
    alt: "Clean and modern treatment space",
    span: "row-span-1",
  },
];

export default function Gallery() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="gallery" className="py-24 bg-white scroll-mt-20">
      <div className="container px-6 mx-auto">
        <div className="mb-16 text-center">
          <Reveal width="100%">
            <h4 className="mb-2 text-sm font-bold tracking-widest uppercase text-forest-600">Our Space</h4>
            <h2 className="font-serif text-4xl md:text-5xl text-forest-950">A Sanctuary for Your Smile</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Step into our spa-like environment designed for your comfort and relaxation.
            </p>
          </Reveal>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`relative ${image.span} rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow`}
              onHoverStart={() => setHoveredId(image.id)}
              onHoverEnd={() => setHoveredId(null)}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredId === image.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex absolute inset-0 items-end p-6 bg-gradient-to-t to-transparent from-forest-950/80 via-forest-900/40"
              >
                <p className="font-serif text-lg text-white">{image.alt}</p>
              </motion.div>

              {/* Decorative Corner */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-tr-2xl border-t-2 border-r-2 opacity-0 transition-opacity border-white/30 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

