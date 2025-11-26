"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Our Doctors", href: "#doctors" },
    { name: "Stories", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-forest-950/95 backdrop-blur-md py-4 shadow-lg"
            : "bg-white/80 backdrop-blur-sm py-6 shadow-sm"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className={`text-2xl font-serif font-bold transition-colors ${
            isScrolled ? "text-forest-50" : "text-forest-950"
          }`}>
            Dental Square
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm tracking-wide font-medium transition-colors ${
                  isScrolled 
                    ? "text-sand-100 hover:text-forest-400" 
                    : "text-forest-900 hover:text-forest-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className={`px-6 py-2.5 rounded-full font-medium transition-all shadow-md ${
                isScrolled
                  ? "bg-sand-500 text-white hover:bg-sand-600"
                  : "bg-forest-600 text-white hover:bg-forest-700"
              }`}
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden transition-colors ${
              isScrolled ? "text-sand-50" : "text-forest-950"
            }`}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-forest-950 flex flex-col justify-center items-center"
          >
            <button
              className="absolute top-6 right-6 text-sand-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="flex flex-col space-y-8 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-3xl font-serif text-sand-100 hover:text-forest-400"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                className="text-2xl font-medium text-forest-400 border border-forest-400 px-8 py-3 rounded-full mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

