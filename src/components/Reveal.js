"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Reveal({ 
  children, 
  width = "fit-content", 
  delay = 0,
  variant = "fadeUp" 
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const variants = {
    fadeUp: {
      hidden: { opacity: 0, y: 75 },
      visible: { opacity: 1, y: 0 },
    },
    fadeDown: {
      hidden: { opacity: 0, y: -75 },
      visible: { opacity: 1, y: 0 },
    },
    fadeLeft: {
      hidden: { opacity: 0, x: -75 },
      visible: { opacity: 1, x: 0 },
    },
    fadeRight: {
      hidden: { opacity: 0, x: 75 },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    scaleBlur: {
      hidden: { opacity: 0, scale: 0.9, filter: "blur(10px)" },
      visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
    },
  };

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={variants[variant]}
        initial="hidden"
        animate={mainControls}
        transition={{ 
          duration: 0.7, 
          delay: delay,
          ease: [0.25, 0.4, 0.25, 1]
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

