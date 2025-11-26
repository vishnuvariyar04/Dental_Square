"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1588776814546-1b8c1dd32307?q=80&w=2070&auto=format&fit=crop",
    alt: "Modern dental clinic reception area",
    span: "row-span-2",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop",
    alt: "Professional dental tools and equipment",
    span: "row-span-1",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop",
    alt: "Happy patient with beautiful smile",
    span: "row-span-1",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop",
    alt: "State-of-the-art dental examination room",
    span: "row-span-2",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop",
    alt: "Patient receiving quality dental care",
    span: "row-span-1",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1629909615957-be38b9e556a6?q=80&w=2068&auto=format&fit=crop",
    alt: "Sterilized dental hygiene instruments",
    span: "row-span-1",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1974&auto=format&fit=crop",
    alt: "Dentist consulting with patient",
    span: "row-span-2",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop",
    alt: "Luxury dental clinic interior design",
    span: "row-span-1",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=2069&auto=format&fit=crop",
    alt: "Comfortable waiting area with modern amenities",
    span: "row-span-1",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?q=80&w=2070&auto=format&fit=crop",
    alt: "Advanced dental treatment room",
    span: "row-span-2",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1609840114035-3c981407e31f?q=80&w=2070&auto=format&fit=crop",
    alt: "Premium dental chair and equipment",
    span: "row-span-1",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop",
    alt: "Precision dental instruments",
    span: "row-span-1",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1588776814546-1b8c1dd32307?q=80&w=2070&auto=format&fit=crop",
    alt: "Welcoming reception desk",
    span: "row-span-1",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop",
    alt: "Satisfied patient after treatment",
    span: "row-span-2",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop",
    alt: "Clean and modern treatment space",
    span: "row-span-1",
  },
];

export default function Gallery() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="gallery" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Reveal width="100%">
            <h4 className="text-forest-600 font-bold tracking-widest uppercase text-sm mb-2">Our Space</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-forest-950">A Sanctuary for Your Smile</h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
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
                className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-900/40 to-transparent flex items-end p-6"
              >
                <p className="text-white font-serif text-lg">{image.alt}</p>
              </motion.div>

              {/* Decorative Corner */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/30 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Note for User */}
        <Reveal delay={0.5}>
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm italic">
              These are placeholder images. Replace them with your actual clinic photos for the best experience.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

