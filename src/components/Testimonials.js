"use client";

import { useState, useEffect } from "react";
import Reveal from "./Reveal";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Cosmetic Patient",
    content: "I never thought I'd look forward to a dentist appointment. Dental Square is on another level—truly a spa experience.",
    initials: "SJ",
    color: "bg-pink-100 text-pink-600",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Implant Patient",
    content: "Professional, precise, and painless. The team made me feel completely at ease throughout my entire restoration process.",
    initials: "MC",
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Regular Checkup",
    content: "The attention to detail is unmatched. My smile has never looked better, and I actually enjoy the calming atmosphere.",
    initials: "ET",
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 4,
    name: "David Martinez",
    role: "Orthodontic Patient",
    content: "The entire team is incredibly professional and caring. They made my orthodontic journey smooth and comfortable.",
    initials: "DM",
    color: "bg-green-100 text-green-600",
  },
  {
    id: 5,
    name: "Lisa Anderson",
    role: "Family Dentistry",
    content: "We trust Dental Square with our entire family's dental care. The environment is welcoming and the care is exceptional.",
    initials: "LA",
    color: "bg-orange-100 text-orange-600",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        paginate(1);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isPaused]);

  return (
    <section 
      id="testimonials" 
      className="py-24 bg-sand-100 scroll-mt-20 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Reveal width="100%">
            <h4 className="text-forest-600 font-bold tracking-widest uppercase text-sm mb-2">Client Stories</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-forest-950">Loved by Patients</h2>
          </Reveal>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel */}
          <div className="relative h-[400px] md:h-[350px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full"
              >
                <div className="bg-white p-10 md:p-12 rounded-3xl shadow-2xl shadow-sand-300/50 mx-4 md:mx-8">
                  <div className="flex gap-1 mb-6 justify-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={20} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 text-xl md:text-2xl italic mb-8 text-center leading-relaxed font-serif">
                    "{testimonials[currentIndex].content}"
                  </p>
                  
                  <div className="flex items-center justify-center gap-4">
                    <div className={`w-14 h-14 rounded-full ${testimonials[currentIndex].color} flex items-center justify-center font-bold text-xl`}>
                      {testimonials[currentIndex].initials}
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-forest-950 text-xl">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-sm text-gray-500">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white hover:bg-forest-50 text-forest-900 p-3 rounded-full shadow-lg transition-all hover:scale-110 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white hover:bg-forest-50 text-forest-900 p-3 rounded-full shadow-lg transition-all hover:scale-110 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? "w-8 bg-forest-600" 
                    : "w-2 bg-forest-300 hover:bg-forest-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
