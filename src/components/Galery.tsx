"use client";
import { motion, useInView } from "framer-motion";
import { ParallaxScroll } from "./ui/parallax-scroll";
import { useRef } from "react";

export function Galery() {
  const fadeInRef = useRef(null);
  const fadeInInView = useInView(fadeInRef, {
    once: true,
  });

  const fadeUpVariants = {
    initial: {
      opacity: 0,
      y: 24,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  const images = [
    "/images/galery/galery-1.jpg",
    "/images/galery/galery-2.jpg",
    "/images/galery/galery-3.jpg",
    "/images/galery/galery-4.jpg",
    "/images/galery/galery-5.jpg",
    "/images/galery/galery-6.jpg",
    "/images/galery/galery-7.jpg",
    "/images/galery/galery-8.jpg",
    "/images/galery/galery-9.jpg",
  ];
  return (
    <motion.div
      ref={fadeInRef}
      animate={fadeInInView ? "animate" : "initial"}
      variants={fadeUpVariants}
      initial={false}
      transition={{
        duration: 0.6,
        delay: 0.1,
        ease: [0.21, 0.47, 0.32, 0.98],
        type: "spring",
      }}
    >
      <ParallaxScroll images={images} />
    </motion.div>
  );
}
