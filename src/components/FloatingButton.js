"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingButton() {
  return (
    <motion.a
      href="https://wa.me/15551234567?text=Hello%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20Dental%20Square"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 bg-green-500 text-white p-5 rounded-full shadow-2xl hover:bg-green-600 transition-colors flex items-center justify-center group"
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      animate={{ y: [0, -10, 0] }}
      transition={{ 
        y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
      }}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} className="text-white" strokeWidth={2} />
      <motion.span
        initial={{ opacity: 0, width: 0 }}
        whileHover={{ opacity: 1, width: "auto" }}
        className="ml-0 group-hover:ml-2 overflow-hidden whitespace-nowrap font-medium text-sm"
      >
        Chat with us
      </motion.span>
    </motion.a>
  );
}

